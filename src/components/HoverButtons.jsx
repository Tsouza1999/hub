import "./HoverButtons.css";

export default function HoverButtons({ labels = ["Hover me!", "Hover me!", "Hover me!"] }) {
  return (
    <div className="hv-btns">
      {labels.map((l, i) => (
        <button key={i} className="hv-btn">{l}</button>
      ))}
    </div>
  );
}
