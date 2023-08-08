window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 0)
})
document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("searchIcon");
    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");

    searchIcon.addEventListener("click", function() {
        searchContainer.classList.toggle("hide");
        searchIcon.classList.toggle("search-outline"); // Adiciona ou remove a classe "search-outline"
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("searchIcon");
    const searchContainer = document.getElementById("searchContainer");

    searchIcon.addEventListener("click", function() {
        if (searchContainer.classList.contains("hide")) {
            searchIcon.classList.remove("search");
            searchIcon.classList.add("search-outline");
        } else {
            searchIcon.classList.remove("search-outline");
            searchIcon.classList.add("search");
        }
        searchContainer.classList.toggle("hide");
        searchContainer.classList.toggle("show"); // Adiciona ou remove a classe "show"
    });
});