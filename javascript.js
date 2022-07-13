let playerSelection = prompt("Please enter your choice (rock,paper,scissors)");

function ComputerPlay(max) {
  return Math.floor(Math.random() * max);
}
let hisSelection=ComputerPlay(3);
if(hisSelection==0)
  computerSelection="rock";
if(hisSelection==1)
  computerSelection="paper";
if(hisSelection==2)
  computerSelection="scissors";

  
        function playRound(playerSelection, computerSelection) {
  if(playerSelection=="rock" && computerSelection=="rock")
  return("egalitate");

if(playerSelection=="rock" && computerSelection=="paper")
  return("Ai pierdut!");

if(playerSelection=="rock" && computerSelection=="scissors")
  return("Ai castigat!");


if(playerSelection=="paper" && computerSelection=="rock")
  return("Ai castigat!");    

if(playerSelection=="paper" && computerSelection=="paper")
  return("egalitate");

if(playerSelection=="paper" && computerSelection=="scissors")
  return("Ai pierdut");


if(playerSelection=="scissors" && computerSelection=="rock")
  return("Ai pierdut");

if(playerSelection=="scissors" && computerSelection=="paper")
  return("Ai castigat");
if(playerSelection=="scissors" && computerSelection=="scissors")
  return("egalitate");
    }

console.log(playRound(playerSelection,computerSelection))
  