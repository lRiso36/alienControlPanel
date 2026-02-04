//get elements

//flat buttons
const ejectBtn = document.getElementById("ejectBtn");
const levelBtn = document.getElementById("levelBtn");
const callBtn = document.getElementById("callBtn");
const routeBtn = document.getElementById("routeBtn");
const pinBtn = document.getElementById("pinBtn");
const enterBtn = document.getElementById("enterBtn");
const keypadNums = document.querySelectorAll(".keypad .keyNum");
//audios
const ejectSound = document.getElementById("ejectSound");
const ringing = document.getElementById("ringing");

//screens
const leftScreen = document.getElementById("leftScreen");
const rightScreen = document.getElementById("rightScreen");

//DEBUG
// console.log("ejectBtn =", ejectBtn);
// console.log("levelBtn =", levelBtn);
// console.log("callBtn =", callBtn);
// console.log("routeBtn =", routeBtn);
// console.log("pinBtn =", pinBtn);

// console.log("leftScreen =", leftScreen);
// console.log("rightScreen =", rightScreen);

// console.log("enterBtn =", enterBtn);
// console.log("keypadNums =", keypadNums);




//we want eject button to eject after clicked once and stop after twice
ejectBtn.addEventListener("click", function() {
    const isEjecting = leftScreen.classList.toggle("ejecting");
    if(isEjecting){
        ejectSound.currentTime = 0;
        ejectSound.play();
    } else {
        ejectSound.pause();
        ejectSound.currentTime = 0;
    }
})

