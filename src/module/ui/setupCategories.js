import {afterFunction} from '../utils.js';
import {PsiActor} from '../data/PsiActor.mjs';
import {PsiItem} from '../data/PsiItem.mjs';

export function setupCategories(hud) {
  afterFunction(hud.systemManager, 'doGetActionHandler', (result, ...args) => {
    afterFunction(result, 'buildFurtherActions', buildFurtherActions);
  });
  afterFunction(hud.systemManager, 'doRegisterDefaultFlags', (result, ...args) => {
    const focusCategory = {
      id: 'talents',
      nestId: 'talents',
      name: 'Talents',
      subcategories: [
        {
          id: 'focus',
          nestId: 'focus',
          name: 'Focus',
        },
        {
          id: 'talents_talents',
          nestId: 'talents_talents',
          name: 'Talents'
        },
      ],
    };

    const psionicsCategory = {
      id: 'disciplines',
      nestId: 'disciplines',
      name: 'Disciplines',
      subcategories: [
        {
          id: 'psi-1',
          nestId: 'discipline_psi-1',
          name: 'Psi 1',
        },
        {
          id: 'psi-2',
          nestId: 'discipline_psi-2',
          name: 'Psi 2',
        },
        {
          id: 'psi-3',
          nestId: 'discipline_psi-3',
          name: 'Psi 3',
        },
        {
          id: 'psi-4',
          nestId: 'discipline_psi-4',
          name: 'Psi 4',
        },
        {
          id: 'psi-5',
          nestId: 'discipline_psi-5',
          name: 'Psi 5',
        },
        {
          id: 'psi-6',
          nestId: 'discipline_psi-6',
          name: 'Psi 6',
        },
        {
          id: 'psi-7',
          nestId: 'discipline_psi-7',
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

  const isPsi = PsiActor.isPsiActor(actor);
  if (!isPsi) return;

  const limit = PsiActor.psiLimit(actor);
  if (!limit) return;

  const inCombat = !!game?.combat?.started;

  const map = {
    focus: [],
    talents_talents: [],
    'psi-1': [],
    'psi-2': [],
    'psi-3': [],
    'psi-4': [],
    'psi-5': [],
    'psi-6': [],
    'psi-7': [],
  };

  const points = PsiActor.psiPoints(actor);

  for (const [key, item] of this.items) {
    if (inCombat && !PsiItem.isCombatViable(item)) continue;

    if (PsiItem.isFocus(item)) {
      map['focus'].push(item);
      continue;
    }
    if (PsiItem.isTalent(item)) {
      map['talents_talents'].push(item);
      continue;
    }

    const castMin = PsiItem.castMin(item);
    if (!castMin) continue;
    if (points < castMin) continue;
    if (castMin > limit) continue;

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
