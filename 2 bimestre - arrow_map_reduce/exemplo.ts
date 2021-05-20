//chamada nome e os parametros
console.log(dobro(4));
console.log(dobro(8));

let mensagem = function mensagem0(nome: string) {
    return `Olá ${nome}`;
}

//ARROW FUNCTION , funçao anonima
let mensagem1 = (nome: string) => {
    return `Olá ${nome}`;
}

console.log(mensagem('Beto'));
console.log(mensagem1('Beto'));

//função padrao
function dobro(n: number) {
    return n * 2;
}

let dobroArrow = (n: number) => {
    return n * 2;
}
//mesma funcao short sintax
let dobroArrow2 = (n: number) => n * 2;

console.log(dobroArrow(10));
console.log(dobroArrow(30));

let numerosPares = [2, 4, 6, 8];
//calcular o dorbro do array
let resultado0 = [];
for (let i: number = 0; i < numerosPares.length; i++) {
    resultado0.push(dobroArrow(numerosPares[i]));
}
console.log(resultado0);
//map - arrays - estrutura de repetição
//percorrer algo.
let resultado = numerosPares.map(dobroArrow);
console.log(resultado);

let alunos3SIF = [
    { ra: 1, nome: 'aluno 1', idade: 36 },
    { ra: 2, nome: 'aluno 2', idade: 40 },
    { ra: 3, nome: 'aluno 3', idade: 18 },
    { ra: 4, nome: 'aluno 4', idade: 23 },
]
let resultado00 = [];
for (let i: number = 0; i < alunos3SIF.length; i++) {
    if (alunos3SIF[i].idade < 30) {
        resultado00.push(alunos3SIF[i]);
    }
}
console.log(resultado00);
//quero buscar os alunos com menos de 30 anos.
//predicado expressao lambda
let filtroIdade = aluno => aluno.idade < 30;
let resultadoAlunosAbaixo30Anos = alunos3SIF.filter(filtroIdade);
console.log(resultadoAlunosAbaixo30Anos);