# Port-Blog — Blog Pessoal

Este projeto é um blog pessoal desenvolvido como parte do desafio técnico para Pessoa Desenvolvedora Frontend da Alura. O objetivo é demonstrar habilidades em Next.js, TypeScript, Tailwind, boas práticas de desenvolvimento, SEO e acessibilidade, seguindo fielmente o design fornecido no Figma.
## Sobre o Projeto

O Port-Blog é uma aplicação que exibe uma listagem de postagens, permite pesquisa, filtragem por categorias, paginação, visualização de detalhes e sugestões de postagens relacionadas. O layout é totalmente responsivo e conta com tema claro/escuro.

> **Observação:** O arquivo `.env` está sendo enviado propositalmente junto ao projeto para facilitar o teste e execução local, eliminando a necessidade de configuração manual das variáveis de ambiente.
## Etapas para Gerar o Projeto

1. **Clone o repositório:**
	```bash
	git clone https://github.com/Figueiredoisaac/port-blog.git
	cd port-blog
	```
2. **Instale as dependências:**
	```bash
	npm install
	# ou
	yarn install
	# ou
	pnpm install
	# ou
	bun install
	```
3. **Execute o servidor de desenvolvimento:**
	```bash
	npm run dev
	# ou
	yarn dev
	# ou
	pnpm dev
	# ou
	bun dev
	```
4. **Acesse:** [http://localhost:3000](http://localhost:3000)
## Documentação Geral

- **Página inicial:** Listagem dinâmica das postagens consumidas da [API fake](https://nextjs-alura-teste.vercel.app/).
- **Filtros:** Pesquisa por palavra-chave(titulo e conteúdo) e filtragem por categorias.
- **Paginação:** Exibição de 6 postagens por página.
- **Detalhes da postagem:** Título, categorias, tags, descrição e postagens relacionadas.
- **Responsividade:** Layout adaptado para desktop, tablet e mobile.
- **Componentização:** Componentes reutilizáveis para facilitar manutenção e escalabilidade.
- **SEO:** Tags otimizadas para motores de busca.
- **Acessibilidade:** Práticas para garantir navegação inclusiva.
- **Tema claro/escuro:** Alternância de tema como diferencial.

## Requisitos do Case e Como Foram Atendidos

| Requisito | Como foi atendido |
|-----------|-------------------|
| Next.js 15 com App Router | Utilizado na estrutura do projeto |
| TypeScript com tipagem segura | Todo o código é escrito em TypeScript |
| Tailwind 4 para estilização | Estilização feita com Tailwind 4 |
| Consumir API fake | Integração com [API fake](https://nextjs-alura-teste.vercel.app/) |
| Boas práticas de SEO | Tags e metadados otimizados |
| Boas práticas de acessibilidade | Uso de atributos ARIA, navegação por teclado, contraste |
| Fidelidade ao Figma | Layout e componentes seguem o design fornecido |
| Layout 100% responsivo | Testado em diferentes dispositivos |
| Performance | Carregamento rápido e otimizações |
| Componentização | Estrutura modular e reutilizável |
| Tema claro/escuro | Implementado como diferencial |

## Performance e Qualidade

O projeto foi avaliado com **96 pontos** no **Google Lighthouse**, demonstrando excelente performance, acessibilidade, práticas recomendadas e SEO:

![Lighthouse Performance Results](public\diagnostic.png)

- **Performance: 96** - Carregamento otimizado e rápido
- **Acessibilidade: 96** - Navegação inclusiva e acessível
- **Práticas Recomendadas: 100** - Seguindo melhores práticas de desenvolvimento
- **SEO: 100** - Otimização completa para motores de busca

## Referências

- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [API Fake](https://nextjs-alura-teste.vercel.app/)

---
Projeto desenvolvido para o desafio técnico da Alura.

