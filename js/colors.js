const figure = document.getElementById("figure");


const colors = ["blue", "red", "purple", "green", "grey"];


function paintMe() {
    let rnd = Math.floor((Math.random() *  colors.length-1) + 1);
    figure.style.background = colors[rnd];
}