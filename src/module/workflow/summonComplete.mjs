import {PsiItem} from "../data/PsiItem.mjs";
import {singletons} from "../singletons.js";


export async function summonConcentration(item, tokens) {
  if (!item.actor) return;
  if (!PsiItem.isPsiItem(item)) return;
  const concentration = globalThis.MidiQOL.getConcentrationEffect(item.actor)
  if (!concentration) return;
  const ids = tokens.map(token => token.id);
  await concentration.update(
    {
      "flags.mystic.summoner": item.actor.id,
      "flags.mystic.summoned": ids
    }
  )
}

export async function destroySummons(effect, options, userId) {
  const summoner = effect?.flags?.mystic?.summoner
  if (!summoner) return;
  const summoned = effect?.flags?.mystic?.summoned
  if (!summoned) return;

  await singletons.socket.executeAsGM(gmDestroySummons, summoner, summoned)
}

export async function gmDestroySummons(summoner, summoned) {
  const waitAll = canvas.tokens.placeables
    .filter(t => summoned.includes(t.id))
    .map(t => t.document.delete())

  await Promise.all(waitAll)
}

export function summonComplete(item, tokens) {
  if (!item.actor) return;
  if (!game.combat) return;

  const isPsiItem = PsiItem.isPsiItem(item)
  if (!isPsiItem) return;
  const combatantsData = tokens.map(token => (
    {tokenId: token.id, sceneId: token.parent.id, actorId: token.actor.id}
  ));

  game.combat
    .createEmbeddedDocuments("Combatant", combatantsData)
    .then((combatants) => {
      for (let c of combatants) {
        c.rollInitiative();
      }
    })
}
