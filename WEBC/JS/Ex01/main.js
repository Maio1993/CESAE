// Criar uma função para calcular

function calcularSoma(){

    let valorA = parseInt(document.getElementById("inputValorA").value)   
    let valorB = parseInt(document.getElementById("inputValorB").value)
    let resultadoSoma = valorA + valorB;

    document.getElementById("textoResultado").innerText = "Resultado é: " + resultadoSoma;
}

function calcularSubtracao(){
    let valorA = parseInt(document.getElementById("inputValorA").value)    
    let valorB = parseInt(document.getElementById("inputValorB").value)
    let resultadoSoma = valorA - valorB;

    document.getElementById("textoResultado").innerText = "Resultado é: " + resultadoSoma;
}
function calcularDivisao(){
    let valorA = parseFloat(document.getElementById("inputValorA").value)    
    let valorB = parseFloat(document.getElementById("inputValorB").value)
    let resultadoSoma = valorA / valorB;

    document.getElementById("textoResultado").innerText = "Resultado é: " + resultadoSoma;
}

function calcularMulti(){
    let valorA = parseFloat(document.getElementById("inputValorA").value)    
    let valorB = parseFloat(document.getElementById("inputValorB").value)
    let resultadoSoma = valorA * valorB;

    document.getElementById("textoResultado").innerText = "Resultado é: " + resultadoSoma;
}

//Função que vai comparar o tipo de dados que recebe para poder calcular

function compararOpe(){
    //guardar o dado numa variável
    let tipoOpe = document.getElementById("tipoOperation").value
    //Comparação
    
    if(tipoOpe === "+" ){
        calcularSoma();
    }
    else if(tipoOpe === "-"){
        calcularSubtracao();
    }
    else if(tipoOpe === "/"){
        calcularDivisao();
    }
    else{
        calcularMulti();
    }

}