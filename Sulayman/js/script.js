let ScreenOn = document.querySelector(".ecran .bonhomme");
let Screen1 = document.querySelector("body > section > div.ecran_contour > div.ecran > div");
ScreenOn.addEventListener('click', function (e) {
    Screen1.classList.add("OnScreen");
    console.log(ScreenOn);
});