import { useEffect, useRef, useState } from "react";

export default function Detail({ item, onClose }) {
  const [copied, setCopied] = useState(false);
  const closeRef = useRef();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

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

  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" role="dialog" aria-modal="true" aria-label={item.title} onClick={(e) => e.stopPropagation()}>
        <div className="head">
          <h2>{item.title}</h2>
          <button ref={closeRef} className="btn" onClick={onClose}>Fechar</button>
        </div>
        <p>{item.desc}</p>
        <div className="live">{item.preview()}</div>
        <div className="codebar">
          <b>Código</b>
          <button className="btn solid" onClick={copy} aria-live="polite">{copied ? "Copiado" : "Copiar código"}</button>
        </div>
        <pre><code>{item.code}</code></pre>
      </div>
    </div>
  );
}
