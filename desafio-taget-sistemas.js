//Desafio 1
const indice = 13;
let soma = 0;
let k = 0;

while(k < indice) {
  k = k +1;
  soma = soma + k;
}

console.log(soma);

//Desafio 2
function isFibonacci(number) {
    if (number < 0) return `${number} não pertence à sequência de Fibonacci.`; 

    let fibonacciSequence = [0, 1];
    let nextValue = 0;

    while (nextValue < number) {
        nextValue = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
        fibonacciSequence.push(nextValue);
    }

    if (fibonacciSequence.includes(number)) {
        return `${number} pertence à sequência de Fibonacci. Sequência: ${fibonacciSequence.join(', ')}`;
    } else {
        return `${number} não pertence à sequência de Fibonacci. Sequência: ${fibonacciSequence.join(', ')}`;
    }
}

//Desafio 3
const invoicing = 
[
    { "day": 1, "value": 221.34 },
    { "day": 2, "value": 190.12 },
    { "day": 3, "value": 0.0 },
    { "day": 4, "value": 0.0 },
    { "day": 5, "value": 450.25 },
    { "day": 6, "value": 300.12 },
    { "day": 7, "value": 0.0 },
    { "day": 8, "value": 210.55 },
    { "day": 9, "value": 120.14 },
    { "day": 10, "value": 0.0 },
    { "day": 11, "value": 145.23 },
    { "day": 12, "value": 198.64 },
    { "day": 13, "value": 0.0 },
    { "day": 14, "value": 0.0 },
    { "day": 15, "value": 390.85 },
    { "day": 16, "value": 420.95 },
    { "day": 17, "value": 221.34 },
    { "day": 18, "value": 190.12 },
    { "day": 19, "value": 0.0 },
    { "day": 20, "value": 0.0 },
    { "day": 21, "value": 450.25 },
    { "day": 22, "value": 300.12 },
    { "day": 23, "value": 0.0 },
    { "day": 24, "value": 210.55 },
    { "day": 25, "value": 120.14 },
    { "day": 26, "value": 0.0 },
    { "day": 27, "value": 145.23 },
    { "day": 28, "value": 198.64 },
    { "day": 29, "value": 0.0 },
    { "day": 30, "value": 0.0 },
    { "day": 31, "value": 390.85 },
];

function calculateInvoincing(invoicing) {
    const daysWithInvoincing = invoicing.filter(d => d.value > 0);

    if(daysWithInvoincing.length === 0) {
        return "Não há dados de faturamento para calcular."
    }

    const lowestValue = Math.min(...daysWithInvoincing.map(d => d.value));
    const highestValue = Math.max(...daysWithInvoincing.map(d => d.value));

    const sumValues = daysWithInvoincing.reduce((sum, d) => sum + d.value, 0);
    const monthMedia = sumValues / daysWithInvoincing.length;

    const daysAboveAverage = daysWithInvoincing.filter(d => d.value > monthMedia).length;

    return {
        lowestValue: lowestValue,
        highestValue: highestValue,
        monthMedia: monthMedia.toFixed(2),
        daysAboveAverage: daysAboveAverage
    };
}

const result = calculateInvoincing(invoicing);

console.log("Menor valor de faturamento:", result.lowestValue);
console.log("Maior valor de faturamento:", result.highestValue);
console.log("Média mensal de faturamento:", result.monthMedia);
console.log("Dias com faturamento acima da média:", result.daysAboveAverage);

//Desafio 4
const invoicingPerState = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    others: 19849.53
};

function calculatePercentual(invoicing) {

    if(invoicing.length === 0) {
        return "Não há dados de faturamento para calcular."
    }
    const total = Object.values(invoicing).reduce((sum, value) => sum + value, 0);
    const percentuals = {};

    for(const state in invoicing) {
        percentuals[state] = `${((invoicing[state] / total) * 100).toFixed(2)}%`
    }

    return {
        total: total.toFixed(2), percentuals
    };
}

const percentResult = calculatePercentual(invoicingPerState);

console.log("Faturamento Total: R$", percentResult.total);
console.log("Percentual por estado:");
for (const state in percentResult.percentuals) {
    console.log(`${state}: ${percentResult.percentuals[state]}`);
}

//Desafio 5
function revertString(string) {
    let reverseString = "";

    for(let i = string.lenght; i >= 0; i--) {
        reverseString += string[i];
    }

    return reverseString;
}

const exampleString = "Target Sistemas";
const reverseStringResult = revertString(exampleString);

console.log("String original:", exampleString);
console.log("String invertida:", reverseStringResult);