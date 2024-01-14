const renderGame = (gameItem) => {
    let points = 0;
    let isStarted = true; //// Zmienić na false
    const gameFrame = document.createElement("div");

    if(isStarted === true) {
        RenderGameBody(gameFrame, gameItem);
        setScrollnStop();
    } else {
        RenderMenuGame(gameFrame, gameItem);
    }

    document.querySelector(".play").addEventListener("click", () => {
        if(document.getElementById("inputName").value) isStarted = true;

        document.querySelector(".errorInput").innerHTML = "Podaj swoją nazwę!";

        if(isStarted === true) {
            RenderGameBody(gameFrame, gameItem);
            setScrollnStop();
        }
    })
}
window.addEventListener("load", renderGame(quizBase));

// Set scrolling to hidden
function setScrollnStop() {
    document.getElementById("blockOnGame").scrollIntoView();
    document.body.style.overflow = 'hidden';
}

// Render game menu
function RenderMenuGame(gameFrame, gameItem) {
    const gameBody = document.querySelector(".game-panel");

    gameFrame.className = "game-play-panel";
    gameFrame.innerHTML = `
    <div>
        <p class="errorInput h5"></p>
        <input class="h5" id="inputName" type="text" placeholder="Podaj nazwę...">
    </div>
    <button class="play h2">Zacznij grę!</button>
    `
    gameBody.appendChild(gameFrame);
}

// Render game
function RenderGameBody(gameFrame, gameItem) {
    const gameBody = document.querySelector(".game-panel");

    gameFrame.className = "game-board";
    gameFrame.innerHTML = `
    <div class="game-info">
        <p class="timer h5">Czas: 0</p>
        <p class="points h5">Punkty: 0</p>
    </div>
        <p class="question h3">Jakieś pytanie cnie?</p>
    <div class="answers">
        <button id="answerA" class="h6">A. Odpowiedź</button>
        <button id="answerB" class="h6">B. Odpowiedź</button>
        <button id="answerC" class="h6">C. Odpowiedź</button>
        <button id="answerD" class="h6">D. Odpowiedź</button>
    </div>
    `
    gameBody.appendChild(gameFrame);
}