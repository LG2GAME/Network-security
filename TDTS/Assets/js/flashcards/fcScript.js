{/* <header>
     <p class="fc-concept h1">Lorem ipsum dolor sit amet.</p>
</header>
<div class="fc-line"></div>
<div>
    <p class="fc-definition h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi voluptatem quia neque unde magnam dolores tempore, quod sequi earum.</p>
    <p class="fc-note h5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium minus eveniet incidunt tenetur nam provident eaque consectetur minima harum praesentium sequi debitis at accusamus animi blanditiis porro, quis fugiat voluptatem. Animi ipsa illum vitae culpa optio omnis aperiam cumque officia?</p>
</div> */}

const renderflashCardItem = () => {
    const flashCardItem = document.querySelector(".fc-ctn");

    const newFlashCardItem = document.createElement("div");
    newFlashCardItem.className = "flashcard-section"; 
    newFlashCardItem.innerHTML = `
        <header>
            <p class="fc-concept h1">Lorem ipsum dolor sit amet.</p>
        </header>
        <div class="fc-line"></div>
        <div>
            <p class="fc-definition h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi voluptatem quia neque unde magnam dolores tempore, quod sequi earum.</p>
            <p class="fc-note h5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium minus eveniet incidunt tenetur nam provident eaque consectetur minima harum praesentium sequi debitis at accusamus animi blanditiis porro, quis fugiat voluptatem. Animi ipsa illum vitae culpa optio omnis aperiam cumque officia?</p>
        </div>
    `
    flashCardItem.appendChild(newFlashCardItem);
}

window.addEventListener("load", renderflashCardItem());