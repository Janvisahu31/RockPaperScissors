let userscore=0;
let compscore=0;
const userscore_span=document.getElementById("userscore");
const compscore_span=document.getElementById("compscore");
const scoreboard_div=document.querySelector(".Scoreboard");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];

}
function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors";
}
function win(userChoice,computerchoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML=compscore;
    result_p.innerHTML=convertToWord(userChoice) +"(u) beats "+convertToWord(computerchoice)+"(c).You Win!!!";


}
function lose(userChoice,computerchoice){
    compscore++;
    compscore_span.innerHTML = compscore;
    userscore_span.innerHTML=userscore;
    result_p.innerHTML=convertToWord(computerchoice) +"(c) beats "+convertToWord(userChoice)+"(u).You lose!!!";
    
}
function draw(userChoice,computerchoice){
   
    compscore_span.innerHTML = compscore;
    userscore_span.innerHTML=userscore;
    result_p.innerHTML=convertToWord(computerchoice) +"(c) is same as "+convertToWord(userChoice)+"(u).Its draw!!!";
    
}
function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;

    }


}
function main(){
    rock_div.addEventListener('click',function(){
        game('r');
    })
    paper_div.addEventListener('click',function(){
        game('p');
    })
    scissors_div.addEventListener('click',function(){
        game('s');
    })
}
main();
