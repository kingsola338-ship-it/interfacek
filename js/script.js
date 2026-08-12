const botaoMenu = document.querySelector(".botao-menu");
const navegacao = document.querySelector(".navegacao");

if (botaoMenu && navegacao) {

    botaoMenu.addEventListener("click", function () {

        const aberto = navegacao.classList.toggle("aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            aberto
        );

        botaoMenu.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
        );

    });


    const links = navegacao.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navegacao.classList.remove("aberto");

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );

        });

    });

}