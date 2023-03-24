import {PsiActor} from "../data/PsiActor.mjs";

export function psiDamage(item, rollConfig) {
  if (item?.name === "Damage Over Time") {
    // why is this here?
    return;
  }

  if (!item.actor) return

  const parts = item?.system?.damage?.parts
  if (!parts) return
  const psiFire = PsiActor.psiFire(item.actor)
  const psiPsy = PsiActor.psiPsy(item.actor)
  if (!psiFire && !psiPsy) return

  for (const part of parts) {
    const damageType = part[1]
    if (Number.isFinite(psiFire) && damageType === "fire") {
      rollConfig.parts.push(psiFire)
    }
    if (Number.isFinite(psiPsy) && damageType === "psychic") {
      rollConfig.parts.push(psiPsy)
    }
  }
}
