export class PsiActor {
  static psiPointsKey = "system.resources.primary.value";
  static psiLimitKey = "system.resources.secondary.value";
  static castPsiKey = "flags.mystic.cast.psi";

  static isPsiActor(actor) {
    if (actor?.system?.resources?.primary?.max > 0) {
      return true;
    }
    return false;
  }

  static psiPoints(actor) {
    return actor?.system?.resources?.primary?.value ?? 0;
  }

  static psiLimit(actor) {
    return actor?.system?.resources?.secondary?.value ?? 0;
  }

  static castPsi(actor) {
    return actor?.flags?.mystic?.cast?.psi ?? 0;
  }

  static hasCast(actor) {
    return this.castPsi(actor) > 0;
  }

  static async resetCast(actor) {
    await actor.update({[this.castPsiKey]: 0});
  }

  static async storeCast(actor, psiUsed, newPsi) {
    await actor.update({
      [this.castPsiKey]: psiUsed,
      [this.psiPointsKey]: newPsi
    });
  }
}
