import { afterFunction } from '../utils.js';
import { PsiActor } from '../data/PsiActor.mjs';
import { PsiItem } from '../data/PsiItem.mjs';

export function setupCategories(hud) {
  afterFunction(hud.systemManager, 'doGetActionHandler', (result, ...args) => {
    afterFunction(result, 'buildFurtherActions', buildFurtherActions);
  });
  afterFunction(hud.systemManager, 'doRegisterDefaultFlags', (result, ...args) => {
    const focusCategory = {
      id: 'focus',
      nestId: 'focus',
      name: 'Focus',
      subcategories: [
        {
          id: 'focus_focus',
          nestId: 'focus_focus',
          name: 'Focus',
        },
      ],
    };
    const psionicsCategory = {
      id: 'psionics',
      nestId: 'psionics',
      name: 'Psionics',
      subcategories: [
        {
          id: 'psi-1',
          nestId: 'psionics_psi-1',
          name: 'Psi 1',
        },
        {
          id: 'psi-2',
          nestId: 'psionics_psi-2',
          name: 'Psi 2',
        },
        {
          id: 'psi-3',
          nestId: 'psionics_psi-3',
          name: 'Psi 3',
        },
        {
          id: 'psi-4',
          nestId: 'psionics_psi-4',
          name: 'Psi 4',
        },
        {
          id: 'psi-5',
          nestId: 'psionics_psi-5',
          name: 'Psi 5',
        },
        {
          id: 'psi-6',
          nestId: 'psionics_psi-6',
          name: 'Psi 6',
        },
        {
          id: 'psi-7',
          nestId: 'psionics_psi-7',
          name: 'Psi 7',
        },
      ],
    };

    const categories = [focusCategory, psionicsCategory];

    for (const category of categories) {
      for (const subcategory of category.subcategories) {
        subcategory.type = 'system-derived';
        const clone = structuredClone(subcategory);
        delete clone.nestId;
        result.subcategories.push(clone);
      }
    }

    result.categories.push(...categories);
  });
}

async function buildFurtherActions() {
  const actor = this?.token?.actor;
  if (!actor) return;

  const points = PsiActor.psiPoints(actor);
  if (!points) return;

  const limit = PsiActor.psiLimit(actor);
  if (!limit) return;

  const map = {
    focus_focus: [],
    'psi-1': [],
    'psi-2': [],
    'psi-3': [],
    'psi-4': [],
    'psi-5': [],
    'psi-6': [],
    'psi-7': [],
  };

  for (const [key, item] of this.items) {
    if (PsiItem.isFocus(item)) {
      map['focus_focus'].push(item);
      continue;
    }
    const castMin = PsiItem.castMin(item);
    if (!castMin) continue;

    map[`psi-${castMin}`].push(item);
  }

  for (const [key, items] of Object.entries(map)) {
    const mapped = items.map((i) => [i.id, i]);
    this._buildActions(
      mapped,
      {
        id: key,
      },
      'item',
    );
  }
}
