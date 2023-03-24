export async function combatPanic(combat, options) {
  if (!combat) return
  if (!combat.nextCombatant) return

  await turnStart(combat.nextCombatant)
}

async function turnStart(combatant) {
  const panic = combatant.actor.effects.find(e => e.label === 'Psi: Panic')
  if (!panic) return
  const actionRoll = new Roll('1d4')
  await actionRoll.evaluate()
  const result = parseInt(actionRoll.result)
  let action = result % 2 === 0 ? 'move' : 'attack'

  const directionRoll = new Roll('1d360')
  await directionRoll.evaluate()
  const direction = parseInt(directionRoll.result)

  if (action === 'attack') {
    new Sequence()
      .effect()
      .file("jb2a.bite.400px.red")
      .moveTowards(
        coordinateOffset(combatant.token.x, combatant.token.y, direction, 100),
        {
          rotate: false,
        }
      )
      .atLocation(combatant.token)
      .play()
      .catch(console.error)
  } else {
    new Sequence()
      .effect()
      .file("jb2a.icon.fear.dark_purple")
      .atLocation(combatant.token)
      .moveTowards(
        coordinateOffset(combatant.token.x, combatant.token.y, direction, 100),
        {
          rotate: false,
        })
      .fadeIn(1000)
      .fadeOut(1000)
      .duration(1500)
      .play()
      .catch(console.error)
  }
}


// angle in degrees (0-360)
// distance in pixels
// x and y starts in the top left corner of the canvas
function coordinateOffset(x, y, angle, distance) {
  const xDistance = Math.cos(angle * Math.PI / 180) * distance
  const yDistance = Math.sin(angle * Math.PI / 180) * distance
  return {x: x + xDistance, y: y + yDistance}
}
