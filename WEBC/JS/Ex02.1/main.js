// Criar uma função que verifique os números pares

function numeroPar(){
    //Variáveis 
    let inicio = document.getElementById("rangeInicio").value
    let fim = document.getElementById("rangeFim").value

    let numerosPares = " ";
    //For(inicialização; comparação; incremento)
    for(var i = inicio; i < fim; i++){

        if(i % 2 === 0){
            numerosPares += i + " ";
        }
    }

   
    document.getElementById("textoNumerosPares").innerText = "Numeros pares são: " + numerosPares;
}