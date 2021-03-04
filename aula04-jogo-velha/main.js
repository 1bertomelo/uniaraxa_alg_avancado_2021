var arrayImagens = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
var tabuleiro2x6 = [[4, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
//0 zero significa que eu ainda nao coloquei carta no tabuleiro.
var arrayImagens = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
var tabuleiro2x6 = [[4, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
//0 zero significa que eu ainda nao coloquei carta no tabuleiro.


function sortearCartas() {
    let valorSorteado = 0;
    let posicaoSorteado = 0;
    let linha = 0;
    let coluna = 0;
    //enquanto eu tenho cartas, faz sorteio
    while (arrayImagens.length > 0) {
        posicaoSorteado = Math.floor(Math.random() * arrayImagens.length);                
        //gera numeros inteiro entre 0 e 11. 
        //gera numeros inteiro entre 0 e 10.
        //gera numeros inteiro entre 0 e 9
        valorSorteado = arrayImagens[posicaoSorteado];
        //ex. 7 me da quem ta na posicao 7 = valor 4
        tabuleiro2x6[linha][coluna] = valorSorteado;
        linha++; coluna++;
        arrayImagens.splice(posicaoSorteado);
    }