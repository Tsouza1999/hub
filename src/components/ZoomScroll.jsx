import { useState } from "react";
import "./ZoomScroll.css";

const clamp = (v) => Math.min(1, Math.max(0, v));

// paisagem de montanhas em SVG (sem arquivos externos); passe a prop "image" para usar uma foto sua
function Mountains() {
  return (
    <svg className="zs-img" viewBox="0 0 360 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="zs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1f2d5c" />
          <stop offset=".55" stopColor="#8a7cb4" />
          <stop offset="1" stopColor="#f1b79b" />
        </linearGradient>
        <linearGradient id="zs-haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1b79b" stopOpacity="0" />
          <stop offset="1" stopColor="#f1b79b" stopOpacity=".55" />
        </linearGradient>
      </defs>
      <rect width="360" height="260" fill="url(#zs-sky)" />
      <path d="M0 170 L50 120 L90 150 L140 95 L190 150 L240 110 L300 155 L360 125 V260 H0Z" fill="#6a74a3" />
      <path d="M0 190 L70 140 L120 175 L180 66 L250 170 L300 135 L360 185 V260 H0Z" fill="#3c4673" />
      <path d="M180 66 L156 114 L169 107 L180 123 L192 106 L205 114Z" fill="#f4f6fb" />
      <path d="M70 140 L56 160 L67 154 L76 163 L86 153 L92 160Z" fill="#dfe4f2" />
      <path d="M300 135 L288 154 L297 149 L305 157 L313 150 L318 156Z" fill="#dfe4f2" />
      <rect y="150" width="360" height="110" fill="url(#zs-haze)" />
      <path d="M0 228 L60 198 L130 228 L200 208 L280 232 L360 208 V260 H0Z" fill="#161c36" />
    </svg>
  );
}

export default function ZoomScroll({ first = "We Create", second = "The Future", image }) {
  const [p, setP] = useState(0); // progresso do scroll, de 0 a 1

  const onScroll = (e) => {
    const el = e.currentTarget;
    setP(clamp(el.scrollTop / (el.scrollHeight - el.clientHeight)));
  };

  const open = clamp(p / 0.85);   // 0 = círculo pequeno, 1 = imagem inteira
  const r = 18 + open * 57;       // raio do círculo (%)

  return (
    <div className="zs" onScroll={onScroll} tabIndex={0} role="region" aria-label="Role para abrir a imagem">
      <div className="zs-track">
        <div className="zs-stage">
          <div className="zs-photo" style={{ clipPath: "circle(" + r + "% at 50% 50%)" }}>
            <div className="zs-in" style={{ transform: "scale(" + (1.2 - open * 0.2) + ")" }}>
              {image ? <img className="zs-img" src={image} alt="" /> : <Mountains />}
            </div>
          </div>
          <span className="zs-t a" style={{ transform: "translate(" + -p * 60 + "px," + -p * 30 + "px)", opacity: clamp(1 - p * 1.5) }}>{first}</span>
          <span className="zs-t b" style={{ transform: "translate(" + p * 60 + "px," + p * 30 + "px)", opacity: clamp(1 - p * 1.5) }}>{second}</span>
          <small className="zs-hint" style={{ opacity: clamp(1 - p * 4) }}>Role aqui dentro ↓</small>
        </div>
      </div>
    </div>
  );
}
