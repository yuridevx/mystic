export async function psiPointCastDialog(from, to) {
  return new Promise((resolve) => {
    const buttons = [];
    for (let i = from; i <= to; i++) {
      buttons.push({
        label: i,
        callback: () => resolve(i),
      });
    }

    new Dialog({
      title: 'Psi points',
      buttons: buttons,
      close: () => resolve(0),
    }).render(true);
  });
}
