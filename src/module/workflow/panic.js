export async function combatPanic(combat, options) {
  if (!combat) return
  if (!combat.nextCombatant) return

  await turnStart(combat.nextCombatant)
}

async function turnStart(combatant) {
  const panic = combatant.actor.effects.find(e => e.label === 'Psi: Panic')
  if (!panic) return
  const actionRoll = await new Roll('1d4').roll()
  let action = actionRoll.result % 2 === 0 ? 'move' : 'attack'
  if (action === 'attack') {
    new Sequence()
      .effect()
      .file("jb2a.bite.400px.red")
      .atLocation(combatant.token)
      .play()
      .catch(console.error)
  } else {
    new Sequence()
      .effect()
      .file("jb2a.icon.fear.dark_purple")
      .atLocation(combatant.token)
      .fadeIn(1000)
      .fadeOut(1000)
      .duration(1500)
      .play()
      .catch(console.error)
  }
}
