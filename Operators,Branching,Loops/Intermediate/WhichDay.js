const pOutput = document.querySelector("#display");
const btnSubmit = document.querySelector("#submit");
const inputEle = document.querySelector("#input-Ele");



btnSubmit.addEventListener("click",()=>{
    let day = inputEle.value;
    let res, color;
    if(day === "0") {
        color = "red";
        res = "Please select a valid day."
    }
    else{
        if(day === "Saturday" || day === "Sunday"){
            color = "green";
            res =`${day} is weekend`;
        }
        else {
            color = "blue";
            res =`${day} is weekday`;
        }
    } 
    pOutput.style.color = color;
    pOutput.innerText =  res;   
 } );

