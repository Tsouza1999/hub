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
import CatalogCarousel from "../components/CatalogCarousel.jsx";
import CatalogCarouselSrc from "../components/CatalogCarousel.jsx?raw";
import CatalogCarouselCss from "../components/CatalogCarousel.css?raw";
import "../components/CatalogCarousel.css";
import Tabs from "../components/Tabs.jsx";
import TabsSrc from "../components/Tabs.jsx?raw";
import TabsCss from "../components/Tabs.css?raw";
import "../components/Tabs.css";
import Dropdown from "../components/Dropdown.jsx";
import DropdownSrc from "../components/Dropdown.jsx?raw";
import DropdownCss from "../components/Dropdown.css?raw";
import "../components/Dropdown.css";
import Skeleton from "../components/Skeleton.jsx";
import SkeletonSrc from "../components/Skeleton.jsx?raw";
import SkeletonCss from "../components/Skeleton.css?raw";
import "../components/Skeleton.css";
import MagneticButton from "../components/MagneticButton.jsx";
import MagneticButtonSrc from "../components/MagneticButton.jsx?raw";
import MagneticButtonCss from "../components/MagneticButton.css?raw";
import "../components/MagneticButton.css";
import CountUp from "../components/CountUp.jsx";
import CountUpSrc from "../components/CountUp.jsx?raw";
import CountUpCss from "../components/CountUp.css?raw";
import "../components/CountUp.css";
import Typewriter from "../components/Typewriter.jsx";
import TypewriterSrc from "../components/Typewriter.jsx?raw";
import TypewriterCss from "../components/Typewriter.css?raw";
import "../components/Typewriter.css";
import TiltCard from "../components/TiltCard.jsx";
import TiltCardSrc from "../components/TiltCard.jsx?raw";
import TiltCardCss from "../components/TiltCard.css?raw";
import "../components/TiltCard.css";
import Marquee from "../components/Marquee.jsx";
import MarqueeSrc from "../components/Marquee.jsx?raw";
import MarqueeCss from "../components/Marquee.css?raw";
import "../components/Marquee.css";
import Compare from "../components/Compare.jsx";
import CompareSrc from "../components/Compare.jsx?raw";
import CompareCss from "../components/Compare.css?raw";
import "../components/Compare.css";
import CopyButton from "../components/CopyButton.jsx";
import CopyButtonSrc from "../components/CopyButton.jsx?raw";
import CopyButtonCss from "../components/CopyButton.css?raw";
import "../components/CopyButton.css";

const DEMO = [
  { title: "Carrossel", text: "Slides com setas e indicadores.", bg: "#FFD23F", fg: "#1a1a1a" },
  { title: "Interruptor", text: "Switch com atributos ARIA.", bg: "#3B2314", fg: "#ffffff" },
  { title: "Acordeão", text: "Perguntas e respostas em lista.", bg: "#1B2A6B", fg: "#ffffff" },
];

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
    code: bundle("Carousel", CarouselSrc, CarouselCss, "/* Uso */\n// <Carousel slides={[{ t: \"Slide 1\", c: \"#2F5BFF\" }, { t: \"Slide 2\", c: \"#0E9F6E\" }]} />"),
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
    desc: "Uma paisagem de montanhas aparece dentro de um círculo, e a cada rolagem o círculo abre mais até revelar a imagem inteira, enquanto We Create e The Future se afastam. A imagem é um SVG embutido, e a prop image aceita uma foto sua.",
    tags: ["useState", "scroll", "clip-path"],
    preview: () => <ZoomScroll />,
    code: bundle("ZoomScroll", ZoomScrollSrc, ZoomScrollCss, "// <ZoomScroll first=\"We Create\" second=\"The Future\" image=\"/montanha.jpg\" />"),
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
  {
    id: "catcarousel",
    title: "Catálogo em carrossel",
    cat: "Layout",
    desc: "O catálogo da primeira versão, agora como componente: slides em tela cheia que trocam de cor, com abas, setas, contador e swipe no celular. Recebe um array items com title, text, bg e fg (e, opcionalmente, visual).",
    tags: ["useState", "swipe", "transições"],
    preview: () => <CatalogCarousel items={DEMO} />,
    code: bundle("CatalogCarousel", CatalogCarouselSrc, CatalogCarouselCss, "// <CatalogCarousel items={[{ title: \"Carrossel\", text: \"Slides com setas.\", bg: \"#FFD23F\", fg: \"#1a1a1a\" }]} />"),
  },
  {
    id: "tabs",
    title: "Abas",
    cat: "Navegação",
    desc: "Abas com indicador deslizante e conteúdo trocado por estado. Recebe o array tabs com label e content.",
    tags: ["useState", "ARIA", "transição"],
    preview: () => <Tabs tabs={[{ label: "Visão", content: "Resumo do projeto." }, { label: "Código", content: "Arquivos .jsx e .css." }, { label: "Uso", content: "Importe e use." }]} />,
    code: bundle("Tabs", TabsSrc, TabsCss, "// <Tabs tabs={[{ label: \"Visão\", content: \"Resumo.\" }, { label: \"Código\", content: \"Arquivos.\" }]} />"),
  },
  {
    id: "dropdown",
    title: "Menu suspenso",
    cat: "Formulário",
    desc: "Lista de opções que abre ao clique, fecha ao escolher ou ao clicar fora e destaca o item selecionado. Recebe o array options.",
    tags: ["useState", "useRef", "clique fora"],
    preview: () => <Dropdown options={["React", "Vue", "Svelte", "Angular"]} />,
    code: bundle("Dropdown", DropdownSrc, DropdownCss, "// <Dropdown options={[\"React\", \"Vue\", \"Svelte\"]} placeholder=\"Framework\" />"),
  },
  {
    id: "skeleton",
    title: "Skeleton de carregamento",
    cat: "Feedback",
    desc: "Blocos cinza com brilho que ocupam o lugar do conteúdo enquanto ele carrega. O botão alterna entre o skeleton e o conteúdo pronto.",
    tags: ["CSS puro", "shimmer", "useState"],
    preview: () => <Skeleton />,
    code: bundle("Skeleton", SkeletonSrc, SkeletonCss, "// <Skeleton />"),
  },
  {
    id: "magnetic",
    title: "Botão magnético",
    cat: "Interação",
    desc: "O botão é atraído pelo cursor quando ele chega perto e volta ao lugar ao sair. A força é ajustada pela prop strength.",
    tags: ["mousemove", "useRef", "transform"],
    preview: () => <MagneticButton />,
    code: bundle("MagneticButton", MagneticButtonSrc, MagneticButtonCss, "// <MagneticButton strength={0.4}>Fale comigo</MagneticButton>"),
  },
  {
    id: "countup",
    title: "Contador animado",
    cat: "Animação",
    desc: "Número que sobe de zero até o valor final com easing suave e pode ser repetido. Aceita to, duration e suffix.",
    tags: ["useEffect", "requestAnimationFrame", "easing"],
    preview: () => <CountUp to={12500} suffix="+" />,
    code: bundle("CountUp", CountUpSrc, CountUpCss, "// <CountUp to={12500} duration={2000} suffix=\"+\" />"),
  },
  {
    id: "typewriter",
    title: "Máquina de escrever",
    cat: "Texto",
    desc: "Escreve e apaga uma lista de palavras, uma por vez, com cursor piscando. Aceita words e speed.",
    tags: ["useEffect", "setTimeout", "CSS"],
    preview: () => <Typewriter />,
    code: bundle("Typewriter", TypewriterSrc, TypewriterCss, "// <Typewriter words={[\"design\", \"código\", \"ideias\"]} speed={80} />"),
  },
  {
    id: "tilt",
    title: "Cartão 3D",
    cat: "Interação",
    desc: "Cartão que gira em perspectiva seguindo o cursor, com um brilho que acompanha o movimento. Aceita title e text.",
    tags: ["mousemove", "3D", "perspective"],
    preview: () => <TiltCard />,
    code: bundle("TiltCard", TiltCardSrc, TiltCardCss, "// <TiltCard title=\"Meu cartão\" text=\"Texto do cartão.\" />"),
  },
  {
    id: "marquee",
    title: "Marquee infinito",
    cat: "Animação",
    desc: "Faixa de textos que corre em loop sem emendas, com bordas esmaecidas e pausa ao passar o mouse. Aceita items e speed.",
    tags: ["CSS puro", "keyframes", "mask"],
    preview: () => <Marquee />,
    code: bundle("Marquee", MarqueeSrc, MarqueeCss, "// <Marquee items={[\"Design\", \"Código\", \"Ideias\"]} speed={10} />"),
  },
  {
    id: "compare",
    title: "Comparador antes/depois",
    cat: "Mídia",
    desc: "Duas imagens sobrepostas com um divisor que se move ao arrastar, ideal para mostrar antes e depois. Recebe before e after.",
    tags: ["useState", "clip-path", "input range"],
    preview: () => <Compare before={<div style={{ background: "linear-gradient(135deg,#8a8a8a,#3d3d3d)", display: "grid", placeItems: "center", color: "#fff", fontWeight: 700, fontSize: "1.4rem" }}>Antes</div>} after={<div style={{ background: "linear-gradient(135deg,#ff7a59,#6c4dff)", display: "grid", placeItems: "center", color: "#fff", fontWeight: 700, fontSize: "1.4rem" }}>Depois</div>} />,
    code: bundle("Compare", CompareSrc, CompareCss, "// <Compare before={<img src=\"antes.jpg\" alt=\"\" />} after={<img src=\"depois.jpg\" alt=\"\" />} />"),
  },
  {
    id: "copy",
    title: "Botão copiar",
    cat: "Feedback",
    desc: "Mostra um comando ou trecho e um botão que copia para a área de transferência, trocando o rótulo para \"Copiado ✓\" por um instante.",
    tags: ["clipboard", "useState", "feedback"],
    preview: () => <CopyButton />,
    code: bundle("CopyButton", CopyButtonSrc, CopyButtonCss, "// <CopyButton text=\"npm run dev\" label=\"Copiar\" />"),
  },
];

export default CATALOG;
