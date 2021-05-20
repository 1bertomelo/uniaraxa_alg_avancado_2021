//chamada nome e os parametros
console.log(dobro(4));
console.log(dobro(8));
var mensagem = function mensagem0(nome) {
    return "Ol\u00E1 " + nome;
};
//ARROW FUNCTION , funçao anonima
var mensagem1 = function (nome) {
    return "Ol\u00E1 " + nome;
};
console.log(mensagem('Beto'));
console.log(mensagem1('Beto'));
//função padrao
function dobro(n) {
    return n * 2;
}
var dobroArrow = function (n) {
    return n * 2;
};
//mesma funcao short sintax
var dobroArrow2 = function (n) { return n * 2; };
console.log(dobroArrow(10));
console.log(dobroArrow(30));
var numerosPares = [2, 4, 6, 8];
//calcular o dorbro do array
var resultado0 = [];
for (var i = 0; i < numerosPares.length; i++) {
    resultado0.push(dobroArrow(numerosPares[i]));
}
console.log(resultado0);
//map - arrays - estrutura de repetição
//percorrer algo.
var resultado = numerosPares.map(dobroArrow);
console.log(resultado);
