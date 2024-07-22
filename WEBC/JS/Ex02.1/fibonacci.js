function fibonacci() {
    //Variáveis 
    let inicio = document.getElementById("rangeInicio").value
    let fim = document.getElementById("rangeFim").value
    let output = [];
    //For(inicialização; comparação; incremento)
    if (inicio === 1) {
        output.push(0);
    }
    else if (inicio === 2) {
        output.push(0, 1);
    }

    else {
        output.push(0, 1);
        for (var i = 2; i <= fim; i++) {
            var outputPsn = output[i - 1];
            var outputPsn2 = output[i - 2];
            output.push(outputPsn + outputPsn2);
        }
    }
    document.getElementById("textoNumerosPares").innerText = "Fibonacci: " + output;
}

