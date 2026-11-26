
document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".flip-card");

    cards.forEach(function (card) {

        const front = card.querySelector(".flip-trigger");
        const back = card.querySelector(".back-btn");

        // Flip to product information
        front.addEventListener("click", function () {
            card.classList.add("flipped");
        });

        // Return to product image
        back.addEventListener("click", function () {
            card.classList.remove("flipped");
        });

    });

})
