// JavaScript for dynamically setting equal heights to cards
window.onload = function() {
    setCardDimensions();
};

window.onresize = function() {
    setCardDimensions();
};

function setCardDimensions() {
    var cards = document.querySelectorAll('.card');
    var maxWidth = 0;
    var maxHeight = 0;

    cards.forEach(function(card) {
        card.style.width = 'auto'; // Reset width to auto to recalculate based on content
        card.style.height = 'auto'; // Reset height to auto to recalculate based on content
        var cardWidth = card.offsetWidth;
        var cardHeight = card.offsetHeight;
        
        if (cardWidth > maxWidth) {
            maxWidth = cardWidth;
        }
        if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
        }
    });

    cards.forEach(function(card) {
        card.style.width = maxWidth + 'px'; // Set all cards to the same maximum width
        card.style.height = maxHeight + 'px'; // Set all cards to the same maximum height
    });
}