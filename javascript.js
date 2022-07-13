

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
  if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="rock")
  return("egalitate");

if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="paper")
  return("Ai pierdut!");

if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="scissors")
  return("Ai castigat!");


if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="rock")
  return("Ai castigat!");    

if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="paper")
  return("egalitate");

if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="scissors")
  return("Ai pierdut");


if(playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()=="rock")
  return("Ai pierdut");

if(playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()=="paper")
  return("Ai castigat");
if(playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()=="scissors")
  return("egalitate");
    }
  let yourScore=0;
  let computersScore=0;
 function game(){

  for(let i=1;i<=5;i++)
 { 
  let playerSelection = prompt("Please enter your choice (rock,paper,scissors)");
  let hisSelection=ComputerPlay(3);
    if(hisSelection==0)
  computerSelection="rock";
    if(hisSelection==1)
  computerSelection="paper";
    if(hisSelection==2)
  computerSelection="scissors";
  

      if(playerSelection.toLowerCase()=="rock" && computerSelection=="paper")
    computersScore++;
  

      if(playerSelection.toLowerCase()=="rock" && computerSelection=="scissors")
  yourScore++;

 

      if(playerSelection.toLowerCase()=="paper" && computerSelection=="rock")
    yourScore++;

      if(playerSelection.toLowerCase()=="paper" && computerSelection=="scissors")
   computersScore++;

 

      if(playerSelection.toLowerCase()=="scissors" && computerSelection=="rock")
    computersScore++;
  
  
      if(playerSelection.toLowerCase()=="scissors" && computerSelection=="paper")
  yourScore++;

        alert(playRound(playerSelection,computerSelection) );
 }
 }
 game();
  alert("Scorul tau este: " + yourScore); alert("Scorul calculatorului este " + computersScore);