import { PsiItem } from '../data/PsiItem.mjs';

export async function preApplyDynamicEffects(workflow) {
  if (!PsiItem.isFocus(workflow.item)) return;

  // delete other focus effects
  const expireEffects = workflow.actor.effects.filter((value) => {
    if (value?.flags?.dae?.itemData?._id === workflow.item.id) return false;
    return PsiItem.isFocus(value.flags?.dae?.itemData);
  });
  const ids = expireEffects.map((e) => e.id);
  if (ids.length === 0) return;
  await workflow.actor.deleteEmbeddedDocuments('ActiveEffect', ids, { 'expiry-reason': `psy: changed` });
}

export async function rollComplete(workflow) {
  if (!PsiItem.isFocus(workflow.item)) return;

  // delete focus if it's disabled
  const psyEffect = workflow.actor.effects.find((ef) => ef.flags?.dae?.itemData?._id === workflow.item.id);
  if (psyEffect?.disabled === true) {
    await workflow.actor.deleteEmbeddedDocuments('ActiveEffect', [psyEffect.id], { 'expiry-reason': `psy: changed` });
  }
}
