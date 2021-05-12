var inputValor1 = document.getElementById('txtNumero');
var inputResposta = document.getElementById('txtDobro');
var botao = document.getElementById('btnDobro');
//declaracao da tipagem
//variavel : tipo dela  
//number tipo de dado que aceita numeros inteiros,decimais, hexadecimal,..
function dobro(x) {
    return x * 2;
}
botao.addEventListener('click', function () {
    //nome variavel e o tipo
    //conversao mudar o tipo de algo para outro tipo
    // value do input por padrao String -> Number
    // Number(string) => resultado é Number
    // conversao de Number -> String 
    // tostring()
    var resposta = dobro(Number(inputValor1.value));
    inputResposta.value = resposta.toString();
    var nome = 'H1';
    var idade = 36;
    if (idade >= 18) {
        var temCarteiraHabilitacao = void 0;
        temCarteiraHabilitacao = true;
        idade++;
    }
    console.log(idade);
    //console.log(temCarteiraHabilitacao);
    //A linha anterior apresenta erro pois a variavel temCarteiraHabilitacao
    //tem escopo local dentro do IF.
    //var escopo global -> enxergada por tada a aplicação
    //ele 'eleva toda declaraca pro inicio
    //let é de escopo 'fechado' -> variavel so existe onde ele é declara.
    //so existe apartir da declarcao
});
