import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

export default function Dropdown({ options, placeholder = "Escolher..." }) {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(null);
  const ref = useRef();

  // fecha ao clicar fora
  useEffect(() => {
    const out = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", out);
    return () => document.removeEventListener("mousedown", out);
  }, []);

  return (
    <div className="dd" ref={ref}>
      <button className="dd-btn" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)}>
        {val ?? placeholder}<span>{open ? "▴" : "▾"}</span>
      </button>
      {open && (
        <ul className="dd-list" role="listbox">
          {options.map((o) => (
            <li key={o} role="option" aria-selected={o === val} onClick={() => { setVal(o); setOpen(false); }}>{o}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
