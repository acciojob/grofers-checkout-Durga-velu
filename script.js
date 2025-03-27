const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table=document.getElementById("table")
const getSum = () => {
//Add your code here

let getPrices=Array.from(document.querySelectorAll(".price"));
let total=0;
getPrices.forEach(price=>{

    total+=parseInt(price.innerText);
    
})

console.log(total);


let row=document.createElement("tr");
row.id="result";


let cell1=document.createElement("td")
cell1.innerText="Total Price";
cell1.className="item";

let cell2=document.createElement("td")
cell2.innerText=total;
cell2.className="price";
table.appendChild(row)
row.appendChild(cell1)
row.appendChild(cell2)

}



getSumBtn.addEventListener("click", getSum);

