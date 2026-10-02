import { useState } from "react";
import "./Compare.css";

// before / after: qualquer elemento React (imagens, blocos de cor...)
export default function Compare({ before, after }) {
  const [v, setV] = useState(50);
  return (
    <div className="cb">
      <div className="cb-img">{after}</div>
      <div className="cb-img" style={{ clipPath: "inset(0 " + (100 - v) + "% 0 0)" }}>{before}</div>
      <span className="cb-line" style={{ left: v + "%" }} />
      <input className="cb-range" type="range" min="0" max="100" value={v} aria-label="Comparar antes e depois" onChange={(e) => setV(+e.target.value)} />
    </div>
  );
}
