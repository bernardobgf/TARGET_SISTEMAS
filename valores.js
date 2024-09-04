const fs = require('fs');


function processarFaturamento() {
    
    const data = fs.readFileSync('dados.json', 'utf8');
    const faturamento = JSON.parse(data);

    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    
    faturamento.forEach(registro => {
        if (registro.valor > 0) {
            if (registro.valor < menorValor) menorValor = registro.valor;
            if (registro.valor > maiorValor) maiorValor = registro.valor;
            somaFaturamento += registro.valor;
            diasComFaturamento++;
        }
    });

    
    const mediaMensal = somaFaturamento / diasComFaturamento;

    
    let diasAcimaMedia = 0;
    faturamento.forEach(registro => {
        if (registro.valor > mediaMensal) diasAcimaMedia++;
    });

    
    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaMedia}`);
}


processarFaturamento();
