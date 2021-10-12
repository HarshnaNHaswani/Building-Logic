let btnStar = document.querySelector("#star");
const ulList = document.querySelector("#list");

btnStar.addEventListener("click",()=>{
    sessionStorage.clear();

    for (let i = 0; i < 5; i++) {
        let row = ''
        for (let j = 0; j <= i; j++) {
            row += '* '
        } 
        let li = document.createElement("li");
        li.append(document.createTextNode(row));
        ulList.appendChild(li);
    }
    } );