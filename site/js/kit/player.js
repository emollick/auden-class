// A record: one button, a rule that fills as it plays, and the time.
//
//   player('tristan-liebestod-gadski-1915.mp3', 'the Liebestod')
//
// The sound is not fetched until the button is pressed. Where a page cannot
// play a file from its address (some frames forbid it), the file is fetched
// and played from memory instead.

import { el, mk } from './draw.js';

const clock = (s) => (Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '');
const playing = new Set();

export function player(file, name = 'the record') {
  const src = `records/${file}`;
  const audio = el('audio', { preload: 'none', src });
  const mark = mk('svg', { viewBox: '0 0 20 20', width: 20, height: 20, 'aria-hidden': 'true' });
  const go = mk('path', { d: 'M6 3.5 L16.5 10 L6 16.5 Z', fill: 'currentColor' });
  const stop = mk('path', { d: 'M5 3.5 H8.5 V16.5 H5 Z M11.5 3.5 H15 V16.5 H11.5 Z', fill: 'currentColor' });
  stop.style.display = 'none';
  mark.append(go, stop);
  const btn = el('button', { class: 'rec-btn', type: 'button', 'aria-label': `Play ${name}` }, [mark]);
  const bar = el('input', { class: 'rec-bar', type: 'range', min: '0', max: '1000', step: '1', value: '0', 'aria-label': 'Place in the record', disabled: '' });
  const time = el('span', { class: 'rec-time', text: '' });
  const say = el('p', { class: 'rec-say', role: 'status' });
  const box = el('div', { class: 'rec' }, [btn, bar, time, audio]);
  const wrap = el('div', { class: 'rec-wrap' }, [box, say]);

  let tried = false;
  const show = () => {
    const on = !audio.paused && !audio.ended;
    go.style.display = on ? 'none' : ''; stop.style.display = on ? '' : 'none';
    btn.setAttribute('aria-label', `${on ? 'Pause' : 'Play'} ${name}`);
    box.classList.toggle('is-on', on);
    if (on) playing.add(audio); else playing.delete(audio);
  };
  const tick = () => {
    const d = audio.duration;
    if (Number.isFinite(d) && d > 0) {
      bar.removeAttribute('disabled');
      if (!bar.matches(':active')) bar.value = String(Math.round((audio.currentTime / d) * 1000));
      bar.style.setProperty('--at', `${(audio.currentTime / d) * 100}%`);
      time.textContent = `${clock(audio.currentTime)} / ${clock(d)}`;
    }
  };
  // some frames will not play a file from its address: fetch it and play it from memory
  const fromMemory = async () => {
    if (tried) { say.textContent = 'The record could not be played here.'; return; }
    tried = true;
    try {
      const r = await fetch(src);
      if (!r.ok) throw new Error(String(r.status));
      audio.src = URL.createObjectURL(await r.blob());
      await audio.play();
    } catch (e) { say.textContent = 'The record could not be played here.'; show(); }
  };
  btn.addEventListener('click', () => {
    say.textContent = '';
    if (audio.paused) {
      playing.forEach((a) => { if (a !== audio) a.pause(); });
      const p = audio.play();
      if (p && p.catch) p.catch((e) => { if (e && e.name === 'AbortError') return; fromMemory(); });
    } else audio.pause();
  });
  bar.addEventListener('input', () => { const d = audio.duration; if (Number.isFinite(d)) { audio.currentTime = (Number(bar.value) / 1000) * d; tick(); } });
  for (const ev of ['play', 'playing', 'pause', 'ended']) audio.addEventListener(ev, show);
  for (const ev of ['timeupdate', 'durationchange', 'loadedmetadata']) audio.addEventListener(ev, tick);
  audio.addEventListener('ended', () => { audio.currentTime = 0; tick(); });
  wrap.stop = () => { audio.pause(); playing.delete(audio); };
  return wrap;
}
