// window.alert("Hello flipper");

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("flipper-btn");
const colorLabel = document.querySelector("#color");

console.log(colorLabel);
btn.addEventListener('click',function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    colorLabel.textContent = colors[randomNumber];
});


// function to generate a random number

function getRandomNumber(){
    // Math.random returns value between 0 and 1 
    // random multiplied by 4 gives results btwn 0 and 3.sth but not upto 4
    // Math.floor rounds down to nearest integer 
    return Math.floor(Math.random() * colors.length);
}

/*
How to get a random number in jS
Attaching an event using an event listener and anonymous function 


*/