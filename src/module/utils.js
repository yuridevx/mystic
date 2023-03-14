export function catchValueSet(object, key, cb) {
  const desc = Object.getOwnPropertyDescriptor(object, key);
  if (desc && desc.configurable === false) {
    throw new Error(`Cannot catch value set on ${key} of ${object}`);
  }
  if (desc?.set || desc?.get) {
    const originalSet = desc.set;
    const originalGet = desc.get;

    Object.defineProperty(object, key, {
      set: function (value) {
        cb.call(this, value);
        if (originalSet) {
          originalSet.call(this, value);
        }
      },
      get: function () {
        if (originalGet) {
          return originalGet.call(this);
        }
        return undefined;
      },
      ...desc,
    });
  } else {
    Object.defineProperty(object, key, {
      set: function (value) {
        cb.call(this, value);
        Object.defineProperty(object, key, {
          value: value,
          writable: desc?.writable ?? true,
          configurable: desc?.configurable ?? true,
        });
      },
      get() {
        return undefined;
      },
      configurable: true,
      enumerable: true,
    });
  }
}

export function afterFunction(object, key, cb) {
  const wrapped = object[key];
  object[key] = function (...args) {
    const result = wrapped.call(this, ...args);
    if (result instanceof Promise) {
      return result.then((result) => {
        const cbResult = cb.call(this, result, ...args);
        if (cbResult instanceof Promise) {
          return cbResult.then(() => result);
        } else {
          return result;
        }
      });
    } else {
      cb.call(this, result, ...args);
      return result;
    }
  };
}
