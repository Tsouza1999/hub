import "./Marquee.css";

export default function Marquee({ items = ["React", "CSS", "JavaScript", "Vite", "GSAP"], speed = 14 }) {
  const row = items.concat(items); // duplicado para o loop não ter emenda
  return (
    <div className="mq">
      <div className="mq-track" style={{ animationDuration: speed + "s" }}>
        {row.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}
