const faturamentoPorEstado = {
    Sp: 67836.43,
    Rj: 36678.66,
    Mg: 29229.88,
    Es: 27165.48,
    Outros: 19849.53
};


function calcularPercentuais(faturamento) {
    
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    console.log('Percentual de representação por estado:');

    for (const [estado, valor] of Object.entries(faturamento)) {
        const percentual = (valor / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}

calcularPercentuais(faturamentoPorEstado);
