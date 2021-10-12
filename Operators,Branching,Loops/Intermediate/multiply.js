const ulList = document.querySelector("#list");
const output = document.querySelector("#display");
const btnMultiply = document.querySelector("#multiply");
const inputEle = document.querySelector("#input-Ele");

btnMultiply.addEventListener("click",()=>{
    
    let num = inputEle.value;

    if(num === ""){output.innerText = "Please reload page and enter a valid number";}

    else{   
        num = Number(num);
        for (let i = 1; i <= 12; i++) {
        res = `${i} * ${num} =  ${i*num}`;

        let li = document.createElement("li");
        li.append(document.createTextNode(res));
        ulList.appendChild(li);
    }}
    } )

