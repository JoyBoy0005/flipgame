document.addEventListener('DOMContentLoaded', function () {
    let svgImages = {
        apple: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c-1.1 0-2.1.9-2.1 2s1 2 2.1 2 2.1-.9 2.1-2-1-2-2.1-2zM12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM17 5.5c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7zM12 16c-2.2 0-4.1-1.1-5.2-2.8-.7.6-1.6 1.1-2.6 1.1-.4 0-.8-.1-1.1-.3-.7-.5-1.2-1.2-1.2-2 0-1.4.8-2.6 1.9-3.2-.6-.8-1-1.7-1-2.8 0-2.2 1.8-4 4-4 .6 0 1.1.1 1.6.3 1.3-.8 2.7-1.3 4.2-1.3s2.9.5 4.2 1.3c.5-.2 1.1-.3 1.6-.3 2.2 0 4 1.8 4 4 0 1.1-.4 2.1-1 2.8 1.1.6 1.9 1.8 1.9 3.2 0 .8-.4 1.5-1.2 2-.3.2-.7.3-1.1.3-1 0-1.9-.5-2.6-1.1C16.1 15.9 14.2 16 12 16z"/></svg>',
        banana: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c-2.8 0-5.2 2.2-5.8 5.1-.3-.1-.7-.1-1-.1-2.2 0-4 1.8-4 4s1.8 4 4 4c.3 0 .7-.1 1-.1.6 2.9 3 5.1 5.8 5.1 2.8 0 5.2-2.2 5.8-5.1.3.1.7.1 1 .1 2.2 0 4-1.8 4-4s-1.8-4-4-4c-.3 0-.7.1-1 .1-.6-2.9-3-5.1-5.8-5.1zm0 14c-2.2 0-4-1.8-4-4 0-.5.1-1 .2-1.5 1.1-.7 2.5-1.2 4-1.5 1.5.3 2.9.8 4 1.5.1.5.2 1 .2 1.5 0 2.2-1.8 4-4 4zm0-10c-2.2 0-4 1.8-4 4 0 .5.1 1 .2 1.5 1.1.7 2.5 1.2 4 1.5 1.5-.3 2.9-.8 4-1.5.1-.5.2-1 .2-1.5 0-2.2-1.8-4-4-4z"/></svg>',
        cherry: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M14.5 2c-1.6 0-3.1.8-4.2 2.1-1.1-1.3-2.6-2.1-4.2-2.1-2.8 0-5 2.2-5 5s2.2 5 5 5c1.6 0 3.1-.8 4.2-2.1 1.1 1.3 2.6 2.1 4.2 2.1 2.8 0 5-2.2 5-5s-2.2-5-5-5zM12 13c-1.2 0-2.3-.5-3.1-1.3-.8-.8-1.3-1.9-1.3-3.1 0-2.3 1.8-4.1 4.1-4.1 1.2 0 2.3.5 3.1 1.3.8.8 1.3 1.9 1.3 3.1 0 2.3-1.8 4.1-4.1 4.1zM19 15.8l-1.7-1.7c.5-1.2.8-2.5.8-3.8 0-2.9-2.4-5.3-5.3-5.3-1.3 0-2.6.3-3.8.8l-1.7-1.7c-1.1-1.1-2.8-1.1-3.9 0s-1.1 2.8 0 3.9l1.7 1.7c-.5 1.2-.8 2.5-.8 3.8 0 2.9 2.4 5.3 5.3 5.3 1.3 0 2.6-.3 3.8-.8l1.7 1.7c1.1 1.1 2.8 1.1 3.9 0s1.1-2.8 0-3.9z"/></svg>',
        grape: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M6 2c-2.2 0-4 1.8-4 4 0 1.1.4 2.1 1 2.9-.6.8-1 1.8-1 2.9 0 2.2 1.8 4 4 4 .9 0 1.7-.3 2.4-.8.7.5 1.5.8 2.4.8s1.7-.3 2.4-.8c.7.5 1.5.8 2.4.8 2.2 0 4-1.8 4-4 0-1.1-.4-2.1-1-2.9.6-.8 1-1.8 1-2.9 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 .5.1 1.1.2 1.5-.6-.2-1.2-.4-1.8-.4-2.2 0-4 1.8-4 4 0 1.1.4 2.1 1 2.9-.6.8-1 1.8-1 2.9 0 2.2 1.8 4 4 4 .9 0 1.7-.3 2.4-.8.7.5 1.5.8 2.4.8s1.7-.3 2.4-.8c.7.5 1.5.8 2.4.8 2.2 0 4-1.8 4-4 0-1.1-.4-2.1-1-2.9.6-.8 1-1.8 1-2.9 0-2.2-1.8-4-4-4z"/></svg>',
        orange: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4 0-.5.1-1 .2-1.5 1.1-.7 2.5-1.2 4-1.5 1.5.3 2.9.8 4 1.5.1.5.2 1 .2 1.5 0 2.2-1.8 4-4 4z"/></svg>',
        pear: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c-2.2 0-4 1.8-4 4 0 .6.2 1.1.5 1.6-.6.6-1.1 1.5-1.4 2.4-.3.9-.3 1.9-.3 2.6 0 2.8 1.9 5.1 4.4 5.8.3.1.7.2 1.1.2s.8-.1 1.1-.2c2.5-.7 4.4-3 4.4-5.8 0-.7 0-1.7-.3-2.6-.3-.9-.8-1.8-1.4-2.4.3-.5.5-1.1.5-1.6 0-2.2-1.8-4-4-4zm0 16c-1.4 0-2.7-.5-3.7-1.4-.5-.5-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.2 0-.8.2-1.6.5-2.3.2-.6.6-1.1 1.1-1.5.5-.4 1.1-.7 1.8-.7s1.3.3 1.8.7c.5.4.9.9 1.1 1.5.3.7.5 1.5.5 2.3 0 .8-.2 1.5-.5 2.2-.3.7-.7 1.3-1.2 1.8-.9.9-2.2 1.4-3.7 1.4zm-2.8-2.5c.7-.7 1.3-1.5 1.8-2.4.5-.9.8-1.9.8-2.9 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 1.1.3 2.1.8 2.9.5.9 1.1 1.7 1.8 2.4.6.6 1.4.9 2.3.9s1.7-.3 2.3-.9z"/></svg>'
    };

    const cardValues = ['apple', 'banana', 'cherry', 'grape', 'orange', 'pear'];
    let gameBoard = document.getElementById('game-board');
    let cardArray = [...cardValues, ...cardValues]; // Duplicate for pairs
    let shuffledCards = shuffle(cardArray);
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let score = 0; // Initialize scorew
    let failedAttempts = 0; // Initialize failed attempts
    const maxFailedAttempts = 3; // Maximum number of failed attempts
    const scoreDisplay = document.getElementById('score');
    const winnerBanner = document.getElementById('winner-banner'); // Get the winner banner element
    const restartButton = document.getElementById('restart-button'); // Get the restart button element

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createCard(value) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.innerHTML = `
            <img src="data:image/svg+xml;base64,${btoa(svgImages[value])}" alt="${value}">
        `;
        card.addEventListener('click', flipCard);
        return card;
    }

    function flipCard() {
        if (lockBoard || this === firstCard) return;
        this.classList.add('flipped');
        if (!firstCard) {
            firstCard = this;
            return;
        }
        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.value === secondCard.dataset.value;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        updateScore(); // Update the score when cards match
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        failedAttempts++; // Increment failed attempts
        if (failedAttempts >= maxFailedAttempts) {
            endGame(); // End the game if maximum failed attempts reached
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                resetBoard();
            }, 1500);
        }
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function updateScore() {
        score++;
        scoreDisplay.textContent = score;
        checkWinner(); // Check for winner after updating the score
    }

    function checkWinner() {
        if (score >= 6) {
            showWinnerBanner();
        }
    }

    function showWinnerBanner() {
        winnerBanner.style.display = 'block'; // Show the banner
    }

    function endGame() {
        alert('Game Over! Reload the page to play agian'); // Alert the player that the game is over
        reloadPage(); // Restart the game
    }

    function resetGame() {
        failedAttempts = 0; // Reset failed attempts
        score = 0; // Reset score
        scoreDisplay.textContent = score; // Update the score display
        winnerBanner.style.display = 'none'; // Hide the winner banner
        gameBoard.innerHTML = ''; // Clear the game board
        shuffledCards = shuffle(cardArray); // Shuffle the cards again
        startGame(); // Start a new game
    }

    function startGame() {
        shuffledCards.forEach(value => {
            const card = createCard(value);
            gameBoard.appendChild(card);
        });
    }

    restartButton.addEventListener('dblclick', resetGame); // Add event listener to restart button

    startGame();
});

function reloadPage() {
    location.reload(); // Reload the current page
}
