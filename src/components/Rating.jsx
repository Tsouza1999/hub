import { useState } from "react";
import "./Rating.css";

export default function Rating({ max = 5, onChange }) {
  const [v, setV] = useState(0);
  const [h, setH] = useState(0);
  const pick = (n) => { setV(n); onChange && onChange(n); };

  return (
    <div>
      <div className="stars" onMouseLeave={() => setH(0)}>
        {Array.from({ length: max }, (_, k) => k + 1).map((n) => (
          <button key={n} className={"star" + (n <= (h || v) ? " on" : "")}
            aria-label={n + " estrelas"} onMouseEnter={() => setH(n)} onClick={() => pick(n)}>★</button>
        ))}
      </div>
      <p>{v ? "Você deu " + v + " de " + max : "Clique para avaliar"}</p>
    </div>
  );
}
