# 🧶 DS Amigurumi | Vitrine Virtual

> Um catálogo virtual moderno, responsivo e elegante para exposição e venda de amigurumis personalizados, com integração direta para pedidos via WhatsApp.

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange)
![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML5%20|%20CSS3%20|%20JS-blue)

## 📌 Sobre o Projeto

O **DS Amigurumi** é um site desenvolvido para funcionar como um portfólio e loja virtual. Ele foi construído com foco em **usabilidade, performance e conversão**, utilizando um tema escuro (Dark Mode) sofisticado que destaca as fotos dos produtos. 

A arquitetura do site permite que os clientes visualizem o catálogo de amigurumis (como Dobby, Banguela, entre outros) e, com apenas um clique, entrem em contato diretamente pelo WhatsApp com uma mensagem pré-configurada sobre o produto de interesse.

## ✨ Principais Funcionalidades

- **Catálogo Dinâmico:** Produtos são renderizados automaticamente na tela através de um array no JavaScript, facilitando a adição de novos itens no futuro.
- **Integração com WhatsApp:** Botões de "Tenho interesse" e "Fazer encomenda" geram links dinâmicos do WhatsApp (usando `encodeURIComponent`) com mensagens específicas.
- **Carrossel Automático (Hero):** A seção principal possui uma troca de imagens de fundo automática a cada 6 segundos, com gradientes que se adaptam se o usuário estiver no celular ou no computador.
- **Sistema de Favoritos (Acessível):** Os usuários podem curtir os produtos. A funcionalidade foi construída pensando em acessibilidade, alternando dinamicamente os atributos `aria-pressed` e `aria-label` para leitores de tela.
- **Design Totalmente Responsivo:** Layout fluido que se adapta perfeitamente a celulares, tablets e desktops utilizando CSS Grid, Flexbox e Media Queries.
- **Menu Mobile em Swipe:** Navegação fluida no celular com scroll horizontal nativo ocultando a barra de rolagem.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as tecnologias base da web, sem a necessidade de frameworks pesados, garantindo carregamento rápido e código limpo:

- **HTML5:** Estrutura altamente semântica.
- **CSS3:** Estilização componentizada, variáveis de cor, Grid Layout, Flexbox e animações fluidas (`transitions`).
- **JavaScript (Vanilla / ES6+):** Manipulação da DOM, criação de elementos dinâmicos, timers (`setInterval`) e lógica de negócio.
- **FontAwesome:** Utilizado para a iconografia do site (corações, logo do WhatsApp, etc).

## 🚀 Como executar o projeto localmente

Como o projeto é construído em arquivos estáticos (Vanilla), executá-lo é extremamente simples:

1. Clone este repositório em sua máquina:
   ```bash
   git clone [https://github.com/](https://github.com/Arensoo/ds-amigurumi.git
