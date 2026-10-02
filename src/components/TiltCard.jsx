import { useState } from "react";
import "./TiltCard.css";

export default function TiltCard({ title = "Passe o mouse", text = "O cartão gira acompanhando o cursor." }) {
  const [s, setS] = useState({ x: 0, y: 0 }); // posição do cursor, de -1 a 1

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setS({ x: ((e.clientX - r.left) / r.width - 0.5) * 2, y: ((e.clientY - r.top) / r.height - 0.5) * 2 });
  };

  return (
    <div className="tl" onMouseMove={move} onMouseLeave={() => setS({ x: 0, y: 0 })}>
      <div className="tl-card" style={{ transform: "rotateY(" + s.x * 14 + "deg) rotateX(" + -s.y * 14 + "deg)" }}>
        <h3>{title}</h3>
        <p>{text}</p>
        <span className="tl-glare" style={{ background: "radial-gradient(circle at " + (50 + s.x * 40) + "% " + (50 + s.y * 40) + "%, rgba(255,255,255,.35), transparent 55%)" }} />
      </div>
    </div>
  );
}
