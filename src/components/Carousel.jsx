import { useState } from "react";
import "./Carousel.css";

export default function Carousel({ slides }) {
  const [i, setI] = useState(0);
  const go = (d) => setI((i + d + slides.length) % slides.length);

  return (
    <div className="car">
      <div className="car-track" style={{ transform: "translateX(-" + i * 100 + "%)" }}>
        {slides.map((s) => (
          <div key={s.t} className="car-slide" style={{ background: s.c }}>{s.t}</div>
        ))}
      </div>
      <button className="car-btn l" aria-label="Slide anterior" onClick={() => go(-1)}>‹</button>
      <button className="car-btn r" aria-label="Próximo slide" onClick={() => go(1)}>›</button>
      <div className="car-dots">
        {slides.map((s, k) => <i key={k} className={k === i ? "on" : ""} />)}
      </div>
    </div>
  );
}
