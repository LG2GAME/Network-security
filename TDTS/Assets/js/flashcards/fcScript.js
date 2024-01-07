const renderFlashcardItem = (items) => {
    let i = 0;
    let didReverse = false;
    
    const newFlashCardItem = document.createElement("div");

    RenderFlashcardHeader(newFlashCardItem, items, i);

    document.getElementById("btn-reverse").onclick = () => {
        if(didReverse === true) {
            RenderFlashcardHeader(newFlashCardItem, items, i)
            didReverse = false;
        } else if(didReverse === false) {
            RenderFlashcardSection(newFlashCardItem, items, i);
            didReverse = true;
        }
    };
    document.getElementById("btn-prv").onclick = () => {
        if(i === 0) {
            i = items.length - 1;
        } else {
            i--;
        }

        if(didReverse === true) {
            RenderFlashcardSection(newFlashCardItem, items, i);
        } else if(didReverse === false) {
            RenderFlashcardHeader(newFlashCardItem, items, i)
        }
    };
    document.getElementById("btn-nxt").onclick = () => {
        if(i === items.length - 1) {
            i = 0;
        } else {
            i++;
        }
        
        if(didReverse === true) {
            RenderFlashcardSection(newFlashCardItem, items, i);
        } else if(didReverse === false) {
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
            <p class="fc-definition h5">${items[i].definition}</p>
            <div class="fc-text-line"></div>
            <p class="fc-note h5">${items[i].note}</p>
        </div>
        `
    flashcardItem.appendChild(newFlashCardItem);
}
