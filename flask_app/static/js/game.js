const images = [
    "/static/images/fond1.jpg",
    "/static/images/fond2.jpg",
    "/static/images/fond3.jpg",
    "/static/images/fond4.jpg"
];

// Duplique les images pour créer des paires
let cards = [...images, ...images];
cards.sort(() => Math.random() - 0.5);

const game = document.querySelector(".memory-game");
let firstCard = null;
let lock = false;
let matchedPairs = 0;

// Génère les cartes
cards.forEach(src => {
    const card = document.createElement("div");
    card.classList.add("memory-card");

    card.innerHTML = `
        <img class="front" src="${src}">
        <div class="back"></div>
    `;

    card.addEventListener("click", () => flipCard(card));
    game.appendChild(card);
});

function flipCard(card) {
    if (lock || card === firstCard) return;
    card.classList.add("flip");

    if (!firstCard) {
        firstCard = card;
        return;
    }

    checkMatch(card);
}

function checkMatch(secondCard) {
    lock = true;

    const img1 = firstCard.querySelector(".front").src;
    const img2 = secondCard.querySelector(".front").src;

    if (img1 === img2) {
        matchedPairs += 1;
        firstCard = null;
        lock = false;

        if (matchedPairs === images.length) {
            showFinalImage();
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            firstCard = null;
            lock = false;
        }, 700);
    }
}

function showFinalImage() {
    const game = document.querySelector(".memory-game");
    game.innerHTML = ""; // supprime toutes les cartes

    const container = document.getElementById("final-image");
    container.innerHTML = ""; // vide le conteneur

    // Crée un lien vers une autre page
    const link = document.createElement("a");
    link.href = "/nouvelle-page"; // mets ici l'URL de redirection

    // Crée l'image
    const finalImage = document.createElement("img");
    finalImage.src = images[0]; // image de victoire

    // Ajoute l'image dans le lien
    link.appendChild(finalImage);

    // Ajoute le lien dans le conteneur
    container.appendChild(link);
}

