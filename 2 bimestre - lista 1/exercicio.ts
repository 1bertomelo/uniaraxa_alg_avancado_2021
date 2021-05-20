let inputPeso = document.getElementById('txtPeso') as HTMLInputElement;
let inputAltura = document.getElementById('txtAltura') as HTMLInputElement;
let inputImc = document.getElementById('txtImc') as HTMLInputElement;
let buttonCalcImc = document.getElementById('btnCalcImc') as HTMLButtonElement;

buttonCalcImc.addEventListener('click', () => {
    let resultadoImc: number = calcularImc(Number(inputPeso.value), Number(inputAltura.value));
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
function calcularImc(peso: number, altura: number) {
    return peso / (altura ** 2);
}

//conversao de tipo de dado
// Number -> String : Exemplo peso.toString();
// String -> Number : Exemplo  let x : string = "10"   Number(x);

let inputNome = document.getElementById('txtNome') as HTMLInputElement;
let inputQtdeVogais = document.getElementById('txtQtdVogais') as HTMLInputElement;
let buttonContarVogais = document.getElementById('btnContarVogais') as HTMLButtonElement;

buttonContarVogais.addEventListener('click', () => {
    let resultadoVogais: number = contarVogais(inputNome.value)
    inputQtdeVogais.value = resultadoVogais.toString();
});

function contarVogais(nome: string) {
    let qtdVogais: number = 0;
    const vogais: string = 'aeiou';
    for (let i = 0; i < nome.length; i++) {
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

