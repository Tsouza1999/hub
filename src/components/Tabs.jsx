import { useState } from "react";
import "./Tabs.css";

export default function Tabs({ tabs }) {
  const [i, setI] = useState(0);
  return (
    <div className="tb">
      <div className="tb-list" role="tablist">
        {tabs.map((t, k) => (
          <button key={t.label} role="tab" aria-selected={k === i} className={"tb-tab" + (k === i ? " on" : "")} onClick={() => setI(k)}>{t.label}</button>
        ))}
        <span className="tb-bar" style={{ width: 100 / tabs.length + "%", transform: "translateX(" + i * 100 + "%)" }} />
      </div>
      <div className="tb-panel" role="tabpanel">{tabs[i].content}</div>
    </div>
  );
}
