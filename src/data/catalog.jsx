// Catálogo: para adicionar um componente, crie os arquivos em src/components
// (Nome.jsx e Nome.css), importe-os aqui e inclua um objeto no array.
import Carousel from "../components/Carousel.jsx";
import CarouselSrc from "../components/Carousel.jsx?raw";
import CarouselCss from "../components/Carousel.css?raw";
import "../components/Carousel.css";
import Toggle from "../components/Toggle.jsx";
import ToggleSrc from "../components/Toggle.jsx?raw";
import ToggleCss from "../components/Toggle.css?raw";
import "../components/Toggle.css";
import Accordion from "../components/Accordion.jsx";
import AccordionSrc from "../components/Accordion.jsx?raw";
import AccordionCss from "../components/Accordion.css?raw";
import "../components/Accordion.css";
import Rating from "../components/Rating.jsx";
import RatingSrc from "../components/Rating.jsx?raw";
import RatingCss from "../components/Rating.css?raw";
import "../components/Rating.css";
import HoverButtons from "../components/HoverButtons.jsx";
import HoverButtonsSrc from "../components/HoverButtons.jsx?raw";
import HoverButtonsCss from "../components/HoverButtons.css?raw";
import "../components/HoverButtons.css";
import ZoomScroll from "../components/ZoomScroll.jsx";
import ZoomScrollSrc from "../components/ZoomScroll.jsx?raw";
import ZoomScrollCss from "../components/ZoomScroll.css?raw";
import "../components/ZoomScroll.css";
import PulseSpokes from "../components/PulseSpokes.jsx";
import PulseSpokesSrc from "../components/PulseSpokes.jsx?raw";
import PulseSpokesCss from "../components/PulseSpokes.css?raw";
import "../components/PulseSpokes.css";

const SLIDES = [
  { t: "Slide 1", c: "#2F5BFF" },
  { t: "Slide 2", c: "#0E9F6E" },
  { t: "Slide 3", c: "#C2410C" },
];
const FAQ = [
  { q: "O que é um componente?", a: "Um pedaço reutilizável de interface." },
  { q: "Preciso de biblioteca?", a: "Não, só React." },
  { q: "Posso alterar o visual?", a: "Sim, edite o CSS à vontade." },
];

// junta JSX + CSS + exemplo de uso no texto que o visitante copia
const bundle = (name, src, css, usage) =>
  src.trimEnd() + "\n\n/* " + name + ".css */\n" + css.trimEnd() + "\n\n" + usage;

const CATALOG = [
  {
    id: "carousel",
    title: "Carrossel",
    cat: "Mídia",
    desc: "Carrossel de slides com setas e indicadores. Recebe um array de slides pela prop \"slides\" e navega em loop infinito usando apenas translateX e CSS, sem dependências.",
    tags: ["useState", "CSS puro", "acess\u00edvel"],
    preview: () => <Carousel slides={SLIDES} />,
    code: bundle("Carousel", CarouselSrc, CarouselCss, "/* Uso */\n// <Carousel slides={[{ t: \"Slide 1\", c: \"#0a286c\" }, { t: \"Slide 2\", c: \"#0E9F6E\" }]} />"),
  },
  {
    id: "toggle",
    title: "Interruptor",
    cat: "Formulário",
    desc: "Switch ligado/desligado com atributos ARIA (role=\"switch\"), animação suave e foco visível. Ideal para preferências e configurações.",
    tags: ["useState", "ARIA", "CSS puro"],
    preview: () => <Toggle label="Notificações" />,
    code: bundle("Toggle", ToggleSrc, ToggleCss, "/* Uso */\n// <Toggle label=\"Notificações\" />"),
  },
  {
    id: "accordion",
    title: "Acordeão",
    cat: "Layout",
    desc: "Lista de perguntas e respostas em que só um item fica aberto por vez. Recebe \"items\" com { q, a }. Perfeito para FAQs.",
    tags: ["useState", "aria-expanded", "FAQ"],
    preview: () => <Accordion items={FAQ} />,
    code: bundle("Accordion", AccordionSrc, AccordionCss, "/* Uso */\n// <Accordion items={[{ q: \"Pergunta?\", a: \"Resposta.\" }]} />"),
  },
  {
    id: "rating",
    title: "Avaliação por estrelas",
    cat: "Formulário",
    desc: "Seletor de nota com destaque ao passar o mouse e valor persistido ao clicar. Aceita a prop \"max\" para mudar o número de estrelas.",
    tags: ["useState", "hover", "props"],
    preview: () => <Rating  />,
    code: bundle("Rating", RatingSrc, RatingCss, "/* Uso */\n// <Rating max={5} onChange={(n) => console.log(n)} />"),
  },
  {
    id: "hover",
    title: "Efeito hover",
    cat: "Interação",
    desc: "Três botões em que, ao passar o mouse em um deles, os outros diminuem, ficam transparentes e desfocados. Funciona só com CSS (:has, scale, opacity e filter), sem JavaScript.",
    tags: ["CSS puro", ":has()", "hover"],
    preview: () => <HoverButtons />,
    code: bundle("HoverButtons", HoverButtonsSrc, HoverButtonsCss, "// <HoverButtons labels={[\"Hover me!\", \"Hover me!\", \"Hover me!\"]} />"),
  },
  {
    id: "zoom",
    title: "Zoom no scroll",
    cat: "Animação",
    desc: "Uma moldura escura com janela circular que cresce enquanto você rola, revelando o cenário por trás e uma seção em gradiente. O progresso vem do scroll do próprio container, sem bibliotecas.",
    tags: ["useState", "scroll", "CSS puro"],
    preview: () => <ZoomScroll />,
    code: bundle("ZoomScroll", ZoomScrollSrc, ZoomScrollCss, "// <ZoomScroll first=\"We Create\" second=\"The Future\" />"),
  },
  {
    id: "pulse",
    title: "Pulso 3D",
    cat: "Animação",
    desc: "Pontos luminosos dispostos em raios que pulsam em sequência, criando uma onda giratória em 3D. Usa apenas @keyframes com rotateX, scale e translateZ. Dá para trocar a cor pela prop color.",
    tags: ["CSS puro", "keyframes", "3D"],
    preview: () => <PulseSpokes />,
    code: bundle("PulseSpokes", PulseSpokesSrc, PulseSpokesCss, "// <PulseSpokes color=\"#55ffee\" />"),
  },
];

export default CATALOG;
