import {PsiItem} from "../data/PsiItem.mjs";

export function summonComplete(item, tokens) {
  if (!game.combat) return;

  const isPsiItem = PsiItem.isPsiItem(item)
  if (!isPsiItem) return;
  const toCreate = [];
  for (let t of tokens) {
    toCreate.push({tokenId: t.id, sceneId: t.parent.id, actorId: t.actor.id});
  }
  game.combat.createEmbeddedDocuments("Combatant", toCreate).then((combatants) => {
    for (let c of combatants) {
      c.rollInitiative();
    }
  })
}
