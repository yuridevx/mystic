import { PsiActor } from '../data/PsiActor.mjs';

export function combatStart(combat, options) {
  for (const combatant of combat.combatants) {
    const actor = combatant.actor;
    if (!actor) {
      continue;
    }
    if (PsiActor.hasCast(actor)) {
      PsiActor.resetCast(actor);
    }
  }
}

export function combatRound(combat, options) {
  resetOnTurn(combat, options);
}

export function combatTurn(combat, options) {
  resetOnTurn(combat, options);
}

function resetOnTurn(combat, options) {
  const actor = combat?.combatant?.actor;
  if (!actor) {
    return;
  }
  if (PsiActor.hasCast(actor)) {
    PsiActor.resetCast(actor);
  }
}
