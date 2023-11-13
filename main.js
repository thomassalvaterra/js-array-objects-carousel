//Percorsi delle immagini che voglio inserire
const cardImages = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(cardImages);

//Inserisco le immagini nel DOM
// let immaginiDaInserire = "";
// for (let i = 0; i < cardImages.length; i++) {
//     const percorsoImmagine = cardImages[i].image;
//     immaginiDaInserire += `<img src="${percorsoImmagine}">`;
// }
// document.getElementById("carousel-wrapper").innerHTML = immaginiDaInserire;

// let titoloDaInserire= "";
// for (let i = 0; i < cardImages.length; i++) {
//     const percorsoTitolo = cardImages[i].title;
//     titoloDaInserire += `<div class="${percorsoTitolo}">`;
// }
// document.getElementById("carousel-wrapper").innerHTML = titoloDaInserire;

//Imposto la prima immagine come attiva
let currentImg = 0;
const images = document.querySelectorAll("#carousel-wrapper img");
images[currentImg].classList.add("active");


//Gestisco i pulsanti
document.getElementById("nextBtn").addEventListener("click", function () {
    console.log("avanti");
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("active");
        currentImg++;
        images[currentImg].classList.add("active");
    }
});

document.getElementById("prevBtn").addEventListener("click", function () {
    console.log("indietro");
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        currentImg--;
        images[currentImg].classList.add("active");
    }
});
