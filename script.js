// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

//*****************************CORRECTION*****************************//
let playOne = true;

window.addEventListener("scroll", () => {
  //Navbar effect
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // Image
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }
  //Popup
  if (scrollValue > 0.85 && playOne) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOne = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 1;
  popup.style.transform = "translateX(700px)";
});

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 20) {
//     navbar.style.height = "50px";
//   } else {
//     navbar.style.height = "90px";
//   }

//   lastScroll = window.scrollY;

//   if (window.scrollY > 150) {
//     imgImprovise.style.opacity = 1;
//     imgImprovise.style.transform = "translateX(-20px)";
//   } else {
//     imgImprovise.style.top = 1;
//   }

//   if (window.scrollY > 1000) {
//     popup.style.opacity = 1;
//     popup.style.transform = "translateX(0px)";
//   } else {
//     popup.style.top = 1;
//   }
// });

// window.addEventListener("click", () => {
//   let popup = document.getElementById("popup");
//   popup.remove();
// });
