export class PsiItem {
  static castMinKey = "flags.mystic.castMin";
  static isFocusKey = "flags.mystic.isFocus";
  static isTalentKey = "flags.mystic.isTalent";

  static castMin(item) {
    return item?.flags?.mystic?.castMin || item?.flags?.mystic?.pointsBase || 0;
  }

  static isFocus(item) {
    return item?.flags?.mystic?.isFocus === true;
  }

  static isReaction(item) {
    return item?.system?.activation?.type?.includes("reaction");
  }

  static isTalent(item) {
    return item?.flags?.mystic?.isTalent === true;
  }

  static isPsiItem(item) {
    return PsiItem.castMin(item) > 0 || PsiItem.isFocus(item) || PsiItem.isTalent(item)
  }

  static isCombatViable(item) {
    const type = item?.system?.activation?.type
    if (!type) return false;
    return type === "action" || type === "bonus" || type === "special"
  }

  static canScale(item) {
    const parts = item?.system?.damage?.parts;
    if (!parts) return false;
    for (const formula of parts) {
      if (formula[0].includes("@psi")) {
        return true;
      }
    }

    const formula = item?.system?.formula
    if (formula?.includes("@psi")) {
      return true;
    }

    return false;
  }
}
