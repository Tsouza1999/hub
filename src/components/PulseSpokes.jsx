import "./PulseSpokes.css";

const SPOKES = 24;              // quantidade de raios
const DOTS = [34, 56, 78, 100]; // distância de cada ponto ao centro (px)

export default function PulseSpokes({ color = "#55ffee" }) {
  return (
    <div className="sp" style={{ "--c": color }} role="img" aria-label="Pontos pulsando em raios">
      <div className="sp-scene">
        {Array.from({ length: SPOKES }, (_, i) => (
          <div key={i} className={"sp-spoke spoke-" + i} style={{ transform: "rotate(" + i * (360 / SPOKES) + "deg)" }}>
            {DOTS.map((r, j) => (
              <span key={j} className="dot" style={{ left: r, animationDelay: i * 0.0417 + j * 0.12 + "s" }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
