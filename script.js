/* ==================================================
   1. CONFIGURAÇÕES
   ================================================== */

const numeroWhatsApp = "5551994631522";


/* ==================================================
   2. FUNÇÃO DO WHATSAPP
   ================================================== */

function abrirWhatsApp(mensagem) {

    const linkWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(
        linkWhatsApp,
        "_blank"
    );

}


/* ==================================================
   3. PRODUTOS
   ================================================== */

const produtos = [

    {
        nome: "Dobby",
        preco: 0.00,
        tamanho: "10 cm",
        imagem: "imagens/dobby.jpg"
    },

    {
        nome: "Banguela e Abranquela",
        preco: 0.00,
        tamanho: "10 cm",
        imagem: "imagens/banguelaeabranquela.jpg"
    },

    {
        nome: "Fruta Luffy",
        preco: 0.00,
        tamanho: "10 cm",
        imagem: "imagens/frutaluffy.jpg"
    }

];


/* ==================================================
   4. CATÁLOGO DE PRODUTOS
   ================================================== */

const listaProdutos =
    document.getElementById("lista-produtos");


produtos.forEach((produto) => {


    /* ==================================================
       4.1 CRIA O CARD
       ================================================== */

    const card =
        document.createElement("div");

    card.classList.add("produto");


    /* ==================================================
       4.2 CONTEÚDO DO CARD
       ================================================== */

    card.innerHTML = `

        <div class="produto-imagem">

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <button
                type="button"
                class="btn-favorito"
                aria-label="Adicionar aos favoritos"
                aria-pressed="false"
            >

                <i class="fa-regular fa-heart"></i>

            </button>

        </div>


        <h3>
            ${produto.nome}
        </h3>


        <p>
            ${produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}
        </p>


        <span class="tamanho">
            ${produto.tamanho}
        </span>


        <button
            type="button"
            class="btn-interesse"
        >

            <i class="fa-brands fa-whatsapp"></i>

            Tenho interesse

        </button>

    `;


    /* ==================================================
       4.3 ADICIONA O CARD À PÁGINA
       ================================================== */

    listaProdutos.appendChild(card);


    /* ==================================================
       4.4 BOTÃO DE FAVORITO
       ================================================== */

    const botaoFavorito =
        card.querySelector(".btn-favorito");

    const iconeFavorito =
        botaoFavorito.querySelector("i");


    botaoFavorito.addEventListener("click", () => {

        const favoritado =
            botaoFavorito.classList.toggle("favoritado");


        botaoFavorito.setAttribute(
            "aria-pressed",
            favoritado
        );


        botaoFavorito.setAttribute(
            "aria-label",
            favoritado
                ? `Remover ${produto.nome} dos favoritos`
                : `Adicionar ${produto.nome} aos favoritos`
        );


        if (favoritado) {

            iconeFavorito.classList.remove(
                "fa-regular"
            );

            iconeFavorito.classList.add(
                "fa-solid"
            );

        } else {

            iconeFavorito.classList.remove(
                "fa-solid"
            );

            iconeFavorito.classList.add(
                "fa-regular"
            );

        }

    });


    /* ==================================================
       4.5 BOTÃO "TENHO INTERESSE"
       ================================================== */

    const botaoInteresse =
        card.querySelector(".btn-interesse");


    botaoInteresse.addEventListener("click", () => {

        const mensagem =
            `Olá, vi o ${produto.nome} no site DS Amigurumi e gostaria de saber mais sobre ele.`;


        abrirWhatsApp(mensagem);

    });

});


/* ==================================================
   5. BOTÃO DE ENCOMENDA PERSONALIZADA
   ================================================== */

const botaoEncomenda =
    document.querySelector(".btn-encomenda");


if (botaoEncomenda) {

    botaoEncomenda.addEventListener("click", (event) => {

        event.preventDefault();


        const mensagem =
            "Olá! Gostaria de fazer uma encomenda personalizada com a DS Amigurumi.";


        abrirWhatsApp(mensagem);

    });

}


/* ==================================================
   6. BOTÃO "FAZER ENCOMENDA" DO HERO
   ================================================== */

const botaoEncomendaHero =
    document.getElementById("btn-encomenda-hero");


if (botaoEncomendaHero) {

    botaoEncomendaHero.addEventListener("click", () => {

        const mensagem =
            "Olá! Vi o site da DS Amigurumi e gostaria de fazer uma encomenda personalizada.";


        abrirWhatsApp(mensagem);

    });

}


/* ==================================================
   7. BOTÃO DE WHATSAPP DO CONTATO
   ================================================== */

const botaoWhatsApp =
    document.getElementById("btn-whatsapp");


if (botaoWhatsApp) {

    botaoWhatsApp.addEventListener("click", (event) => {

        event.preventDefault();


        const mensagem =
            "Olá! Entrei em contato pelo site da DS Amigurumi e gostaria de saber mais sobre os produtos.";


        abrirWhatsApp(mensagem);

    });

}


/* ==================================================
   8. CARROSSEL DO HERO
   ================================================== */

const imagensHero = [

    "imagens/dobby.jpg",

    "imagens/banguelaeabranquela.jpg",

    "imagens/frutaluffy.jpg"

];


const bannerHero =
    document.getElementById("inicio");


let indiceAtual = 0;


/* ==================================================
   9. GRADIENTE RESPONSIVO DO HERO
   ================================================== */

function obterGradienteHero() {

    const larguraTela =
        window.innerWidth;


    if (larguraTela <= 768) {

        return `
            linear-gradient(
                to bottom,
                #111111 0%,
                #111111 32%,
                rgba(17, 17, 17, 0.9) 48%,
                rgba(17, 17, 17, 0) 78%
            )
        `;

    }


    return `
        linear-gradient(
            to right,
            #111111 40%,
            rgba(17, 17, 17, 0.8) 60%,
            transparent 100%
        )
    `;

}


/* ==================================================
   10. FUNÇÃO PARA TROCAR A IMAGEM
   ================================================== */

function trocarImagemHero() {

    if (!bannerHero) {
        return;
    }


    const gradiente =
        obterGradienteHero();


    bannerHero.style.backgroundImage = `
        ${gradiente},
        url("${imagensHero[indiceAtual]}")
    `;

}


/* ==================================================
   11. INICIA A PRIMEIRA IMAGEM
   ================================================== */

trocarImagemHero();


/* ==================================================
   12. ATUALIZA O HERO AO REDIMENSIONAR A TELA
   ================================================== */

window.addEventListener(
    "resize",
    trocarImagemHero
);


/* ==================================================
   13. TROCA AUTOMÁTICA DO HERO
   ================================================== */

setInterval(() => {

    indiceAtual =
        (indiceAtual + 1) % imagensHero.length;


    trocarImagemHero();

}, 6000);


/* ==================================================
   14. ANO AUTOMÁTICO DO FOOTER
   ================================================== */

const anoAtual =
    document.getElementById("ano-atual");


if (anoAtual) {

    anoAtual.textContent =
        new Date().getFullYear();

}