const images = [
    "/static/images/fond1.jpg",
    "/static/images/fond2.jpg",
    "/static/images/fond3.jpg",
    "/static/images/fond4.jpg"
];

let cards = [...images, ...images];
cards.sort(() => Math.random() - 0.5);

const game = document.querySelector(".memory-game");

let firstCard = null;
let lock = false;

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
        firstCard = null;
        lock = false;
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            firstCard = null;
            lock = false;
        }, 700);
    }
}
