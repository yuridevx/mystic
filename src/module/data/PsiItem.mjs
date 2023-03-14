export class PsiItem {
  static castMinKey = "flags.mystic.castMin";
  static isFocusKey = "flags.mystic.isFocus";

  static castMin(item) {
    return item?.flags?.mystic?.castMin || item?.flags?.mystic?.pointsBase || 0;
  }

  static isFocus(item) {
    return item?.flags?.mystic?.isFocus === true;
  }

  static canScale(item) {
    const parts = item?.system?.damage?.parts;
    if (!parts) return false;
    for (const formula of parts) {
      if (formula[0].includes("@psi")) {
        return true;
      }
    }
    return false;
  }
}
