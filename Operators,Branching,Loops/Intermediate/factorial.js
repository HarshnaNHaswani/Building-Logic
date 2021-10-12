const pOutput = document.querySelector("#display");
const btnFactorial = document.querySelector("#factorial");
const inputEle = document.querySelector("#input-Ele");

function fact (num) {
    if(num === 0) return 1;
    else return num * fact(num-1);     
}

btnFactorial.addEventListener("click",()=>{
    let num = inputEle.value;
    if(num === "" || num < 0)pOutput.innerText = "Please enter a valid number";
    else{let factorial = fact(num);
    pOutput.innerText = `The factorial of ${num} is ${factorial}`
 }} );

