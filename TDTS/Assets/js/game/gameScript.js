function gameBuild(gameFrame, gameItem, i, points, isStarted) {
    let nameOfPlayer

    if(isStarted === true) { // zmienic na true
        nameOfPlayer = "noname" || document.querySelector("#inputName").value;

        RenderGameBody(gameFrame, gameItem, i, points, nameOfPlayer);
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

    isAnswerTrue(gameFrame, gameItem, i, points, isStarted, nameOfPlayer);
}

const renderGame = (gameItem) => {
    let i = 0;
    let points = 0;
    let isStarted = false;
    const gameFrame = document.createElement("div");

    gameBuild(gameFrame, gameItem, i, points, isStarted);
}
window.addEventListener("load", renderGame(quizBase));

function isAnswerTrue(gameFrame, gameItem, i, points, isStarted, name) {
    const answerAID = document.querySelector("#answerA");
    const answerBID = document.querySelector("#answerB");
    const answerCID = document.querySelector("#answerC");
    const answerDID = document.querySelector("#answerD");

    answerAID.addEventListener("click", () => {
        if(gameItem[i].correctAnswer === gameItem[i].answerA) {
            points += gameItem[i].punkty;
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameItem, gameFrame, points, name);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        } else {
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameItem, gameFrame, points, name);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        }
    });
    answerBID.addEventListener("click", () => {
        if(gameItem[i].correctAnswer === gameItem[i].answerB) {
            points += gameItem[i].punkty;
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameItem, gameFrame, points, name);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        } else {
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameItem, gameFrame, points, name);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        }
    });
    answerCID.addEventListener("click", () => {
        if(gameItem[i].correctAnswer === gameItem[i].answerC) {
            points += gameItem[i].punkty;
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameItem, gameFrame, points, name);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        } else {
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameItem, gameFrame, points, name);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        }
    });
    answerDID.addEventListener("click", () => {
        if(gameItem[i].correctAnswer === gameItem[i].answerD) {
            points += gameItem[i].punkty;
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameItem, gameFrame, points, name);
            else gameBuild(gameFrame, gameItem, i, points, isStarted);
        } else {
            i++;

            if(i >= gameItem.length) RenderFinishMenuGame(gameItem, gameFrame, points, name);
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
    gameBody.innerHTML = ``;
    gameBody.appendChild(gameFrame);


    gameFrame.className = "game-panel-menu";
    gameFrame.innerHTML = `
    <div>
        <p class="errorInput h5"></p>
        <input class="h5" id="inputName" type="text" placeholder="Podaj nazwę...">
    </div>
    <button class="play h3">Zacznij grę!</button>
    `
    gameBody.appendChild(gameFrame);
}

// Render game
function RenderGameBody(gameFrame, gameItem, i, points, name) {
    const gameBody = document.querySelector(".game-panel");

    gameFrame.className = "game-panel-board";
    gameFrame.innerHTML = `
    <div class="game-info">
        <p class="timer h5">Czas: 0</p>
        <p class="name h4">${name}</p>
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

function RenderFinishMenuGame(gameItem, gameFrame, points, name) {
    const gameBody = document.querySelector(".game-panel");

    gameFrame.className = "game-panel-finish";
    gameFrame.innerHTML = `
        <div class="gpf-container">
            <p class="gpf-name h3">${name}</p>
            <p class="congratulations h5">Gratuluję ukończenia Quizzu!</p>
            <p class="gpf-points h4">${points} punktów</p>
            <button class="gr-btn h4" id="btn-restart">Restart</button>
        </div>
    `
    gameBody.appendChild(gameFrame);

    const restart = document.getElementById("btn-restart");
    restart.addEventListener("click", () => {
        restartGame();
    });
}

function restartGame() {
    renderGame(quizBase)
}