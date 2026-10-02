import { useRef, useState } from "react";
import "./CatalogCarousel.css";

// items: [{ title, text, bg, fg, visual? }]  (visual = qualquer elemento React, opcional)
export default function CatalogCarousel({ items }) {
  const [i, setI] = useState(0);
  const x0 = useRef(0);
  const n = items.length;
  const go = (d) => setI((v) => (v + d + n) % n);
  const cur = items[i];

  return (
    <div
      className="cc"
      style={{ background: cur.bg, color: cur.fg, "--bg": cur.bg, "--fg": cur.fg }}
      onTouchStart={(e) => { x0.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const d = e.changedTouches[0].clientX - x0.current;
        if (Math.abs(d) > 40) go(d < 0 ? 1 : -1);
      }}
    >
      <div className="cc-top"><b>Catálogo</b><span aria-live="polite">{i + 1} / {n}</span></div>

      <div className="cc-vp">
        <div className="cc-trk" style={{ transform: "translateX(-" + i * 100 + "%)" }}>
          {items.map((it, k) => (
            <div className="cc-sl" key={it.title} aria-hidden={k !== i}>
              <div><h3>{it.title}.</h3><p>{it.text}</p></div>
              <div className="cc-box">{it.visual ?? String(k + 1).padStart(2, "0")}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="cc-ctl">
        <div className="cc-pills">
          {items.map((it, k) => (
            <button key={it.title} className="cc-pill" aria-current={k === i} onClick={() => setI(k)}>{it.title}</button>
          ))}
        </div>
        <div>
          <button aria-label="Anterior" onClick={() => go(-1)}>‹</button>
          <button aria-label="Próximo" onClick={() => go(1)}>›</button>
        </div>
      </div>
    </div>
  );
}
