const pOutput = document.querySelector("#display");
const btnPrime = document.querySelector("#prime");
const inputEle = document.querySelector("#input-Ele");



btnPrime.addEventListener("click",()=>{
    let num = inputEle.value;
    let res = "";
    let digit;
    if(num === "") pOutput.innerText = "You have not entered a number";
    else if(num < 0) pOutput.innerText = "Please enter positive number";
    else{
        num = Number(num);
    if(num === 0 || num === 1){ res = "neither prime nor composite"; digit = num;}
    else if(num === 2 || num === 3){ res = "prime";}
    else{
        for (let index = 2; index <= num/2; index++) {
              if(num % index === 0){
                  res = "composite";
                    digit = index;
                  break;
              } else res = "prime";
        }
    }
    if(res === "prime") digit = num;
    pOutput.innerText = `The number ${num} is ${res}. Least divisor: ${digit}`;
    }
} );

