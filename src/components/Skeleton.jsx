import { useState } from "react";
import "./Skeleton.css";

export default function Skeleton() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="sk">
      {loading ? (
        <>
          <div className="sk-b sk-av" />
          <div>
            <div className="sk-b" style={{ width: "60%" }} />
            <div className="sk-b" style={{ width: "90%" }} />
            <div className="sk-b" style={{ width: "40%" }} />
          </div>
        </>
      ) : (
        <>
          <div className="sk-av ok">A</div>
          <div><b>Ana Souza</b><p>Designer de produto</p></div>
        </>
      )}
      <button className="sk-btn" onClick={() => setLoading(!loading)}>{loading ? "Carregar conteúdo" : "Voltar ao skeleton"}</button>
    </div>
  );
}
