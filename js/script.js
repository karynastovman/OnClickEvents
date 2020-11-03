const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg","img/4.jpg"];
const imageChange = document.getElementById("image");

function changeImage(){
    console.log("button clicked!");
    let rnd = Math.floor((Math.random() * images.length-1) + 1);
    console.log(rnd);
    imageChange.src = images[rnd];
    
}