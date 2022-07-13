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
        if(playerSelection=="rock" && computerSelection=="paper")
        return ("PLAYER WON.ROCK BEATS PAPER");
        else return ("PLAYER LOST");
    }
    let playerSelection="rock";

//aaaaaaaaaa
  