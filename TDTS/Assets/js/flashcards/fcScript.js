const renderFlashcardItem = (items) => {
    let i = 0;
    let isReverse = false;
    
    const newFlashCardItem = document.createElement("div");

    RenderFlashcardHeader(newFlashCardItem, items, i);

    document.getElementById("btn-reverse").onclick = () => {
        if(isReverse === true) {
            RenderFlashcardHeader(newFlashCardItem, items, i)
            isReverse = false;
        } else if(isReverse === false) {
            RenderFlashcardSection(newFlashCardItem, items, i);
            isReverse = true;
        }
    };
    document.getElementById("btn-prv").onclick = () => {
        if(i === 0) {
            i = items.length - 1;
        } else {
            i--;
        }

        if(isReverse === true) {
            RenderFlashcardSection(newFlashCardItem, items, i);
        } else if(isReverse === false) {
            RenderFlashcardHeader(newFlashCardItem, items, i)
        }
    };
    document.getElementById("btn-nxt").onclick = () => {
        if(i === items.length - 1) {
            i = 0;
        } else {
            i++;
        }
        
        if(isReverse === true) {
            RenderFlashcardSection(newFlashCardItem, items, i);
        } else if(isReverse === false) {
            RenderFlashcardHeader(newFlashCardItem, items, i)
        }
    };

    const password = document.getElementById("pwdInput");
    const pwdButton = document.getElementById("checkButton");
    document.querySelector(".errorInput").style = "padding: 0";
    password.addEventListener("keypress", (event) => {
        if(event.key === "Enter") {
            validatePassword(password);
        }
    })
    pwdButton.addEventListener("click", (event) => {
        validatePassword(password);
    })
}
window.addEventListener("load", renderFlashcardItem(flashcards));


function RenderFlashcardHeader(newFlashCardItem, items, i) {
    const flashcardItem = document.querySelector(".fc-ctn");

    newFlashCardItem.className = "flashcard-section"; 
    newFlashCardItem.innerHTML;

    if(i === 0) {
        newFlashCardItem.innerHTML = `
        <header>
            <div class="fc-concept">
                <p class="h1">${items[i].concept}</p>
                <div class="passwd-div">
                    <p class="errorInput h4"></p>
                    <input class="passwd-input" id="pwdInput" type="text" placeholder="Podaj hasło..."></input>
                    <button id="checkButton">Sprawdź</button>
                </div>
            </div>
        </header>
        `;
    } else {
        newFlashCardItem.innerHTML = `
        <header>
            <p class="fc-concept h1">${items[i].concept}</p>
        </header>
        `;
    }

    flashcardItem.appendChild(newFlashCardItem);
}
function RenderFlashcardSection(newFlashCardItem, items, i) {
    const flashcardItem = document.querySelector(".fc-ctn");

    newFlashCardItem.className = "flashcard-section"; 
    newFlashCardItem.innerHTML = `
        <header class="fc-header-rotate">
            <p class="fc-concept h1">${items[i].concept}</p>
        </header>
        <div class="fc-text">
            <div class="fc-definition">
                <p class="fc-title h4">${items[i].defName}</p>
                <p class="fc-t h6">${items[i].def}</p>
            </div>
            <div class="fc-note">
                <p class="fc-title h4">${items[i].protName}</p>
                <p class="fc-t h6">${items[i].prot}</p>
            </div>
        
        </div>
        `
    flashcardItem.appendChild(newFlashCardItem);

    document.querySelector(".fc-concept").style = "align-items: center; display: flex; justify-content: center; position: static; transform: translate(0, 0);"
}

function validatePassword(password) {
    password = password.value;
    const passWDError = document.querySelector(".errorInput");

    let lettersValidation = /^(?=.*[a-z])(?=.*[A-Z])/;
    let numbValidation = /^(?=.*\d)/;
    let specialCharValidation = /^(?=.*[!@#$%^&*()_+{}:<>?`~])/;

    if (password === "") {
        passWDError.style = "padding: 1rem .5rem;";
        passWDError.innerHTML = "Najpierw wpisz hasło";
    } else {
        passWDError.style = "padding: 1rem .5rem;";

        if(password.length < 8) passWDError.innerHTML = "Twoje hasło powinno mieć więcej niż 8 znaków.";
        else if(!lettersValidation.test(password)) passWDError.innerHTML = "Twoje hasło powinno zawierać co najmniej 1 małą i 1 dużą literę.";
        else if(!numbValidation.test(password)) passWDError.innerHTML = "Twoje hasło powinno mieć minimum 1 cyfrę.";
        else if(!specialCharValidation.test(password)) passWDError.innerHTML = "Twoje hasło powinno mieć co najmniej 1 znak specjalny.";
        else {
            passWDError.style = "color: #0F9957 !important; text-shadow: 0px 4px 6px #063b21; padding: .5rem;";
            passWDError.innerHTML = "Twoje hasło spełnia wszystkie warunki!";
        }
    }
}
