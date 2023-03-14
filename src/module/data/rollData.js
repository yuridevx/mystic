import { PsiActor } from './PsiActor.mjs';
import { PsiItem } from './PsiItem.mjs';

export function getRollData(wrapped, ...args) {
  const data = wrapped(...args);
  if (!data || !this.actor) {
    return data;
  }

  data.psiMin = PsiItem.castMin(this) ?? 0;
  data.psiCast = PsiActor.castPsi(this.actor) ?? 0;
  data.psi = data.psiCast;
  data.psiScale = data.psiCast - data.psiMin;
  return data;
}
