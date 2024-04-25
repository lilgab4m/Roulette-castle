// Função para filtrar os jogos
function filterGames(searchTerm) {
    const gameItems = document.querySelectorAll(".game-item");
    gameItems.forEach(function(gameItem) {
        const gameName = gameItem.querySelector("p").textContent.toLowerCase();
        if (gameName.includes(searchTerm.toLowerCase())) {
            gameItem.style.display = "block";
        } else {
            gameItem.style.display = "none";
        }
    });
}

// Exibir todos os jogos ao carregar a página
window.onload = function() {
    const searchInput = document.querySelector(".search-input");
    searchInput.addEventListener("input", function() {
        filterGames(this.value);
    });
};
