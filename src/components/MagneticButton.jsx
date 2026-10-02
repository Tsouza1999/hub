import { useRef } from "react";
import "./MagneticButton.css";

export default function MagneticButton({ children = "Chegue perto", strength = 0.35 }) {
  const wrap = useRef();
  const btn = useRef();

  const move = (e) => {
    const r = wrap.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    btn.current.style.transform = "translate(" + x + "px," + y + "px)";
  };
  const leave = () => { btn.current.style.transform = ""; };

  return (
    <div className="mg" ref={wrap} onMouseMove={move} onMouseLeave={leave}>
      <button ref={btn} className="mg-btn">{children}</button>
    </div>
  );
}
