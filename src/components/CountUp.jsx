import { useEffect, useState } from "react";
import "./CountUp.css";

export default function CountUp({ to = 1250, duration = 1500, suffix = "" }) {
  const [n, setN] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    let raf, t0;
    const tick = (t) => {
      t0 = t0 ?? t;
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); // easing suave no final
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to, duration]);

  return (
    <div className="ct">
      <strong>{n.toLocaleString("pt-BR")}{suffix}</strong>
      <button onClick={() => setRun(run + 1)}>Repetir</button>
    </div>
  );
}
