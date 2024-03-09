function gameBuild(gameFrame, gameItem, i, points, isStarted) {
    if(isStarted === true) { // zmienic na true
        RenderGameBody(gameFrame, gameItem, i, points);
        setScrollnStop();
    } else {
        RenderMenuGame(gameFrame);
        document.querySelector(".play").addEventListener("click", () => {
                isStarted = true;
                gameBuild(gameFrame, gameItem, i, points, isStarted);
        });
    }

    isAnswerTrue(gameFrame, gameItem, i, points, isStarted);
}

const renderGame = (gameItem) => {
    let i = 0;
    let points = 0;
    let isStarted = false;
    const gameFrame = document.createElement("div");

    gameBuild(gameFrame, gameItem, i, points, isStarted);
}
window.addEventListener("load", renderGame(quizBase));



function isAnswerTrue(gameFrame, gameItem, i, points, isStarted) {
    const answerAID = document.querySelector("#answerA");
    const answerBID = document.querySelector("#answerB");
    const answerCID = document.querySelector("#answerC");
    const answerDID = document.querySelector("#answerD");

    let isAnswerClicked = false;

    function ieRender() {
        if(i >= gameItem.length) RenderFinishMenuGame(gameItem, gameFrame, points);
        else gameBuild(gameFrame, gameItem, i, points, isStarted);
    }

    answerAID.addEventListener("click", () => {
        if(isAnswerClicked == false) {
            isAnswerClicked = true;

            if(gameItem[i].correctAnswer === gameItem[i].answerA) {
                answerAID.style = "background-color: #6FC276;";
                points += gameItem[i].punkty;
                newPointsGenerate(points);
            } else answerAID.style = "background-color: #D1495B;";

            i++;
        }

        setTimeout(() => {
            ieRender();
        }, 1000);
    });

    answerBID.addEventListener("click", () => {
        if(isAnswerClicked == false) {
            isAnswerClicked = true;

            if(gameItem[i].correctAnswer === gameItem[i].answerB) {
                answerBID.style = "background-color: #6FC276;";
                points += gameItem[i].punkty;
                newPointsGenerate(points);
            } else answerBID.style = "background-color: #D1495B;";
            
            i++;
        }

        setTimeout(() => {
            ieRender();
        }, 1000);
    });

    answerCID.addEventListener("click", () => {
        if(isAnswerClicked == false) {
            isAnswerClicked = true;

            if(gameItem[i].correctAnswer === gameItem[i].answerC) {
                answerCID.style = "background-color: #6FC276;";
                points += gameItem[i].punkty;
                newPointsGenerate(points);
            } else answerCID.style = "background-color: #D1495B;";
            
            i++;
        }

        setTimeout(() => {
            ieRender();
        }, 1000);
    });

    answerDID.addEventListener("click", () => {
        if(isAnswerClicked == false) {
            isAnswerClicked = true;

            if(gameItem[i].correctAnswer === gameItem[i].answerD) {
                answerDID.style = "background-color: #6FC276;";
                points += gameItem[i].punkty;
                newPointsGenerate(points);
            } else answerDID.style = "background-color: #D1495B;";
            
            i++;
        }

        setTimeout(() => {
            ieRender();
        }, 1000);
    });
}

// Set scrolling to hidden
function setScrollnStop() {
    document.getElementById("blockOnGame").scrollIntoView();
    document.body.style.overflow = 'hidden';
}
function setScrolling() {
    document.getElementById("blockOnGame").scrollIntoView();
    document.body.style.overflow = '';
}

// Render game menu
function RenderMenuGame(gameFrame) {
    const gameBody = document.querySelector(".game-panel");
    gameBody.innerHTML = ``;
    gameBody.appendChild(gameFrame);


    gameFrame.className = "game-panel-menu";
    gameFrame.innerHTML = `
    <button class="play h3">Zacznij grę!</button>
    `
    gameBody.appendChild(gameFrame);
}

// Render game
function RenderGameBody(gameFrame, gameItem, i, points) {
    const gameBody = document.querySelector(".game-panel");

    gameFrame.className = "game-panel-board";
    gameFrame.innerHTML = `
    <div class="game-info">
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

// Points refresh
function newPointsGenerate(points) {
    const gamePoints = document.querySelector(".game-info");

    gamePoints.innerHTML = `
    <p class="points h5">Punkty: ${points}</p>
    `
}

function RenderFinishMenuGame(gameItem, gameFrame, points) {
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

    setScrolling();

    const restart = document.getElementById("btn-restart");
    restart.addEventListener("click", () => {
        restartGame();
    });
}

function restartGame() {
    renderGame(quizBase)
}