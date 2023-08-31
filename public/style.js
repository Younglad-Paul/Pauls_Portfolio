function DownloadCV() {
    const cvLink = document.createElement('a');
    cvLink.href = "images/BORISADE DAYO PAUL CV 1.pdf";
    cvLink.download = "BORISADE_DAYO_PAUL_CV.pdf";
    cvLink.click();
}

// const work = document.querySelector(".work")
// const detail = document.querySelector(".details")
const detail1 = document.querySelector(".one")
const detail2 = document.querySelector(".two")
const detail3 = document.querySelector(".three")
const detail4 = document.querySelector(".four")
const detail5 = document.querySelector(".five")
const detail6 = document.querySelector(".six")

function snippet1(){
    detail1.classList.add("snippet")
}
function noSnippet1(){
    detail1.classList.remove("snippet")
}
function snippet2(){
    detail2.classList.add("snippet")
}
function noSnippet2(){
    detail2.classList.remove("snippet")
}
function snippet3(){
    detail3.classList.add("snippet")
}
function noSnippet3(){
    detail3.classList.remove("snippet")
}
function snippet4(){
    detail4.classList.add("snippet")
}
function noSnippet4(){
    detail4.classList.remove("snippet")
}
function snippet5(){
    detail5.classList.add("snippet")
}
function noSnippet5(){
    detail5.classList.remove("snippet")
}
function snippet6(){
    detail6.classList.add("snippet")
}
function noSnippet6(){
    detail6.classList.remove("snippet")
}