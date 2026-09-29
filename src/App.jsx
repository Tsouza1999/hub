import { useState } from "react";
import Intro from "./Intro.jsx";
import Catalog from "./Catalog.jsx";

export default function App() {
  const [open, setOpen] = useState(false);
  const go = (v) => { window.scrollTo(0, 0); setOpen(v); };
  return open ? <Catalog onBack={() => go(false)} /> : <Intro onOpen={() => go(true)} />;
}
