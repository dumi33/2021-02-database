const Title = document.querySelector(".js-title");
const Range = document.getElementById("js-range");
const My = document.getElementById("Num");
const Guess = document.getElementById("js-guess");
const Result = document.getElementById("js-result");

function Random(min, max){
    var RandVal = Math.floor(Math.random()*(max-min+1)) + min;
    return RandVal;
}
const handle = (e) => {
    e.preventDefault();
    
    const my = My.value;
    const val = Range.value;
    const x= Random(0,val);
    var message;
    
    if(x> my){
        message = "You lose!";
    }
    else if(x == my){
        message = "drawn!"
    }
    else message = "You win!";
    
    const diplay = Result.querySelector("span");
    diplay.innerHTML = `
    You choose: ${my}, the machine choose: ${x}.<br>
    ${message} 
    `;
};
const change = (e) => {
    e.preventDefault();
    const max_num = Title.querySelector("span");
    max_num.innerHTML = Range.value;
};
Guess.addEventListener("submit", handle);
Range.addEventListener("input",change);