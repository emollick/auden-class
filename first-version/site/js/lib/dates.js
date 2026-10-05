// Dates are kept as 'YYYY-MM-DD' in the student's own time zone.

export function today() {
  return iso(new Date());
}

export function iso(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function parse(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(s, n) {
  const d = parse(s);
  d.setDate(d.getDate() + n);
  return iso(d);
}

export function daysBetween(a, b) {
  const ms = parse(b).getTime() - parse(a).getTime();
  return Math.round(ms / 86400000);
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function long(s) {
  const d = parse(s);
  return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

// A date in the current year is given without its year; any other date with it.
function year(d) {
  return d.getFullYear() === new Date().getFullYear() ? '' : `, ${d.getFullYear()}`;
}

export function short(s) {
  const d = parse(s);
  return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}${year(d)}`;
}

export function medium(s) {
  const d = parse(s);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}${year(d)}`;
}

// The month and the day alone, in whatever year: for a date set in a narrow
// column beside the dates of its week.
export function monthDay(s) {
  const d = parse(s);
  return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}`;
}

// Two dates as a range: "Oct 2–8" within a month, "Sep 28 to Oct 4" across
// two. A year that is not the current one is given once, after the range;
// a range that runs from one year into the next gives each date its own.
export function span(a, b) {
  const x = parse(a);
  const y = parse(b);
  if (x.getFullYear() !== y.getFullYear()) return `${short(a)} to ${short(b)}`;
  const from = `${MONTHS[x.getMonth()].slice(0, 3)} ${x.getDate()}`;
  if (x.getMonth() === y.getMonth()) return `${from}–${y.getDate()}${year(x)}`;
  return `${from} to ${MONTHS[y.getMonth()].slice(0, 3)} ${y.getDate()}${year(y)}`;
}

// The date in full, for anything that is saved to a file.
export function dated(s) {
  const d = parse(s);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
