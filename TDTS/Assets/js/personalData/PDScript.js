const renderPDItem = (item) => {
    console.log("dziala0");

    let i = 0;

    const newPDCardItem = document.createElement("div");
    
    document.getElementById("nd-prv-btn").addEventListener("click", () => {
        if(i === 0) i = item.length - 1; 
        else i--;
        generatePDItem(newPDCardItem, item, i);
    });
    document.getElementById("nd-nxt-btn").addEventListener("click", () => {
        if(i === item.length - 1) i = 0; 
        else i++;
        generatePDItem(newPDCardItem, item, i);
    });

    generatePDItem(newPDCardItem, item, i);
}
window.addEventListener("load", renderPDItem(pdbase));

function generatePDItem(newPDCardItem, item, i) {
    console.log("dziala2");

    const PDItem = document.querySelector(".left-section-nd");

    newPDCardItem.innerHTML = `
        <p class="nd-numb h2">#${item[i].number}</p>
        <h3>Przykłady danych osobowych: </h3>
        <div class="nd-card-info">
            <p class="nd-card-name h4">${item[i].name}</p>
            <p class="nd-card-list h6">${item[i].list}</p>
        </div>
        
    `;
    PDItem.appendChild(newPDCardItem);

    console.log("dziala3");
}