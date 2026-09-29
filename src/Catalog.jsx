import { useEffect, useRef, useState } from "react";
import CATALOG from "./data/catalog.jsx";
import Detail from "./Detail.jsx";

// bg = fundo do slide, fg = cor do texto
const TONES = [
  { bg: "#9c8d5c", fg: "#fffcfc" },
  { bg: "#1a2923", fg: "#ffffff" },
  { bg: "#10183d", fg: "#ffffff" },
  { bg: "#4A1D6B", fg: "#ffffff" },
  { bg: "#585102", fg: "#ffffff" },
  { bg: "#1F2937", fg: "#ffffff" },
  { bg: "#0F3D3A", fg: "#ffffff" },
];

export default function Catalog({ onBack }) {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState(null);
  const startX = useRef(0);
  const n = CATALOG.length;
  const tone = TONES[i % TONES.length];
  const go = (d) => setI((v) => (v + d + n) % n);

  // título fixo do topo fica escuro quando o fundo do slide é claro
  useEffect(() => {
    const top = document.querySelector(".top");
    top.classList.toggle("dark", tone.fg !== "#ffffff");
    return () => top.classList.remove("dark");
  }, [tone.fg]);

  useEffect(() => {
    const onKey = (e) => {
      if (sel) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [sel]);

  return (
    <>
    <div
      className="cv" style={{ background: tone.bg, color: tone.fg, "--fg": tone.fg, "--bg": tone.bg }}
      onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const d = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(d) > 60) go(d < 0 ? 1 : -1);
      }}
    >
      <div className="cvh">
        <button className="btn" onClick={onBack}>Voltar</button>
        <h2>Catálogo</h2>
        <span aria-live="polite"><b>{i + 1}</b> / {n}</span>
      </div>

      <div className="vp">
        <div className="trk" style={{ transform: "translateX(-" + i * 100 + "%)" }}>
          {CATALOG.map((it, k) => (
            <div className="sl" key={it.id} aria-hidden={k !== i} inert={k === i ? undefined : ""}>
              <div className="in split">
                <div>
                  <h2>{it.title}.</h2>
                  <p>{it.desc}</p>
                  <div className="facts">
                    <div><b>{it.cat}</b>Categoria</div>
                    <div><b>{it.tags[0]}</b>Recurso principal</div>
                  </div>
                  <button className="btn solid" onClick={() => setSel(it)}>Ver código</button>
                </div>
                <div className="pv">{it.preview()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ctl">
        <div className="pills">
          {CATALOG.map((it, k) => (
            <button key={it.id} className="pill" aria-current={k === i} onClick={() => setI(k)}>{it.title}</button>
          ))}
        </div>
        <div className="arrows">
          <button className="btn" aria-label="Componente anterior" onClick={() => go(-1)}>‹</button>
          <button className="btn" aria-label="Próximo componente" onClick={() => go(1)}>›</button>
        </div>
      </div>

    </div>
    {sel && <Detail item={sel} onClose={() => setSel(null)} />}
    </>
  );
}
