import { PsiItem } from '../data/PsiItem.mjs';
import { PsiActor } from '../data/PsiActor.mjs';
import { psiPointCastDialog } from '../ui/psiPointCastDialog.js';

export async function preambleComplete(workflow) {
  const castMin = PsiItem.castMin(workflow.item);
  if (!castMin || castMin < 0) return; // not a psi item

  const limit = PsiActor.psiLimit(workflow.actor);
  if (!limit || limit < 0) {
    ui.notifications.error('Psi limit not set');
    return false;
  }

  const points = PsiActor.psiPoints(workflow.actor);
  if (!points || points < 0) {
    ui.notifications.error('Psi exhausted');
    return false;
  }

  const canScale = PsiItem.canScale(workflow.item);

  if (castMin > limit) {
    ui.notifications.error('Psi limit exceeded');
    return false;
  }

  if (castMin > points) {
    ui.notifications.error('Not enough psi points');
    return false;
  }

  // points > 0, limit > 0, castMin > 0
  // castMin <= limit, castMin <= points

  // --- castMin --- limit --- points ---
  // --- castMin --- points --- limit ---

  let psiUsed;

  if (canScale) {
    if (castMin === points) {
      // castMin == points <= limit
      psiUsed = castMin;
    } else if (castMin === limit) {
      // castMin == limit <= points
      psiUsed = limit;
    } else {
      // castMin < points, castMin < limit
      const scaleTo = Math.min(points, limit);
      psiUsed = await psiPointCastDialog(castMin, scaleTo);
      if (psiUsed === 0) return false;
    }
  } else {
    psiUsed = castMin;
  }

  await PsiActor.storeCast(workflow.actor, psiUsed, points - psiUsed);
}
