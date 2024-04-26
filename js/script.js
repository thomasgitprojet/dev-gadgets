const btnPrev = document.querySelector(".js-btn-prev");
console.log(btnPrev);

const btnNext = document.querySelector(".js-btn-next");
console.log(btnNext);

const showImg = document.querySelector(".js-show-img");

document.querySelectorAll(".js-img");
console.log(document.querySelectorAll(".js-img"));

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

function selectedImgAtOver (src) {  
    console.log(src.replace("-s.png", "-l.png"));
    showImg.src = src.replace("-s.png", "-l.png")
}

const smallsImgs = document.querySelectorAll(".js-img");
console.log(smallsImgs);

for (const img of smallsImgs) {
    console.log(img);
    img.addEventListener("mouseover", function (event) {
        let srcImg = img.src
        selectedImgAtOver(srcImg)
    })
}

