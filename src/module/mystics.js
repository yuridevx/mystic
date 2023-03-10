import { registerSettings } from './settings.js';
import { preloadTemplates } from './preloadTemplates.js';
import { renderItemSheet } from './ui/renderItemSheet.mjs';
import { preApplyDynamicEffects, rollComplete } from './workflow/workflow.mjs';
import { combatRound, combatStart, combatTurn } from './workflow/combat.mjs';
import { getRollData } from './data/rollData.js';
import { preambleComplete } from './workflow/preambleComplete.mjs';
import { setupCategories } from './ui/setupCategories.js';
import { catchValueSet } from './utils.js';

let isModuleEnabled = true;

// Initialize module
Hooks.once('init', async () => {
  if (typeof globalThis.libWrapper !== 'function') {
    ui.notifications.error("Module mystic requires the 'libWrapper' module.");
    isModuleEnabled = false;
    return;
  }

  console.log('mystics | Initializing mystics');
  registerSettings();
  await preloadTemplates();

  catchValueSet(game, 'tokenActionHud', setupCategories);
});

Hooks.once('setup', async () => {
  if (!isModuleEnabled) return;
  globalThis.libWrapper.register('mystics', 'CONFIG.Item.documentClass.prototype.getRollData', getRollData, 'WRAPPER');
  Hooks.on('renderItemSheet', renderItemSheet);

  // workflow hooks
  Hooks.on('combatRound', combatRound);
  Hooks.on('combatTurn', combatTurn);
  Hooks.on('combatStart', combatStart);

  Hooks.on('midi-qol.preambleComplete', preambleComplete);
  Hooks.on('midi-qol.preApplyDynamicEffects', preApplyDynamicEffects);
  Hooks.on('midi-qol.RollComplete', rollComplete);
});
