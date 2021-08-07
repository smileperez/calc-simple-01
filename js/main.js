function main() {
    let sum = window.sum.value;
    let percent = window.percent.value;
    let term = window.term.value;

    let result = calculate(sum, percent, term);

    console.log(result.income, result.resultSum);

    window.resultSum.value = result.resultSum;
    window.income.value = result.income;
}

function calculate(sum, percent, term) {
    let income;
    let resultSum;
    let daysInYear = 365;

    income = sum * percent * term / daysInYear / 100;
    resultSum = Number(sum) + income;

    return { resultSum:resultSum.toFixed(2), income:income.toFixed(2) };
}