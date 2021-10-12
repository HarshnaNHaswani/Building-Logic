const pOutput = document.querySelector("#display");
const btnPrime = document.querySelector("#oddEven");
const inputEle = document.querySelector("#input-Ele");



btnPrime.addEventListener("click",()=>{
    let num = inputEle.value;
    let res;
    
    if(num === "") pOutput.innerText = "You have not entered a number";
    else{
        num = Number(num);
        if(num === 0)res="neither odd nor even";
        else if(num % 2 !== 0) res = "odd";
        else res = "even"
    pOutput.innerText = `The number ${num} is ${res}.`;
    }
} );