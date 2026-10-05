// a tab whose caption stands under the shorter of two passages: where the longer passage, the caption and the key end
export default (root) => {
  if (!root.classList.contains('side-in')) return '';
  const i = +root.dataset.lens; const pane = root.querySelectorAll('.pane')[i]; if (!pane) return '';
  const box = root.querySelector('.plate-in').getBoundingClientRect();
  const longer = root.classList.contains('side-b') ? root.querySelector('.poem') : root.querySelector('.beside');
  const L = longer.getBoundingClientRect().bottom - box.top;
  const cap = pane.querySelector('.cap'); const aside = pane.querySelector('.aside');
  const C = cap ? cap.getBoundingClientRect().bottom - box.top : 0;
  const K = aside ? aside.getBoundingClientRect().bottom - box.top : C;
  const keys = aside && aside.querySelector('.keys'); const kids = keys ? [...keys.children] : [];
  const only = kids.length > 0 && kids.every((k) => k.matches('.points, .wn'));
  const cls = ['side-a', 'side-b', 'is-twin', 'pair-off', 'pair-low'].filter((c) => root.classList.contains(c)).join(' ');
  return `[${cls}] longer ends ${Math.round(L)} caption ${Math.round(C)} key ${Math.round(K)} (key h ${aside ? Math.round(aside.offsetHeight) : 0}${aside ? (only ? ', remarks only' : ', with marks') : ', no key'}) over ${Math.round(K - L)} hole-after ${Math.round(L - C)} plate ${Math.round(box.height)}`;
};
