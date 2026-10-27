# Hello Brasil Eventos
Site responsivo para produtora de eventos, com identidade visual preta e dourada.

## Executar
Requer Node.js 20+ recomendado.
```bash
npm install
npm run dev
```

## Build de produção
```bash
npm run build
npm run preview
```

## Recursos
- Página Principal, Eventos, Sobre Nós, Fale Conosco e detalhe individual do evento.
- Banner de próximo evento clicável, pesquisa e filtros.
- Layout responsivo, menu móvel e formulário validado.
- O formulário usa `mailto`; integrar backend/serviço de formulário para recebimento confiável.

## Antes de publicar
- Confirmar endereço de e-mail e dados oficiais da empresa.
- Atualizar eventos, datas, locais, preços e links de ingressos. O conteúdo atual é demonstrativo.
- Usar imagens autorizadas e testar o site em celular e desktop.
- Rodar `npm run build` e publicar a pasta `dist` em Netlify ou Vercel.
