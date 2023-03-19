export function psiDamage(item, rollConfig) {
  if (!item.actor) return
  const parts = item?.system?.damage?.parts
  if (!parts) return
  for (const part of parts) {
    const damageType = part[1]
    if (damageType === "fire") {
      rollConfig.parts.push(["@psiFire"])
    }
    if (damageType === "psychic") {
      rollConfig.parts.push(["@psiPsy"])
    }
  }
}
