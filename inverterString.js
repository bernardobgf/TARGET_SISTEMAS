const readline = require('readline');


function inverterString(str) {
    let resultado = '';

    
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    return resultado;
}


function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    
    rl.question('Digite a string que deseja inverter: ', (input) => {
        
        const stringInvertida = inverterString(input);

        
        console.log(`String original: ${input}`);
        console.log(`String invertida: ${stringInvertida}`);

        
        rl.close();
    });
}


main();

