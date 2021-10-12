const pOutput = document.querySelector("#display");
const btnMaxMin = document.querySelector("#maxMin");
const inputEle = document.querySelectorAll(".input-Ele");

btnMaxMin.addEventListener("click",()=>{
    let num = [inputEle[0].value, inputEle[1].value, inputEle[2].value];
    if (num[0].toString() === ""){
        num[0] = 8;
    }
    if(num[1].toString() === ""){
        num[1] = 23;
    }
    if(num[2].toString() === ""){
        num[2] = 17;
    }

    let max = num[0], min = num[0];
    for (let index = 0; index < num.length; index++) {
        if(num[index] > max) max = num[index]; 
        if(num[index] < max) min = num[index];    
    }
        pOutput.innerText = `Max: ${max} | Min: ${min}`;
} );