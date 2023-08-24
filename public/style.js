function DownloadCV() {
    // document.location = "img/BORISADE DAYO PAUL CV 1 (1).pdf";
    var cv = document.createElement('a');
    cv.href = "images/BORISADE+DAYO+PAUL+CV+1+(1).pdf";
    cv.download = "img/BORISADE+DAYO+PAUL+CV+1+(1).pdf";
    cv.dispatchEvent( new MouseEvent('click'))
}

// const nav = document.querySelector("nav")

// window.addEventListener("scroll", () => {
//         if (scrollY > 50) {
//             nav.style.background = '#016306';
//         }
//         else if (scrollY < 8000) {
//             Tmenu.style.background = '#12be1b';
//         }
//     }
// )