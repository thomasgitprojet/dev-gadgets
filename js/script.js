const btnPrev = document.querySelector(".js-btn-prev");

const btnNext = document.querySelector(".js-btn-next");

const showImg = document.querySelector(".js-show-img");

document.querySelectorAll(".js-img");

btnPrev.addEventListener("click", function () {

    showImg.classList.toggle("prev")

    if (showImg.getAttribute("src") === "img/canard-jaune-1-l.png" && showImg.classList.contains("prev")) {
        showImg.setAttribute("src", "img/canard-jaune-5-l.png")
        showImg.classList.toggle("prev")
    }
    console.log(showImg);

    if (showImg.getAttribute("src") === "img/canard-jaune-5-l.png" && showImg.classList.contains("prev")) {
        showImg.setAttribute("src", "img/canard-jaune-4-l.png")
        showImg.classList.toggle("prev")
    }
    console.log(showImg);

    if (showImg.getAttribute("src") === "img/canard-jaune-4-l.png" && showImg.classList.contains("prev")) {
        showImg.setAttribute("src", "img/canard-jaune-3-l.png")
        showImg.classList.toggle("prev")
    }

    if (showImg.getAttribute("src") === "img/canard-jaune-3-l.png" && showImg.classList.contains("prev")) {
        showImg.setAttribute("src", "img/canard-jaune-2-l.png")
        showImg.classList.toggle("prev")
    }

    if (showImg.getAttribute("src") === "img/canard-jaune-2-l.png" && showImg.classList.contains("prev")) {
        showImg.setAttribute("src", "img/canard-jaune-1-l.png")
        showImg.classList.toggle("prev")
    }

})

btnNext.addEventListener("click", function () {
    showImg.classList.toggle("next")

    if (showImg.getAttribute("src") === "img/canard-jaune-1-l.png" && showImg.classList.contains("next")) {
        showImg.setAttribute("src", "img/canard-jaune-2-l.png")
        showImg.classList.toggle("next")
    }
    console.log(showImg);

    if (showImg.getAttribute("src") === "img/canard-jaune-2-l.png" && showImg.classList.contains("next")) {
        showImg.setAttribute("src", "img/canard-jaune-3-l.png")
        showImg.classList.toggle("next")
    }
    console.log(showImg);

    if (showImg.getAttribute("src") === "img/canard-jaune-3-l.png" && showImg.classList.contains("next")) {
        showImg.setAttribute("src", "img/canard-jaune-4-l.png")
        showImg.classList.toggle("next")
    }

    if (showImg.getAttribute("src") === "img/canard-jaune-4-l.png" && showImg.classList.contains("next")) {
        showImg.setAttribute("src", "img/canard-jaune-5-l.png")
        showImg.classList.toggle("next")
    }

    if (showImg.getAttribute("src") === "img/canard-jaune-5-l.png" && showImg.classList.contains("next")) {
        showImg.setAttribute("src", "img/canard-jaune-1-l.png")
        showImg.classList.toggle("next")
    }
})

/**
 * remove the attribut src for the image display
 * @param {string} src attribute of image
 */
function selectedImgAtOver (src) {  
    showImg.src = src.replace("-s.png", "-l.png")
}

const smallsImgs = document.querySelectorAll(".js-img");

for (const img of smallsImgs) {
    img.addEventListener("mouseover", function (event) {
        let srcImg = img.src
        selectedImgAtOver(srcImg)
    })
}

const input = document.querySelector(".js-input");
let valueInput = document.querySelector(".js-input").value;
let valueCart = document.querySelector(".js-cart-nb");

const btnAddArticle = document.querySelector(".js-btn-add");

input.addEventListener("change", function (event) {
    valueInput = event.target.value
})

btnAddArticle.addEventListener("click", function(event) {
    valueCart.textContent = valueInput 
    console.log(valueCart.textContent);
    btnAddArticle.textContent = "Déjà au panier"
    btnAddArticle.setAttribute("disabled", "true");
    if (valueCart.textContent > 99) {
        valueCart.textContent = "+99";
    }
})

