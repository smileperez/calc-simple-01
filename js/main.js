let = firstSum;
let = interestRate;
let = creditTerm;

document.getElementById("button").onclick = getData(firstSum, interestRate, creditTerm);

function getData (a, b, c) {
    a = document.getElementById("firstSum").value;
    b = document.getElementById("interestRate").value;
    c = document.getElementById("creditTerm").value;

    console.log(a, b, c);
    return(a,b,c);
}

console.log(firstSum, interestRate, creditTerm);