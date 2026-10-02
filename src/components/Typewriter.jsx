import { useEffect, useState } from "react";
import "./Typewriter.css";

export default function Typewriter({ words = ["React", "CSS", "componentes"], speed = 90 }) {
  const [w, setW] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = words[w];
    const pause = !del && txt === full;
    const id = setTimeout(() => {
      if (pause) setDel(true);
      else if (del && txt === "") { setDel(false); setW((w + 1) % words.length); }
      else setTxt(full.slice(0, txt.length + (del ? -1 : 1)));
    }, pause ? 1000 : del ? speed / 2 : speed);
    return () => clearTimeout(id);
  }, [txt, del, w]);

  return <p className="tw">Eu crio <b>{txt}</b><i className="tw-c" /></p>;
}
