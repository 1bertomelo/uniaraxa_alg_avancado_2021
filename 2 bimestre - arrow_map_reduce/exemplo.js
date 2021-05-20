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
var alunos3SIF = [
    { ra: 1, nome: 'aluno 1', idade: 36 },
    { ra: 2, nome: 'aluno 2', idade: 40 },
    { ra: 3, nome: 'aluno 3', idade: 18 },
    { ra: 4, nome: 'aluno 4', idade: 23 },
];
var resultado00 = [];
for (var i = 0; i < alunos3SIF.length; i++) {
    if (alunos3SIF[i].idade < 30) {
        resultado00.push(alunos3SIF[i]);
    }
}
console.log(resultado00);
//quero buscar os alunos com menos de 30 anos.
//predicado expressao lambda
var filtroIdade = function (aluno) { return aluno.idade < 30; };
var resultadoAlunosAbaixo30Anos = alunos3SIF.filter(filtroIdade);
console.log(resultadoAlunosAbaixo30Anos);
