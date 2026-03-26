// main.js

console.log("Hello, World!");
let rotation = 0;
document.addEventListener("click", funtion() {
    let min = 10;
    let max = 40;
    rotation += Math.floor(Math.random() * (max - min + 1)) + min;
    document.body.style.transform = 'rotate(${rotation}deg)';
});

/*function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

let divs = document.querySelectorAll(".grid-container div");
function randomize() {
    divs.forEach(function(div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);
        div.computedStyleMap.transform = 
        scale(${scale})
        translate(${translateX}%, ${translateY}%)
        rotate(${rotate}deg)';'
    })
    console.log(divs.length, "randomize!");
}

//randomize(); 
document.addEventlistener("click", randomize);*/