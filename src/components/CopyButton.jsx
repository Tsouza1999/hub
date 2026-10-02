import { useState } from "react";
import "./CopyButton.css";

export default function CopyButton({ text = "npm install react", label = "Copiar" }) {
  const [ok, setOk] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch {}
    setOk(true);
    setTimeout(() => setOk(false), 1600);
  };

  return (
    <div className="cp">
      <code>{text}</code>
      <button onClick={copy} aria-live="polite">{ok ? "Copiado ✓" : label}</button>
    </div>
  );
}
