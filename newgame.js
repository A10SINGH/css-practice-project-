let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("begun");
        started = true;
    }
 
    levelUp();

})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 250);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerHTML = `level up ${level} <br> <b>score from last game = <b> ${highScore}`;
    
    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIdx];
    let randbtn = document.querySelector(`.${ranColor}`);
    // console.log(ranIdx);
    // console.log(ranColor);
    // console.log(randbtn);
    gameSeq.push(ranColor);
    //console.log(gameSeq);
    gameFlash(randbtn);
   
}

function checkAns(idx) {
   // console.log("current level =", level);
   //let idx = level - 1 ;
   if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
        setTimeout(levelUp, 1000);
   }
   
   } else {
    highScore = level;
    h2.innerHTML = `game over , your score was <b>${level}</b> <br> press any key again <br> total score till now = ${highScore}` ;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout (
        function() {
            document.querySelector("body").style.backgroundColor = "white";

        } , 150 );
    reset();    
   }
}

function btnPress() {
    console.log(this); 
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    //console.log(userSeq);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}









