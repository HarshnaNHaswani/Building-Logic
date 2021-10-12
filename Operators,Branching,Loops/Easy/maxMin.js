const pOutput = document.querySelector("#display");
const btnMaxMin = document.querySelector("#maxMin");
const inputEle = document.querySelectorAll(".input-Ele");



btnMaxMin.addEventListener("click",()=>{
    let  num1= inputEle[0].value, num2 = inputEle[1].value;
    if (num1.toString() === ""){
        num1 = 129;
    }
    if(num2.toString() === ""){
        num2 = 251;
    }
    let max, min;
    if(num1 === num2){
        return pOutput.innerText = `Max = Min = ${num1}`;
    }else if(num1 > num2){
        max = num1;
        min = num2;
    }else if(num2 > num1){
        max = num2;
        min = num1;
    }
   return pOutput.innerText = `Max: ${max} | Min: ${min}`;
} );