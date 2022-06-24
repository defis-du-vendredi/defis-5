let onOff = document.querySelector(".onoff");
let ecran = document.querySelector(".ecran_contour");
let bonhomme = document.querySelector(".bonhomme img");
let nav = document.querySelector(".fa-solid");
let ville = document.querySelector(".ecran");

onOff.addEventListener("click", function (e) {
  let onOff = document.querySelector(".onoff");
  onOff.style.marginLeft = "30px";
  console.log(onOff);

  let ecran = document.querySelector(".ecran");
  ecran.style.backgroundImage = "url(ville.png)";
  ecran.style.backgroundSize = "auto";
  ecran.style.backgroundPosition = "center";

  let bonhomme = document.querySelector(".bonhomme img");
  bonhomme.style.visibility = "visible";

  let powerBtn = document.querySelector(".pwr");
  powerBtn.style.backgroundColor = "red";
});

// nav.addEventListener("click", function (e) {
//   let nav = document.querySelector(".fa-solid");
//   bonhomme.classList.add("");
//   ville.classList.add("");
//   console.log(nav);
// });
