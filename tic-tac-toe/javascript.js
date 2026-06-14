//accessing all buttons using node list
// boxes is also an array or node list
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winner = document.querySelector("#winner");


//declaring a 2D array named winPatterns
let winPatterns = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]

]
//boolean variable
let turnX = true;



//reset function logic
const reset = () => {
    turnX = true;
    winner.innertext = "";
    winner.style.display = "none";
    boxes.forEach((box) => {
        console.log(box.innerText);
        box.innerText = "";
        box.disabled = false;
        console.log(box.innerText);
    })
}
//iterate through node list and add event listener to each box using forEach loop 
// syntax for forEach loop
// arrayName.forEach( function to be performed on each element of array )
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        //after each click disable the button and check for winner
        box.disabled = true;
        checkWinner();
    })

});




function checkWinner() {
    for (let pattern of winPatterns) {
        //pattern is a 1D array whereas winpattern is a 2D array
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]) ;

        console.log(pattern[0], pattern[1], pattern[2]);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        console.log(pos1, pos2, pos3);

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {

                winner.style.display = "block";
                let count = 3;
                //here timer is not the function so no need to call it . the function is setInterval 
                winner.innerText = `congrats ${pos1} wins. Reloading game in ${count} sec`;
                let timer = setInterval(() => {
    
                    winner.innerText = `congrats ${pos1} wins. Reloading game in ${count} sec`;
                    count--;

                    if(count < -1){
                        clearInterval(timer);
                        reset();
                    }
                },1000)
            
            }
        }
    }

}


resetBtn.addEventListener("click", reset);
