const btnAdd = document.querySelector("#add")
const input = document.querySelector("#input-Ele")
const output = document.querySelector("#display")

function findSum(numArr){
    if (numArr.toString() === "") numArr = ['5', '13', '7', '21', '48']
    let sum = 0;
    numArr.forEach(element => {
        sum = sum + Number(element);
    });
    return {sum:sum, arr: numArr};
}




btnAdd.addEventListener("click", ()=>{  
    let inputArr = input.value.replace(/\s/g, "").split(",");
    let res = findSum(inputArr) ;  
    output.innerText = `sum of ${res.arr} = ${res.sum}`
});