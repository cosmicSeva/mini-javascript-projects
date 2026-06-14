let userScore = 0;
let compScore = 0;
let userChoice = null;
let compChoice = null;
let gameMode = false;

let showUserScore = document.querySelector("#userScore");
let showCompScore = document.querySelector("#compScore");

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let msg = document.querySelector("#message");
let reset = document.querySelector("#reset");
let mode = document.querySelector("#mode");
let bestOf3 = document.querySelector("#bestOf3");

//random choice of computer
function compTurn(){
    const options = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random() * options.length);
    compChoice = options[randomIndex];
    console.log(compChoice);
}

rock.addEventListener("click", () => {
    userChoice = "rock";
    console.log("rock choosen");
    compTurn();
    checkWinner();
})

paper.addEventListener("click", () => {
    userChoice = "paper";
    console.log("paper choosen");
    compTurn();
    checkWinner();
})

scissor.addEventListener("click", () => {
    userChoice = "scissor";
    console.log("scissor choosen");
    compTurn();
    checkWinner();
})


function checkWinner() {
    if((userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock")  ||
        (userChoice === "scissor" && compChoice === "paper")
    ){
        userScore ++;
        showUserScore.innerText = userScore;
        msg.innerText = "Congrats! You won the game.";
        msg.style.backgroundColor = "green";

    }

    if((compChoice === "rock" && userChoice === "scissor") ||
        (compChoice === "paper" && userChoice === "rock")  ||
        (compChoice === "scissor" && userChoice === "paper")
    ){
        compScore ++;
        showCompScore.innerText = compScore;
        msg.innerText = "Oops! You loose the game.";
        msg.style.backgroundColor = "red";
    }

    if((userChoice === "rock" && compChoice === "rock") ||
        (userChoice === "paper" && compChoice === "paper") ||
        (userChoice === "scissor" && compChoice === "scissor")
    ){
        msg.innerText = "Game is draw :)";
        msg.style.backgroundColor = "black";
    }
    
// For best of 3 mode special settings
    if(gameMode){
    bestOf3.disabled = true;
    if( userScore === 2){
        msg.innerText = "you won the Best of 3. Reset to play again";
        msg.style.backgroundColor = "green";
        gameMode = false;


        //enabeling best of 3 button
        bestOf3.disabled = false;


         //to enable rock paper scissor after best of 3
        rock.style.pointerEvents = "none";
        rock.style.opacity =0.5;
        paper.style.pointerEvents = "none";
        paper.style.opacity =0.5;
        scissor.style.pointerEvents = "none";
        scissor.style.opacity =0.5;

        // changing mode text
        mode.innerText ="Mode: Default"

        // reset();
    } 
    if(compScore === 2){
        msg.innerText = "game over !! computer won. Reset to play again";
        msg.style.backgroundcolor = "black";
        gameMode = false;


        //enable best of 3 button
        bestOf3.disabled = false ;


        //to enable rock paper scissor after best of 3
        rock.style.pointerEvents = "none";
        rock.style.opacity = "0.5";
        paper.style.pointerEvents = "none";
        paper.style.opacity = "0.5";
        scissor.style.pointerEvents = "none";
        scissor.style.opacity = "0.5";

        //changing mode text
        mode.innerText = "Mode: Default"
        // reset();

    }
}
}


// function reset(){
//      msg.innerText = "Pick your move";
//     msg.style.backgroundColor = "black";
//     userScore = 0;
//     compScore = 0;
//     showUserScore.innerText = 0;
//     showCompScore.innerText = 0;
// }

reset.addEventListener("click",()=>{
    msg.innerText = "Pick your move";
    msg.style.backgroundColor = "black";
    userScore = 0;
    compScore = 0;
    showUserScore.innerText = 0;
    showCompScore.innerText = 0;
    //to again enable rock paper scissor after reset
    rock.style.pointerEvents = "auto";
    rock.style.opacity = "1";
    paper.style.pointerEvents = "auto";
    paper.style.opacity = "1";
    scissor.style.pointerEvents = "auto";
    scissor.style.opacity = "1";
})

bestOf3.addEventListener("click",()=>{
    gameMode = true;
    mode.innerText = "Mode: Best of 3";
    msg.innerText = "Best of 3: first to 3 wins";
    msg.style.backgroundColor = "black" ;

    userScore = 0;
    compScore = 0;

    showUserScore.innerText = 0;
    showCompScore.innerText = 0;
    rock.style.pointerEvents = "auto";
    rock.style.opacity = "1";
    paper.style.pointerEvents = "auto";
    paper.style.opacity = "1";
    scissor.style.pointerEvents = "auto";
    scissor.style.opacity = "1";

})




