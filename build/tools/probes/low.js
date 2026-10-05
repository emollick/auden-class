// how each plate is laid out: where its key stands, and how tall it is
export default (root) => {
  const c = ['low', 'keys-under', 'side-in', 'pair-low', 'is-beside', 'two-col', 'lone'].filter((k) => root.classList.contains(k));
  const inn = root.querySelector('.plate-in') || root;
  const box = inn.getBoundingClientRect();
  const b = (sel) => { const n = root.querySelector(sel); return n ? Math.round(n.getBoundingClientRect().bottom - box.top) : 0; };
  return `${c.join(' ') || 'side'} | plate ${Math.round(box.height)} poem ${b('.poem')} side ${b('.side')}`;
};
