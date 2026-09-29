import { useState } from "react";
import "./ZoomScroll.css";

const clamp = (v) => Math.min(1, Math.max(0, v));

export default function ZoomScroll({ first = "We Create", second = "The Future" }) {
  const [p, setP] = useState(0); // progresso do scroll, de 0 a 1

  const onScroll = (e) => {
    const el = e.currentTarget;
    setP(clamp(el.scrollTop / (el.scrollHeight - el.clientHeight)));
  };

  return (
    <div className="zs" onScroll={onScroll} tabIndex={0} role="region" aria-label="Role para ver o zoom">
      <div className="zs-track">
        <div className="zs-stage">
          <div className="zs-hero" />
          <div className="zs-next" style={{ opacity: clamp((p - 0.55) * 2.2) }} />
          <div className="zs-frame" style={{ transform: "scale(" + (1 + p * 9) + ")", opacity: 1 - clamp((p - 0.75) * 4) }} />
          <span className="zs-t a" style={{ transform: "translate(" + -p * 60 + "px," + -p * 30 + "px)", opacity: clamp(1 - p * 1.5) }}>{first}</span>
          <span className="zs-t b" style={{ transform: "translate(" + p * 60 + "px," + p * 30 + "px)", opacity: clamp(1 - p * 1.5) }}>{second}</span>
          <small className="zs-hint" style={{ opacity: clamp(1 - p * 4) }}>Role aqui dentro ↓</small>
        </div>
      </div>
    </div>
  );
}
