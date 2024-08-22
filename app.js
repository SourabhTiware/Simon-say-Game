let gameSeq = [];
let userSeq = [];  
let h3 = document.querySelector("h3"); 

let btns = ["yellow", "red", "purple", "green"];

let started = false; 

let level = 0; 
// let count = 0; 
// let temp = count; 

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
    
})

function gameFlash(btn){
    btn.classList.add("flash"); 

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userFlash(btn){
    btn.classList.add("userFlash"); 

    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

// function highest(){
//     if(temp < count){
//         let h2 = document.querySelector("h2"); 
//         h2.innerText = `Congrulation Player You break last record. And Your score is ${level}`; 
//         reset(); 
//        }

// }

function levelUp(){
    userSeq = []; 
    level++;
    // count++;
    // console.log(`count is = ${count}`);
    

    // console.log(temp); 
    // console.log(count);
    if(level<=10){
        h3.innerText = `level ${level}`;

   let randIdx = Math.floor(Math.random() * 3); 
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);

   gameSeq.push(randColor);
   console.log(gameSeq);

   gameFlash(randBtn);
    }
    else {
        h3.innerHTML = `Congrulation player You achive highest score in the game. Start again the game`;

        // highest();
        reset();
    }
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerHTML = `Game is over! Your score was <b>${level}. Press any key to start`; 
        document.querySelector("body").style.backgroundColor = "red"; 
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";   
        },1000);


        // setTimeout(reset,2000); 

        reset();
    }

}


function btnPress(){

    let btn = this; 

    userFlash(btn); 

    userColor = btn.getAttribute("id"); 

    // console.log(userColor);

    userSeq.push(userColor);

    console.log(userSeq);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn")

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false; 
    gameSeq = []; 
    userSeq = [];
    level = 0; 
}