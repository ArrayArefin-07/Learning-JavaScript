// 2D Array Creation 
// Create a function called highestRunScorer 
// Recive a 2D array called playerInfo 
// Based on highest score, return the name of the player 


function highestRunScorer(playersInfo){
    // console.log(playersInfo);
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for(var x=1; x<playersInfo.length; x++){
        if(highestScore < playersInfo[x][1]){
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
return highestScore;
}

var playersInfo = [
    ["Ashraful", 95],
    ["Mizan",25],
    ["Rakib",45],
    ["Arefin", 105],
];

var names = highestRunScorer(playersInfo);
console.log(names);