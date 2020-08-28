let Userscore = 0
let Computerscore = 0
const userscore_span = document.getElementById("userscore")
const computer_span = document.getElementById("computerscore")
const scoreboard_div = document.getElementById("Score")
const result_div = document.getElementById("finish")
const rock_btn = document.getElementById("r")
const paper_btn = document.getElementById("p")
const scissors_btn = document.getElementById("s")
const ROCK = 1
const PAPER = 2
const SCISSORS = 3

rock_btn.addEventListener('click',function(){
    play(ROCK)
})

paper_btn.addEventListener('click',function(){
    play(PAPER)
})

scissors_btn.addEventListener('click',function(){
    play(SCISSORS)
})
function computerplay (){
    return Math.floor(Math.random() * 3) + 1  
}
    
function play(userInput){
    const computerInput = computerplay()

    if(computerInput === SCISSORS && userInput === SCISSORS){

        result_div.textContent = "Scissors draws with Scissors"
    }
    
    else if(computerInput === PAPER && userInput === PAPER){
        result_div.textContent = "Paper draws with Paper"
    } 

    else if(computerInput === ROCK && userInput === ROCK){
        result_div.textContent = "Rock draws with Rock"
        
    }

    

    else if(computerInput === ROCK && userInput === PAPER){
        result_div.textContent = "Paper wins vs Rock"
        userscore_span.textContent++
    }

    else if(computerInput === PAPER && userInput === SCISSORS){
        result_div.textContent = "Scissors wins vs Paper"
        userscore_span.textContent++
    }
    else if(computerInput === SCISSORS && userInput === ROCK){  
        result_div.textContent = "Rock wins vs Scissors"
        userscore_span.textContent++

    
    }
    else if(computerInput ===  PAPER&& userInput === ROCK){
        result_div.textContent = "Rock loses vs Paper"
        computer_span.textContent++
    }
    else if(computerInput === SCISSORS && userInput === PAPER){
        result_div.textContent = "Paper loses vs Scissors"
        computer_span.textContent++
    }
    else if(computerInput === ROCK && userInput === SCISSORS){
        result_div.textContent = "Scissors loses vs Rock"
        computer_span.textContent++
    }

    
    

}
  
    







