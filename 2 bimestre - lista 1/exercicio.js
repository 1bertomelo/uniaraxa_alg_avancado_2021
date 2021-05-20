var inputPeso = document.getElementById('txtPeso');
var inputAltura = document.getElementById('txtAltura');
var inputImc = document.getElementById('txtImc');
var buttonCalcImc = document.getElementById('btnCalcImc');
buttonCalcImc.addEventListener('click', function () {
    var resultadoImc = calcularImc(Number(inputPeso.value), Number(inputAltura.value));
    console.log(resultadoImc);
    inputImc.value = resultadoImc.toFixed(2).toString();
});
//sintaxe de criar uma função
//function nomedaFuncao (parametros de entrada)
//parametros de entrada:
//nome do parametro1: tipo dele
//nome do parametro2: tipo dele
//...
//funcao sem parametro nomeDela()
function calcularImc(peso, altura) {
    return peso / (Math.pow(altura, 2));
}
//conversao de tipo de dado
// Number -> String : Exemplo peso.toString();
// String -> Number : Exemplo  let x : string = "10"   Number(x);
var inputNome = document.getElementById('txtNome');
var inputQtdeVogais = document.getElementById('txtQtdVogais');
var buttonContarVogais = document.getElementById('btnContarVogais');
buttonContarVogais.addEventListener('click', function () {
    var resultadoVogais = contarVogais(inputNome.value);
    inputQtdeVogais.value = resultadoVogais.toString();
});
function contarVogais(nome) {
    var qtdVogais = 0;
    var vogais = 'aeiou';
    for (var i = 0; i < nome.length; i++) {
        /* if(nome[i] === 'a' ||
            nome[i] === 'e' ||
            nome[i] === 'i' ||
            nome[i] === 'o' ||
            nome[i] === 'u'
         ){
             qtdVogais++;
         }*/
        //outro jeito de fazer
        if (vogais.indexOf(nome[i]) !== -1) {
            qtdVogais++;
        }
    }
    return qtdVogais;
}
inputPeso.addEventListener('keydown', function (e) {
    var key = e.key;
    console.log(e.key);
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-';
});
