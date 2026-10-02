import { useEffect, useRef, useState } from "react";

export default function Project({ item, tone, onClose }) {
  const [copied, setCopied] = useState(false);
  const [foc, setFoc] = useState(null);
  const cur = useRef(null);
  const focRef = useRef(null);
  focRef.current = foc;

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") (focRef.current ? setFoc(null) : onClose()); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, []);

  const copy = async () => {
    try { await navigator.clipboard.writeText(item.code); }
    catch {
      const t = document.createElement("textarea");
      t.value = item.code; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); } catch {}
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  // rótulo que acompanha o cursor ("Focus", "Close")
  const move = (e) => {
    const el = cur.current;
    if (!el) return;
    const t = e.target.closest("[data-cur]");
    el.textContent = t ? t.dataset.cur : "";
    el.style.transform = "translate(" + (e.clientX + 14) + "px," + (e.clientY + 14) + "px)";
  };

  const cards = [
    { n: 1, name: "Preview", cls: "pc-pv", style: { background: tone.bg, color: tone.fg },
      body: <div className="pvbox" onClick={(e) => e.stopPropagation()}>{item.preview()}</div> },
    { n: 2, name: "Sobre", cls: "pc-ab", body: <><h2>{item.title}.</h2><p>{item.desc}</p></> },
    { n: 3, name: "Código", cls: "pc-cd", body: <pre><code>{item.code}</code></pre> },
  ];
  const render = (c, big) => <figure className={"pc " + c.cls + (big ? " big" : "")} style={c.style}>{c.body}</figure>;

  return (
    <div className="pj" onMouseMove={move}>
      <header className="pjh">
        <button onClick={onClose} data-cur="Back">← {item.title}</button>
        <button onClick={copy} aria-live="polite">{copied ? "Copiado" : "Copiar código ↗"}</button>
      </header>
      <p className="pjd">{item.desc}</p>
      <div className="meta">
        {[["Categoria", item.cat], ["Recurso", item.tags[0]], ["Tags", item.tags.join(", ")], ["Arquivos", ".jsx + .css"]].map(([k, v], i) => (
          <div key={k}><span>{i + 1}</span><span>{k}</span><span>{v}</span></div>
        ))}
      </div>
      {cards.map((c) => (
        <div className="cw" key={c.n} data-cur="Focus" onClick={() => setFoc(c)}>
          <span className="fnum">{c.n} {c.name}</span>
          {render(c)}
        </div>
      ))}
      {foc && (
        <div className="fo" data-cur="Close" onClick={() => setFoc(null)}>
          <div className="fi" data-cur="" onClick={(e) => e.stopPropagation()}>{render(foc, true)}</div>
        </div>
      )}
      <div className="cur" ref={cur} />
    </div>
  );
}
