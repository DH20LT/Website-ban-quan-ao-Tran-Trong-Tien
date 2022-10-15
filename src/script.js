const imgPostion = document.querySelectorAll(".Slider_img img")
const imgContainer = document.querySelector('.Slider_img')

let index = 0
let imgNumber = imgPostion.length
imgPostion.forEach(function(image,index){
image.style.left = index*100 + "%"
})
function imgSlide(){
index++;
if (index>=imgNumber) {index = 0}
    {imgContainer.style.left=   "-" +index*100+ "%"}
}
setInterval(imgSlide,5000)

// sticky header 
const header = document.querySelectorAll("header")
window.addEventListener("scroll",function(){
    x = window.pageYOffset
    console.log(x)
    if(x > 0){
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky")
    }
})