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
