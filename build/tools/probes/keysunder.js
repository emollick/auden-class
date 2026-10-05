// tabs whose key the kit has sent under both passages: how tall the plate is and where things end
export default (root) => {
  if (!root.classList.contains('keys-under')) return '';
  const box = root.querySelector('.plate-in').getBoundingClientRect();
  const u = root.querySelector('.under'); const keys = u.querySelector('.keys'); const kids = keys ? [...keys.children] : [];
  const only = kids.length > 0 && kids.every((k) => k.matches('.points, .wn'));
  const b = (sel) => { const n = root.querySelector(sel); return n ? Math.round(n.getBoundingClientRect().bottom - box.top) : 0; };
  return `plate ${Math.round(box.height)} poem ${b('.poem')} beside ${b('.beside')} caption ${b('.side')} key ${Math.round(u.getBoundingClientRect().top - box.top)}..${b('.under')} ${only ? 'remarks only' : 'with marks'}`;
};
