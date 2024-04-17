


let slides = document.querySelectorAll(".slides");
let counter = 0;
let id;
let btn= document.getElementById("stopSlide")

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

function goPrev() {
    if (counter > 0) {
        counter--;
        slideImage();
    }
}

function goNext() {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    }
}

function slideImage() {
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

function startSlide(){
    id = setInterval(goNext,1000)
    console.log("working")

}

function stopAutoSlide(){
    id = clearInterval(id)
    clearInterval(id)
    console.log(id,"stop function")
}


btn.addEventListener("click",function(){
    console.log(id)
    if(id){
                stopAutoSlide()
                console.log("stop")
            }else{
                startSlide()
                console.log("start")
            }
})
