// A small helper for building the page without a framework.

export function h(tag, attrs, ...children) {
  const el = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'value') el.value = v;
      else if (v === true) el.setAttribute(k, '');
      else el.setAttribute(k, v);
    }
  }
  append(el, children);
  return el;
}

function append(el, children) {
  for (const c of children) {
    if (c === null || c === undefined || c === false) continue;
    if (Array.isArray(c)) append(el, c);
    else if (c instanceof Node) el.appendChild(c);
    else el.appendChild(document.createTextNode(String(c)));
  }
}

export function clear(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

// Authored prose uses three marks only: *italic*, [text](link) and
// [text](#/route). Everything else is plain text.
export function prose(text) {
  const frag = document.createDocumentFragment();
  const re = /\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
    if (m[1] !== undefined) {
      frag.appendChild(h('em', null, m[1]));
    } else {
      const href = m[3];
      const external = /^https?:/.test(href);
      const a = h('a', external ? { href, rel: 'noopener', target: '_blank' } : { href });
      a.appendChild(prose(m[2]));
      frag.appendChild(a);
    }
    last = re.lastIndex;
  }
  if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
  return frag;
}

// The same text with the marks taken out, for places that cannot show them.
export function plain(text) {
  return String(text).replace(/\*([^*]+)\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

export function p(text, cls) {
  return h('p', cls ? { class: cls } : null, prose(text));
}

export function paras(list, cls) {
  return list.map((t) => p(t, cls));
}

export function download(filename, text, type = 'application/json') {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = h('a', { href: url, download: filename });
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function plural(n, one, many) {
  return `${n.toLocaleString('en-US')} ${n === 1 ? one : many || one + 's'}`;
}

export function num(n) {
  return n.toLocaleString('en-US');
}
