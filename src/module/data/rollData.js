import {PsiActor} from './PsiActor.mjs';
import {PsiItem} from './PsiItem.mjs';

export function getRollData(wrapped, ...args) {
  const data = wrapped(...args);
  if (!data || !this.actor) {
    return data;
  }
  data.psiCast = PsiActor.castPsi(this.actor) ?? 0;
  data.psiMin = PsiItem.castMin(this) ?? 0;
  data.psi = data.psiCast;
  data.psiScale = data.psiCast - data.psiMin;
  data.psiFire = PsiActor.psiFire(this.actor) ?? 0;
  data.psiPsy = PsiActor.psiPsy(this.actor) ?? 0;
  return data;
}
