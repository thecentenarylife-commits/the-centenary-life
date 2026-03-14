function calculateScore(){

let sleep = document.getElementById("sleep").value;
let steps = document.getElementById("steps").value;
let exercise = document.getElementById("exercise").value;

let score = 50;

if(sleep >= 7){
score += 15;
}

if(steps >= 8000){
score += 20;
}

if(exercise >= 30){
score += 15;
}

document.getElementById("result").innerHTML =
"Your Centenary Score is: " + score;

}
