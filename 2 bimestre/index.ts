let inputValor1 = document.getElementById('txtNumero') as HTMLInputElement;
let botao = document.getElementById('btnDobro');

//declaracao da tipagem
//variavel : tipo dela 
function dobro(x: number) {
    return x * 2;
}

botao.addEventListener('click', function () {
    //nome variavel e o tipo
    let resposta: number = dobro(Number(inputValor1.value));
    console.log(resposta);
});

