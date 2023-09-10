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
const detail7 = document.querySelector(".seven")
const detail8 = document.querySelector(".eight")
const detail9 = document.querySelector(".nine")
const workheight = document.querySelector(".workz")
const moreWork1 = document.querySelector(".moreM1")
const moreWork2 = document.querySelector(".moreM2")
const moreWork3 = document.querySelector(".moreM3")
moreWork1.style.display = "none"
moreWork2.style.display = "none"
moreWork3.style.display = "none"
workheight.style.height = "45rem"

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
function snippet7(){
    detail7.classList.add("snippet")
}
function noSnippet7(){
    detail7.classList.remove("snippet")
}
function snippet8(){
    detail8.classList.add("snippet")
}
function noSnippet8(){
    detail8.classList.remove("snippet")
}
function snippet9(){
    detail9.classList.add("snippet")
}
function noSnippet9(){
    detail9.classList.remove("snippet")
}
function showMorL(){
    const MorL = document.querySelector("#showMore")
    if(moreWork1.style.display == "none"){
        moreWork1.style.display = "block"
        moreWork2.style.display = "block"
        moreWork3.style.display = "block"
        workheight.style.height = "fit-content"
        MorL.innerHTML = "Show Less"
    }else{
        moreWork1.style.display = "none"
        moreWork2.style.display = "none"
        moreWork3.style.display = "none"
        workheight.style.height = "45rem"
        MorL.innerHTML = "Show More"
    }
}

function focusing(){

const slide1 = document.querySelector("#slide1")
const disp1 = document.querySelector("#disp1")
const slide2 = document.querySelector("#slide2")
const disp2 = document.querySelector("#disp2")
const slide3 = document.querySelector("#slide3")
const disp3 = document.querySelector("#disp3")
const slide4 = document.querySelector("#slide4")
const disp4 = document.querySelector("#disp4")
const slide5 = document.querySelector("#slide5")
const disp5 = document.querySelector("#disp5")
const slide6 = document.querySelector("#slide6")
const disp6 = document.querySelector("#disp6")
const slide7 = document.querySelector("#slide7")
const disp7 = document.querySelector("#disp7")
const slide8 = document.querySelector("#slide8")
const disp8 = document.querySelector("#disp8")

setInterval(() => {
    disp1.innerHTML = slide1.value + "%"
    if(slide1.value < 52){
        slide1.value++    
    }
    disp2.innerHTML = slide2.value + "%"
    if(slide2.value < 77){
        slide2.value++    
    }
    disp3.innerHTML = slide3.value + "%"
    if(slide3.value < 81){
        slide3.value++    
    }
    disp4.innerHTML = slide4.value + "%"
    if(slide4.value < 90){
        slide4.value++    
    }
    disp5.innerHTML = slide5.value + "%"
    if(slide5.value < 64){
        slide5.value++    
    }
    disp6.innerHTML = slide6.value + "%"
    if(slide6.value < 49){
        slide6.value++    
    }
    disp7.innerHTML = slide7.value + "%"
    if(slide7.value < 84){
        slide7.value++    
    }
    disp8.innerHTML = slide8.value + "%"
    if(slide8.value < 97){
        slide8.value++    
    }

}, 35)

}
// function Unfocusing() {
//     const slide1 = document.querySelector("#slide1");
//     const disp1 = document.querySelector("#disp1");
//     if (slide1.value >= 52) {  // Changed the condition to >=
//         slide1.value = 0;
//     }
// }


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            focusing();
        }
        //  else {
        //     Unfocusing();
        // }
    });
});

const actionable = document.querySelectorAll("#capabilities");
actionable.forEach((el) => observer.observe(el));
