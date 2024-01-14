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
}
window.addEventListener("load", renderFlashcardItem(flashcards));


function RenderFlashcardHeader(newFlashCardItem, items, i) {
    const flashcardItem = document.querySelector(".fc-ctn");

    newFlashCardItem.className = "flashcard-section"; 
    newFlashCardItem.innerHTML;
    newFlashCardItem.innerHTML = `
        <header>
            <p class="fc-concept h1">${items[i].concept}</p>
        </header>
        `;
    flashcardItem.appendChild(newFlashCardItem);
}
function RenderFlashcardSection(newFlashCardItem, items, i) {
    const flashcardItem = document.querySelector(".fc-ctn");

    newFlashCardItem.className = "flashcard-section"; 
    newFlashCardItem.innerHTML = `
        <header>
            <p class="fc-concept h1">${items[i].concept}</p>
        </header>
        <div class="fc-line"></div>
        <div class="fc-text">
            <div class="fc-definition">
                <p class="h2">Co to jest?</p>
                <p class="h5">${items[i].definition}</p>
            </div>
            <div class="fc-note">
                <p class="h2">Jak się chronić?</p>
                <p class="h5">${items[i].note}</p>
            </div>
        
        </div>
        `
    flashcardItem.appendChild(newFlashCardItem);
}
