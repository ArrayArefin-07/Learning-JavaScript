// One Dimensional Array
// Creat a function Called highscore that Recive a 1D Array
// return the highest score


console.clear();
function highestScore(){
    // console.log(scores);
    let max = scores[0];
    for(var x=1; x<scores.length; x++){
        if(max<scores[x]){
            max = scores[x];
        }
    }
    return max;
}

let scores = [21, 2, 1, 88, 15];
var maxScore =  highestScore(scores);
console.log(maxScore);