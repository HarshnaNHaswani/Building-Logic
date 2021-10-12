const inputEle = document.querySelector("#input-Ele");
const date = new Date();
const currentYear = date.getFullYear();

const pOutput = document.querySelector("#display");
const btn31Days = document.querySelector("#submit");

inputEle.min ="01-01-"+ currentYear;
inputEle.max ="31-12-"+ currentYear; 

btn31Days.addEventListener("click", ()=>{

    let yearMonth = inputEle.value.split('-');
    let month = Number(yearMonth[1]);

    if(month === 1 ||month === 3 ||month === 5 ||month === 7 ||month === 8 ||month === 10 ||month === 12){
        pOutput.style.color = "green";
        pOutput.innerText = "The month has 31 days";
    }else{
        pOutput.style.color = "red";
        pOutput.innerText = "The month does not have 31 days";
    }
})