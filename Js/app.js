// Parte 1
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 0)
})

// Parte 2

document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("searchIcon");
    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");

    searchIcon.addEventListener("click", function() {
        searchContainer.classList.toggle("hide");
        searchIcon.classList.toggle("search-outline"); // Adiciona ou remove a classe "search-outline"
    });
});

// Parte 3

document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("searchIcon");
    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");

    searchIcon.addEventListener("click", function() {
        searchContainer.classList.toggle("show");
        searchIcon.classList.toggle("search");
        searchIcon.classList.toggle("search-outline");

        if (searchContainer.classList.contains("show")) {
            searchInput.style.display = "block";
            searchIcon.setAttribute("name", "search");
        } else {
            searchInput.style.display = "none";
            searchIcon.setAttribute("name", "search-outline");
        }
    });
});

// Parte 4

// Parte 4

// Aguarda o carregamento do conteúdo HTML antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Obtém referências para os elementos relevantes no DOM
    const searchIcon = document.getElementById("searchIcon"); // Ícone de pesquisa
    const searchContainer = document.getElementById("searchContainer"); // Contêiner de pesquisa
    const searchInput = document.getElementById("searchInput"); // Campo de entrada de pesquisa
    const headerLogo = document.querySelector(".header-logo"); // Logotipo do cabeçalho
    const headerIcons = document.querySelector(".header-icons"); // Ícones do cabeçalho

    // Referência aos elementos de submit e filtro
    const submitInput = document.getElementById("submitInput");
    const filterDiv = document.getElementById("filterDiv");

    // Define um evento de clique para o ícone de pesquisa
    searchIcon.addEventListener("click", function() {
        searchContainer.classList.toggle("show"); // Adicione esta linha
        // Alterna a classe "show" no contêiner de pesquisa para exibi-lo ou ocultá-lo
        searchContainer.classList.toggle("show");
        // Alterna as classes do ícone de pesquisa para alternar entre a lupa e o ícone de pesquisa preenchido
        searchIcon.classList.toggle("search");
        searchIcon.classList.toggle("search-outline");
        // Alterna a classe "hide" no logotipo e ícones do cabeçalho para ocultá-los ou exibi-los
        headerLogo.classList.toggle("hide");
        headerIcons.classList.toggle("hide");

        // Verifica se o contêiner de pesquisa possui a classe "show"
        if (searchContainer.classList.contains("show")) {
            // Se o contêiner de pesquisa está visível, exibe o campo de entrada
            searchInput.style.display = "block";
            // Exibe o elemento de submit
            submitInput.style.display = "block";
            // Exibe a div de filtro
            filterDiv.style.display = "block";  
            // Altera o nome do ícone de pesquisa para "search"
            searchIcon.setAttribute("name", "search");
            // Adiciona a classe "fullwidth" ao campo de entrada para ajustar a largura
            searchInput.classList.add("fullwidth");
        } else {
            // Se o contêiner de pesquisa está oculto, oculta o campo de entrada
            searchInput.style.display = "none";
            // Oculta o elemento de submit
            submitInput.style.display = "none";
            // Oculta a div de filtro
            filterDiv.style.display = "none";
            // Restaura o nome do ícone de pesquisa para "search-outline"
            searchIcon.setAttribute("name", "search-outline");
            // Remove a classe "fullwidth" do campo de entrada
            searchInput.classList.remove("fullwidth");
        }
    });
});