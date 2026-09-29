import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  { bg: "#ffffff", fg: "#1a1a1a", t: "Veja funcionando.", p: "Cada componente aparece rodando de verdade, do jeito que vai ficar no seu projeto. Sem imagem parada, sem adivinhar.", f: [["Preview ao vivo", "Clique e teste"], ["Sem instalar nada", "É só abrir"]] },
  { bg: "#111111", fg: "#ffffff", t: "Entenda como funciona.", p: "Um texto curto explica o que o componente faz, quais props ele aceita e quando vale a pena usar.", f: [["Descrição clara", "Direto ao ponto"], ["Props explicadas", "Sem complicação"]] },
  { bg: "#7A1230", fg: "#ffffff", t: "Copie e use.", p: "Um clique copia o React e o CSS. Cole no seu projeto e mude o que quiser.", f: [["React + CSS", "Tudo junto"], ["Zero dependências", "Só React"]] },
];

export default function Intro({ onOpen }) {
  useLayoutEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.set("#line", { scaleY: 0.003 });
    gsap.timeline({ scrollTrigger: { trigger: "#hero", start: "top top", end: "+=150%", scrub: 1, pin: "#stage" } })
      .to("#h1", { opacity: 0, duration: 0.5 }, 0)
      .to("#hint", { opacity: 0, duration: 0.3 }, 0)
      .to("#line", { scaleY: 1, duration: 1, ease: "power2.inOut" }, 0)
      .to("#linetxt", { opacity: 1, duration: 0.4 }, 0.8);

    const ps = gsap.utils.toArray(".panel");
    ps.forEach((p, i) => {
      p.style.zIndex = i + 1;
      if (i < ps.length - 1) {
        ScrollTrigger.create({ trigger: p, start: "top top", end: "+=100%", pin: true, pinSpacing: false });
        // só o primeiro painel (claro) escurece; os de fundo escuro mantêm o texto branco
        gsap.to(p.firstElementChild, {
          scale: 0.92, ...(i === 0 ? { filter: "brightness(.55)" } : {}), ease: "none",
          scrollTrigger: { trigger: p, start: "top top", end: "+=100%", scrub: true },
        });
      }
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill(true));
  }, []);

  return (
    <div>
      <section id="hero">
        <div className="stage" id="stage">
          <h1 id="h1">Componentes prontos. Só copiar.</h1>
          <p className="hint" id="hint">Role para baixo</p>
          <div className="line" id="line" />
          <div className="linetxt" id="linetxt">Menos tempo montando.<br />Mais tempo criando.</div>
        </div>
      </section>

      {PANELS.map((x) => (
        <section className="panel" key={x.t} style={{ background: x.bg, color: x.fg }}>
          <div className="in">
            <h2>{x.t}</h2>
            <p>{x.p}</p>
            <div className="facts">
              {x.f.map((f) => <div key={f[0]}><b>{f[0]}</b>{f[1]}</div>)}
            </div>
          </div>
        </section>
      ))}

      <section className="panel" style={{ background: "#0F3D2E", color: "#fff" }}>
        <div className="in">
          <h2>Pronto para escolher?</h2>
          <p>Veja os componentes disponíveis, um de cada vez.</p>
          <button className="go" onClick={onOpen}>Abrir catálogo</button>
        </div>
      </section>
    </div>
  );
}
