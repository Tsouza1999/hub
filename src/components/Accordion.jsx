import { useState } from "react";
import "./Accordion.css";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="acc">
      {items.map((it, k) => (
        <div className="acc-i" key={k}>
          <button className="acc-h" aria-expanded={open === k} onClick={() => setOpen(open === k ? -1 : k)}>
            {it.q}<span>{open === k ? "−" : "+"}</span>
          </button>
          {open === k && <div className="acc-b">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}
