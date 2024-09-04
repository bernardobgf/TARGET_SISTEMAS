const readline = require('readline');


function pertenceFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1;

    if (num === a || num === b) return true;

    while (b <= num) {
        let temp = a;
        a = b;
        b = temp + b;

        if (b === num) return true;
    }

    return false;
}

function verificarNumero(num) {
    if (pertenceFibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
    const numeroInformado = parseInt(input, 10);
    
    if (isNaN(numeroInformado)) {
        console.log('Por favor, insira um número válido.');
    } else {
        verificarNumero(numeroInformado);
    }


    rl.close();
});