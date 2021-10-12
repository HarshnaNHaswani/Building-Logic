const ulList = document.querySelector("#list");
const btnFizz = document.querySelector("#fizzClick");

btnFizz.addEventListener("click",()=>{
    sessionStorage.clear();
    
    let arr = [];
    for(let num = 1; num <= 100; num++){
        if(num % 3 === 0 && num % 5 === 0){
        arr.push("FizzBuzz");
        }else if(num % 3 === 0){
        arr.push("Fizz");
        }else if(num % 5 === 0){
        arr.push("Buzz");
        }else{
            arr.push(num)
        }
    }
    arr.forEach(element => {
        let li = document.createElement("li");
        li.append(document.createTextNode(element));
        ulList.appendChild(li);
    });
} );


