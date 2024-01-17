function gameBuild(gameFrame, gameItem, i, points, isStarted) {
    if(isStarted === true) {
        RenderGameBody(gameFrame, gameItem, i, points);
        setScrollnStop();
    } else {
        RenderMenuGame(gameFrame);
        document.querySelector(".play").addEventListener("click", () => {
            if(!document.querySelector("#inputName").value) document.querySelector(".errorInput").innerHTML = "Podaj swoją nazwę!";
            else {
                isStarted = true;
                gameBuild(gameFrame, gameItem, i, points, isStarted);
            }
        });
    }
    isAnswerTrue(gameFrame, gameItem, i, points, isStarted);
}

const renderGame = (gameItem) => {
    let i = 0;
    let points = 0;
    let isStarted = false; //// Zmienić na false
    const gameFrame = document.createElement("div");

    gameBuild(gameFrame, gameItem, i, points, isStarted);
}
window.addEventListener("load", renderGame(quizBase));

function isAnswerTrue(gameFrame, gameItem, i, points, isStarted) {
    const answerAID = document.querySelector("#answerA");
    const answerBID = document.querySelector("#answerB");
    const answerCID = document.querySelector("#answerC");
    const answerDID = document.querySelector("#answerD");

    answerAID.addEventListener("click", () => {
        if(gameItem[i].correctAnswer === gameItem[i].answerA) {
            points += gameItem[i].punkty;
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameFrame, points);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        } else {
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameFrame, points);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        }
    });
    answerBID.addEventListener("click", () => {
        if(gameItem[i].correctAnswer === gameItem[i].answerB) {
            points += gameItem[i].punkty;
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameFrame, points);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        } else {
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameFrame, points);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        }
    });
    answerCID.addEventListener("click", () => {
        if(gameItem[i].correctAnswer === gameItem[i].answerC) {
            points += gameItem[i].punkty;
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameFrame, points);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        } else {
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameFrame, points);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        }
    });
    answerDID.addEventListener("click", () => {
        if(gameItem[i].correctAnswer === gameItem[i].answerD) {
            points += gameItem[i].punkty;
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameFrame, points);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        } else {
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameFrame, points);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        }
    });
}

// Set scrolling to hidden
function setScrollnStop() {
    document.getElementById("blockOnGame").scrollIntoView();
    document.body.style.overflow = 'hidden';
}

// Render game menu
function RenderMenuGame(gameFrame) {
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
function RenderGameBody(gameFrame, gameItem, i, points) {
    const gameBody = document.querySelector(".game-panel");

    gameFrame.className = "game-board";
    gameFrame.innerHTML = `
    <div class="game-info">
        <p class="timer h5">Czas: 0</p>
        <p class="points h5">Punkty: ${points}</p>
    </div>
        <p class="question h3">${gameItem[i].question}</p>
    <div class="answers">
        <button id="answerA" class="h6">A. ${gameItem[i].answerA}</button>
        <button id="answerB" class="h6">B. ${gameItem[i].answerB}</button>
        <button id="answerC" class="h6">C. ${gameItem[i].answerC}</button>
        <button id="answerD" class="h6">D. ${gameItem[i].answerD}</button>
    </div>
    `
    gameBody.appendChild(gameFrame);
}

function RenderFinishMenuGame(gameFrame, points) {
    const gameBody = document.querySelector(".game-panel");

    gameFrame.className = "game-play-panel";
    gameFrame.innerHTML = `
        <p class="game-end h2">Gratuluję ukończenia Quizzu.</p>
        <p class="game-end-points h4">Twój wynik to: <sclass="h3">${points}</span></p>
    `
    gameBody.appendChild(gameFrame);
}