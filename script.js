// JavaScript for dynamically setting equal heights to cards
        window.onload = function() {
            setCardHeights();
        };

        window.onresize = function() {
            setCardHeights();
        };

        function setCardHeights() {
            var cards = document.querySelectorAll('.card');
            var maxHeight = 0;
            
            cards.forEach(function(card) {
                card.style.height = 'auto'; // Reset height to auto to recalculate based on content
                var cardHeight = card.offsetHeight;
                if (cardHeight > maxHeight) {
                    maxHeight = cardHeight;
                }
            });

            cards.forEach(function(card) {
                card.style.height = maxHeight + 'px'; // Set all cards to the same maximum height
            });
        }
