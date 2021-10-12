const ulList = document.querySelector("#list");
const btnFibonacci = document.querySelector("#fibonacci");
const inputEle = document.querySelector("#input-Ele");

btnFibonacci.addEventListener("click",()=>{
    let num1 = 0,num2 =1, res = 0;
    let max = inputEle.value;
    while(res <= max){
            let li = document.createElement("li");
            li.append(document.createTextNode(res));
            ulList.appendChild(li);

            num1 = num2;
            num2 = res;
            res = num1 + num2;
        }
    } )

