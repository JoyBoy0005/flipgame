/**
 * @author Prince Patel
 */

document.addEventListener('DOMContentLoaded', function () {
    const svgImages = {
        apple: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c-1.1 0-2.1.9-2.1 2s1 2 2.1 2 2.1-.9 2.1-2-1-2-2.1-2z"/></svg>',
        banana: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c-2.8 0-5.2 2.2-5.8 5.1-.3-.1-.7-.1-1-.1-2.2 0-4 1.8-4 4s1.8 4 4 4c.3 0 .7-.1 1-.1.6 2.9 3 5.1 5.8 5.1s5.2-2.2 5.8-5.1c.3.1.7.1 1 .1 2.2 0 4-1.8 4-4s-1.8-4-4-4c-.3 0-.7.1-1 .1-.6-2.9-3-5.1-5.8-5.1z"/></svg>',
        cherry: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M14.5 2c-1.6 0-3.1.8-4.2 2.1-1.1-1.3-2.6-2.1-4.2-2.1-2.8 0-5 2.2-5 5s2.2 5 5 5c1.6 0 3.1-.8 4.2-2.1 1.1 1.3 2.6 2.1 4.2 2.1 2.8 0 5-2.2 5-5s-2.2-5-5-5z"/></svg>',
        grape: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M6 2c-2.2 0-4 1.8-4 4 0 1.1.4 2.1 1 2.9-.6.8-1 1.8-1 2.9 0 2.2 1.8 4 4 4 .9 0 1.7-.3 2.4-.8.7.5 1.5.8 2.4.8s1.7-.3 2.4-.8c.7.5 1.5.8 2.4.8 2.2 0 4-1.8 4-4 0-1.1-.4-2.1-1-2.9.6-.8 1-1.8 1-2.9 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 .5.1 1.1.2 1.5-.6-.2-1.2-.4-1.8-.4-2.2 0-4 1.8-4 4 0 1.1.4 2.1 1 2.9-.6.8-1 1.8-1 2.9 0 2.2 1.8 4 4 4 .9 0 1.7-.3 2.4-.8.7.5 1.5.8 2.4.8s1.7-.3 2.4-.8c.7.5 1.5.8 2.4.8 2.2 0 4-1.8 4-4 0-1.1-.4-2.1-1-2.9.6-.8 1-1.8 1-2.9 0-2.2-1.8-4-4-4z"/></svg>',
        orange: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z"/></svg>',
        pear: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c-2.2 0-4 1.8-4 4 0 .6.2 1.1.5 1.6-.6.6-1.1 1.5-1.4 2.4-.3.9-.3 1.9-.3 2.6 0 2.8 1.9 5.1 4.4 5.8.3.1.7.2 1.1.2s.8-.1 1.1-.2c2.5-.7 4.4-3 4.4-5.8 0-.7 0-1.7-.3-2.6-.3-.9-.8-1.8-1.4-2.4.3-.5.5-1.1.5-1.6 0-2.2-1.8-4-4-4z"/></svg>',
    };

    const cardValues = ['apple', 'banana', 'cherry', 'grape', 'orange', 'pear'];
    let gameBoard = document.getElementById('game-board');
    let cardArray = [...cardValues, ...cardValues];
    let shuffledCards = shuffle(cardArray);
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let score = 0;
    let failedAttempts = 0;
    let hintUsed = false;
    const maxFailedAttempts = 3;

    const scoreDisplay = document.getElementById('score');
    const winnerBanner = document.getElementById('winner-banner');
    const gameOverBanner = document.getElementById('game-over-banner');
    const restartButton = document.getElementById('restart-button');
    const hintButton = document.getElementById('hint-button');
    const gameOverRestartButton = document.getElementById('restart-game-over');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createCard(value) {
        const card = document.createElement('div');
        card.classList.add('card', 'bg-gray-200', 'rounded', 'cursor-pointer');
        card.dataset.value = value;
        card.innerHTML = `<img src="data:image/svg+xml;base64,${btoa(svgImages[value])}" alt="${value}" class="hidden">`;
        card.addEventListener('click', flipCard);
        return card;
    }

    function flipCard() {
        if (lockBoard || this === firstCard) return;

        this.classList.add('flipped');
        this.querySelector('img').classList.remove('hidden');

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        lockBoard = true;

        const isMatch = firstCard.dataset.value === secondCard.dataset.value;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
        updateScore();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.querySelector('img').classList.add('hidden');
            secondCard.querySelector('img').classList.add('hidden');

            resetBoard();
            failedAttempts++;

            if (failedAttempts >= maxFailedAttempts) {
                showGameOverBanner();
            }
        }, 1500);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function updateScore() {
        score++;
        scoreDisplay.textContent = score;

        if (score === cardValues.length) {
            showWinnerBanner();
        }
    }

    function showWinnerBanner() {
        winnerBanner.classList.remove('hidden');
        winnerBanner.style.display = 'block';
    }

    function showGameOverBanner() {
        gameOverBanner.classList.remove('hidden');
        gameOverBanner.style.display = 'block';
        lockBoard = true;
    }

    function resetGame() {
        failedAttempts = 0;
        score = 0;
        hintUsed = false;
        scoreDisplay.textContent = score;
        shuffledCards = shuffle(cardArray);

        winnerBanner.classList.add('hidden');
        winnerBanner.style.display = 'none';
        gameOverBanner.classList.add('hidden');
        gameOverBanner.style.display = 'none';

        hintButton.disabled = false;
        hintButton.classList.remove('opacity-50', 'cursor-not-allowed');

        gameBoard.innerHTML = '';

        startGame();
    }

    function startGame() {
        gameBoard.innerHTML = '';
        shuffledCards.forEach((value) => {
            const card = createCard(value);
            gameBoard.appendChild(card);
        });
    }

    function showHint() {
        if (hintUsed) return;
        hintUsed = true;
        hintButton.disabled = true;
        hintButton.classList.add('opacity-50', 'cursor-not-allowed');

        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            card.classList.add('flipped');
            card.querySelector('img').classList.remove('hidden');
        });

        setTimeout(() => {
            cards.forEach((card) => {
                card.classList.remove('flipped');
                card.querySelector('img').classList.add('hidden');
            });
        }, 200);
    }

    restartButton.addEventListener('click', resetGame);
    gameOverRestartButton.addEventListener('click', reloadPage);
    hintButton.addEventListener('click', showHint);

    startGame();
});
function reloadPage() {
    location.reload(); // Reload the current page
}
