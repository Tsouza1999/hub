# Hub de Componentes React

Catálogo de componentes React com preview ao vivo e código para copiar.

## Como rodar

    npm install
    npm run dev      # desenvolvimento
    npm run build    # gera a pasta dist

## Estrutura

- `src/Intro.jsx`: abertura com scroll (GSAP).
- `src/Catalog.jsx`: catálogo em linhas com quadros numerados.
- `src/Project.jsx`: página de cada componente (preview, descrição e código).
- `src/data/catalog.jsx`: lista de componentes do catálogo.
- `src/components/`: cada componente com seu `.jsx` e `.css`.

## Como adicionar um componente

1. Crie `Nome.jsx` e `Nome.css` em `src/components/`.
2. Importe os dois (e as versões `?raw`) em `src/data/catalog.jsx`.
3. Inclua um objeto no array `CATALOG` com `id`, `title`, `cat`, `desc`, `tags`, `preview` e `code`.

## Componentes (18)

Carrossel, Interruptor, Acordeão, Avaliação por estrelas, Efeito hover, Zoom no scroll, Pulso 3D,
Catálogo em carrossel, Abas, Menu suspenso, Skeleton, Botão magnético, Contador animado,
Máquina de escrever, Cartão 3D, Marquee, Comparador antes/depois e Botão copiar.
