import { useEffect, useState } from "react";
import CATALOG from "./data/catalog.jsx";
import Project from "./Project.jsx";

// bg = cor do quadro de preview, fg = cor do texto
const TONES = [
  { bg: "#FFD23F", fg: "#1a1a1a" },
  { bg: "#3B2314", fg: "#ffffff" },
  { bg: "#1B2A6B", fg: "#ffffff" },
  { bg: "#4A1D6B", fg: "#ffffff" },
  { bg: "#5A4336", fg: "#ffffff" },
  { bg: "#1F2937", fg: "#ffffff" },
  { bg: "#0F3D3A", fg: "#ffffff" },
  { bg: "#5A1F2B", fg: "#ffffff" },
];

function Toggle({ value, set, options }) {
  return (
    <div>
      {options.map(([v, label]) => (
        <button key={v} aria-pressed={value === v} onClick={() => set(v)}>{label}</button>
      ))}
    </div>
  );
}

export default function Catalog({ onBack }) {
  const [pct, setPct] = useState(0);
  const [view, setView] = useState("grid");   // grid | gallery
  const [mode, setMode] = useState("normal"); // normal | 3d
  const [sel, setSel] = useState(null);
  const ready = pct >= 100;

  // tela de carregamento com contador de porcentagem
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setPct(100); return; }
    const id = setInterval(() => setPct((p) => (p >= 100 ? 100 : Math.min(100, p + 3 + Math.random() * 7))), 45);
    return () => clearInterval(id);
  }, []);

  const tone = (i) => TONES[i % TONES.length];

  return (
    <div className="cat">
      <div className={"ld" + (ready ? " off" : "")} aria-hidden={ready}>{Math.floor(pct)}%</div>
      <button className="bk" onClick={onBack}>← Início</button>

      <main className={"gl " + view + (mode === "3d" ? " tilt" : "")}>
        {CATALOG.map((it, i) => {
          const t = tone(i);
          const open = () => setSel({ it, t });
          return (
            <section className="row" key={it.id}>
              <div className="rl"><span>{it.title}</span><button onClick={open}>Abrir ↗</button></div>
              <div className="strip">
                <div className="fw" onClick={open}>
                  <span className="fnum">1</span>
                  <div className="fr" style={{ background: t.bg, color: t.fg }}><div className="sc">{it.preview()}</div></div>
                </div>
                <div className="fw" onClick={open}>
                  <span className="fnum">2</span>
                  <div className="fr about"><small>{it.cat}</small><h3>{it.title}.</h3><p>{it.desc}</p></div>
                </div>
                <div className="fw" onClick={open}>
                  <span className="fnum">3</span>
                  <div className="fr code"><pre>{it.code.split("\n").slice(0, 16).join("\n")}</pre></div>
                </div>
              </div>
            </section>
          );
        })}
        <div className="cf"><span>©2026 Hub de componentes</span><button onClick={onBack}>Voltar ao início</button></div>
      </main>

      <div className="tg">
        <Toggle value={view} set={setView} options={[["grid", "Grade"], ["gallery", "Galeria"]]} />
        <Toggle value={mode} set={setMode} options={[["normal", "Normal"], ["3d", "3D"]]} />
      </div>

      {sel && <Project item={sel.it} tone={sel.t} onClose={() => setSel(null)} />}
    </div>
  );
}
