import { PsiItem } from '../data/PsiItem.mjs';

export function renderItemSheet(app, html, data) {
  const element = html.find('input[name="system.chatFlavor"]').parent().parent();
  element.append('<h3 class="form-header">Mystics</h3>');
  const psiOptions = `
<div class="form-group">
  <label>Psychic focus</label>
  <input type="checkbox"
  name="${PsiItem.isFocusKey}"
  ${PsiItem.isFocus(data.item) ? 'checked' : ''}
  />
</div>
<div class="form-group">
  <label>Psi points</label>
  <div class="form-fields">
    <input type="number"
    name="${PsiItem.castMinKey}"
    placeholder="Base cost"
    value="${PsiItem.castMin(data.item) ?? ''}"
    />
  </div>
</div>
`;
  element.append(psiOptions);
}
