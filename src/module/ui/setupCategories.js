import {PsiActor} from '../data/PsiActor.mjs';
import {PsiItem} from '../data/PsiItem.mjs';
import {afterFunction} from "../utils.js";


class MysticActionHandler {
  constructor(
    actionHandler
  ) {
    this.actionHandler = actionHandler
  }

  extendActionList() {
    const actor = this?.actionHandler?.token?.actor;
    if (!actor) return;

    const isPsi = PsiActor.isPsiActor(actor);
    if (!isPsi) return;

    const items = this?.actionHandler?.items
    if (!items || !items?.size) return

    const limit = PsiActor.psiLimit(actor);
    if (!limit) return;

    const inCombat = !!game?.combat?.started;

    const map = {
      focus: [],
      talents: [],
      'psi-1': [],
      'psi-2': [],
      'psi-3': [],
      'psi-4': [],
      'psi-5': [],
      'psi-6': [],
      'psi-7': [],
    };

    const points = PsiActor.psiPoints(actor);

    for (const [key, item] of items) {
      if (inCombat && !PsiItem.isCombatViable(item)) continue;

      if (PsiItem.isFocus(item)) {
        map['focus'].push(item);
        continue;
      }
      if (PsiItem.isTalent(item)) {
        map['talents'].push(item);
        continue;
      }

      const castMin = PsiItem.castMin(item);
      if (!castMin) continue;
      if (points < castMin) continue;
      if (castMin > limit) continue;

      map[`psi-${castMin}`].push(item);
    }

    for (const [key, items] of Object.entries(map)) {
      const actions = items.map(item => {
        return {
          "id": item.id,
          "name": item.name,
          "encodedValue": `item|${item.id}`,
          "cssClass": "",
          "img": item.img,
          "icon2": null,
          "info1": {
            "text": ""
          },
          "info2": {
            "text": ""
          },
          "info3": {
            "text": ""
          },
          "listName": `Item: ${item.name}`,
          "tooltip": ""
        }
      })


      this.actionHandler.addActions(
        actions,
        {
          id: key,
        },
      );
    }
  }
}

export function setupCategories(hud) {
  afterFunction(hud, 'init', function (result, ...args) {
    this.actionHandler.addFurtherActionHandler(new MysticActionHandler(this.actionHandler))
  });

  afterFunction(hud.systemManager, 'doRegisterDefaultFlags', (result, ...args) => {
    const groups = [
      {
        id: "talents",
        name: "Talents",
      },
      {
        id: "focus",
        name: "Focus",
      },
      {
        id: 'psi-1',
        name: 'Psi 1',
      },
      {
        id: 'psi-2',
        name: 'Psi 2',
      },
      {
        id: 'psi-3',
        name: 'Psi 3',
      },
      {
        id: 'psi-4',
        name: 'Psi 4',
      },
      {
        id: 'psi-5',
        name: 'Psi 5',
      },
      {
        id: 'psi-6',
        name: 'Psi 6',
      },
      {
        id: 'psi-7',
        name: 'Psi 7',
      },
    ]

    const layout = [
      {
        nestId: "psionics",
        id: "psionics",
        name: "Psionics",
        groups: [
          {
            id: "talents",
            name: "Talents",
            type: "system",
            listName: "Talents",
            nestId: "psionics_talents",
          },
          {
            id: "focus",
            name: "Focus",
            type: "system",
            listName: "Focus",
            nestId: "psionics_focus",
          }
        ]
      },
      {
        nestId: "disciplines",
        id: "disciplines",
        name: "Disciplines",
        groups: [
          {
            id: "psi-1",
            name: "Psi 1",
            type: "system",
            listName: "Psi 1",
            nestId: "disciplines_psi-1",
          },
          {
            id: "psi-2",
            name: "Psi 2",
            type: "system",
            listName: "Psi 2",
            nestId: "disciplines_psi-2",
          },
          {
            id: "psi-3",
            name: "Psi 3",
            type: "system",
            listName: "Psi 3",
            nestId: "disciplines_psi-3",
          },
          {
            id: "psi-4",
            name: "Psi 4",
            type: "system",
            listName: "Psi 4",
            nestId: "disciplines_psi-4",
          },
          {
            id: "psi-5",
            name: "Psi 5",
            type: "system",
            listName: "Psi 5",
            nestId: "disciplines_psi-5",
          },
          {
            id: "psi-6",
            name: "Psi 6",
            type: "system",
            listName: "Psi 6",
            nestId: "disciplines_psi-6",
          },
          {
            id: "psi-7",
            name: "Psi 7",
            type: "system",
            listName: "Psi 7",
            nestId: "disciplines_psi-7",
          }
        ]
      }
    ]

    for (const entry of layout) {
      for (const group of entry.groups) {
        group.type = 'system';
        group.listName = group.name;

        const clone = structuredClone(group);
        delete clone.nestId;
        result.groups.push(clone);
      }
    }

    result.layout.push(...layout)
  });
}
