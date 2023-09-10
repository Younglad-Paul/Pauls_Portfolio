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

const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")
const img5 = document.querySelector(".img5")
const img6 = document.querySelector(".img6")
const img7 = document.querySelector(".img7")
const img8 = document.querySelector(".img")
const img9 = document.querySelector(".img9")

function snippet1(){
    detail1.classList.add("snippet")
    img1.classList.add("bluring")


}
function noSnippet1(){
    detail1.classList.remove("snippet")
    img1.classList.remove("bluring")
}
function snippet2(){
    detail2.classList.add("snippet")
    img2.classList.add("bluring")
}
function noSnippet2(){
    detail2.classList.remove("snippet")
    img2.classList.remove("bluring")
}
function snippet3(){
    detail3.classList.add("snippet")
    img3.classList.add("bluring")
}
function noSnippet3(){
    detail3.classList.remove("snippet")
    img3.classList.remove("bluring")
}
function snippet4(){
    detail4.classList.add("snippet")
    img4.classList.add("bluring")
}
function noSnippet4(){
    detail4.classList.remove("snippet")
    img4.classList.remove("bluring")
}
function snippet5(){
    detail5.classList.add("snippet")
    img5.classList.add("bluring")
}
function noSnippet5(){
    detail5.classList.remove("snippet")
    img5.classList.remove("bluring")
}
function snippet6(){
    detail6.classList.add("snippet")
    img6.classList.add("bluring")
}
function noSnippet6(){
    detail6.classList.remove("snippet")
    img6.classList.remove("bluring")
}
function snippet7(){
    detail7.classList.add("snippet")
    img7.classList.add("bluring")
}
function noSnippet7(){
    detail7.classList.remove("snippet")
    img7.classList.remove("bluring")
}
function snippet8(){
    detail8.classList.add("snippet")
    img8.classList.add("bluring")
}
function noSnippet8(){
    detail8.classList.remove("snippet")
    img8.classList.remove("bluring")
}
function snippet9(){
    detail9.classList.add("snippet")
    img9.classList.add("bluring")
}
function noSnippet9(){
    detail9.classList.remove("snippet")
    img9.classList.remove("bluring")
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
