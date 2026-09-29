import { useState } from "react";
import "./Toggle.css";

export default function Toggle({ label }) {
  const [on, setOn] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button className="sw" role="switch" aria-checked={on} aria-label={label} onClick={() => setOn(!on)} />
      <span>{label}: <b>{on ? "ligado" : "desligado"}</b></span>
    </div>
  );
}
