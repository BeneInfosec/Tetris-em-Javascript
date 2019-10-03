const NLIN = 20;//Quantidade de linhas da matriL base
const NCOL = 10;//Quantidade de colunas da matriL base
const pixel = 20;//Tamanho dos blocos da matriL base //Podemos mudar para Square ou quadrado essa const ?

var canvas = document.getElementById('MatriL');//Pegar a matriL principal pelo ID
var blocos = canvas.getContext("2d");//Efeito 2d
var intervalo = setInterval(tickMovimentation, 500);
var linha_nova = 0;
var coluna_nova = 0;
var base = []; //Matriz de base

//Criando a Matriz base
for (linha = 0 ;linha < NLIN ; linha++){ //Gera linhas
    base[linha]= [];
    for(coluna = 0; coluna < NCOL ;coluna++){//Gera colunas
        base[linha][coluna] = 0;
    }
}

function criarBlocosMatriL(linha, coluna, cor) {
    blocos.fillStyle = "white" ;
    blocos.fillRect(linha*pixel, coluna*pixel, pixel, pixel);
    blocos.strokeStyle = 'black';
    blocos.strokeRect(linha*pixel, coluna*pixel, pixel, pixel);
}

function mostrarMatriL() {
    for (linha = 0 ;linha < NLIN ; linha++){
        for(coluna = 0; coluna < NCOL ;coluna++){
              criarBlocosMatriL(coluna, linha, base[coluna][linha]);
        }
    }
}   
mostrarMatriL();

//Declaração das pecas a partir da funcao e especificação de posicao
              //L[0]                     L[1] = posição girada 90 >    L[2] posição girada 180 >  L[3] posição girada 270 > 

/* Não esta funcionando o construtor/polimorfismo
const l = [ [ [1,0,0],[1,1,1],[0,0,0]],[ [1,1,0],[1,0,0],[1,0,0]],[ [1,1,1],[0,0,1],[0,0,0]],[ [0,0,1],[0,0,1],[0,1,1]]];//L invertido
var Peca = new Peca (l,"red");

const O = [ [ [1,1,0],[1,1,0],[0,0,0]],[ [1,1,0],[1,1,0],[0,0,0]],[ [1,1,0],[1,1,0],[0,0,0]],[ [1,1,0],[1,1,0],[0,0,0]]];//quadrado
var PecaO = new Peca (O,"brown");

const Y = [ [ [0,1,0],[1,1,1],[0,0,0]],[ [0,1,0],[0,1,1],[0,1,0]],[ [0,0,0],[1,1,1],[0,1,0]],[ [0,1,0],[1,1,0],[0,1,0]]];
var Peca = new Peca (Y,"orange");

const U = [ [ [1,0,1],[1,1,1],[0,0,0]],[ [0,1,1],[0,1,0],[0,1,1]],[ [0,0,0],[1,1,1],[1,0,1]],[ [1,1,0],[0,1,0],[1,1,0]]];
var Peca = new Peca (U,"green");

const I = [ [ [1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],[ [1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[ [0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1]],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,1,1,1]];
var Peca = new Peca (I,"yellow");
*/
//Criando um prototipo da funcao para faLer os varios tipos de blocos
class Peca {
    constructor(Tetramino, cor) {
        this.Tetramino = Tetramino;
        this.TetraminoN = 0; //Mostra a posicao inicial do bloco (no caso L[0])
        this.GoTetramino = this.Tetramino[this.TetraminoN]; //Vá bloco L = bloco [posicao0]
        this.cor = cor;
        this.linha = NLIN - 3; //posicao inicial do bloco
        this.coluna = Math.floor((NCOL / 2) - 1); //posicao inicial acima da matriL principal (Para cair dps)
        GoTetramino = this.GoTetramino;
        linha_nova = this.linha;
        coluna_nova = this.coluna;
        drawPiece();
    }

    set Peca(L){
        const PecaL = [ [ [0,0,1],[1,1,1],[0,0,0]],[ [1,1,0],[1,0,0],[1,0,0]],[ [1,1,1],[0,0,1],[0,0,0]],[ [1,0,0],[1,0,0][1,1,0]]];
        Peca (PecaL,"blue");//gerador a partir do protipo  
    }

    get Peca() {
        return deletePiece()+  drawPiece();
    }

    PecaL.constructor
    PecaO.constructor
}

function deletePiece(){
    for (linha = 0; (linha+linha_nova) < (linha_nova+ GoTetramino.length) ;  linha++) { //conta o tamanho (3x3) ou (4x4)
        //(coluna+ColunaInicial) < (ColunaInicial+TamanhoDaPeca)
        for (coluna = 0; (coluna + coluna_nova) < (coluna_nova + GoTetramino.length) ; coluna++) {
            if(GoTetramino[linha][coluna] == 1){
                blocos.fillStyle = "white" ; //Define a cor do bloco gerado
                blocos.fillRect((coluna_nova+coluna)*pixel, (linha+linha_nova)*pixel, pixel, pixel);//Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
                blocos.strokeRect((coluna_nova+coluna)*pixel, (linha+linha_nova)*pixel, pixel, pixel);
            }
        }
    }
}

function drawPiece(){
    for (linha = 0; (linha+linha_nova) < (linha_nova+ GoTetramino.length) ;  linha++) { //conta o tamanho (3x3) ou (4x4)
        //(coluna+ColunaInicial) < (ColunaInicial+TamanhoDaPeca)
        for (coluna = 0; (coluna + coluna_nova) < (coluna_nova + GoTetramino.length) ; coluna++) {
            if(GoTetramino[linha][coluna] == 1){
                blocos.fillStyle = "blue" ; //Define a cor do bloco gerado

                //Peca.Tetramino[Peca.TetraminoN];

                blocos.fillRect((coluna_nova+coluna)*pixel, (linha+linha_nova)*pixel, pixel, pixel);//Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
                blocos.strokeRect((coluna_nova+coluna)*pixel, (linha+linha_nova)*pixel, pixel, pixel);
            }
        }
    }
}

function tickMovimentation() { //Função para a movimentação constante da peça
    deletePiece(); //apagar peça antes de mover
    linha_nova--; //sobe a peça
    drawPiece(); //desenha a peça no lugar novo
    checkColision();
}

document.onkeydown = function(event) { //função para detectar as setas do teclado que sao pressionadas
    switch (event.keyCode) {
       case 37: //se for a seta <
            var arrow = 37;
            arrowMovimentation(arrow);
          break;
       case 38: //se for a seta ^
            arrow = 38;
            arrowMovimentation(arrow);
          break;
       case 39: //se for a seta >
            var arrow = 39;
            arrowMovimentation(arrow);
          break;
       case 40: //se for a seta para baixo
            var arrow = 40;
            arrowMovimentation(arrow);
          break;
    }
};

function arrowMovimentation(arrow){ // funcao de movimentaçao horizontal da peça
    if(arrow == 37)
    {
        deletePiece();
        coluna_nova--;
        drawPiece();
    }
    else
    if(arrow == 39)
    {
        deletePiece();
        coluna_nova++;
        drawPiece();
    }
    else
    if(arrow == 38)
    {
        deletePiece();
        linha_nova--;
        drawPiece();
    }
    if(arrow == 40) //Funcao para girar a peca
    {
        if (Peca.TetraminoN > 2)//reseta o vetor 
        {
            Peca.TetraminoN =0;
        }
        else //se nao for a ultima posicao da peca 
        {
            deletePiece();
            Peca.Tetramino[Peca.TetraminoN++];
            //Peca(Peca.Tetramino,Peca.cor);
            //Ele pega o valor certo em peca, porem nao atualiza na escrita na matriz 

            //this.Tetramino[this.TetraminoN++]; //Vá bloco L = bloco [posicao0]
            alert("Tetramino" + "[ " +Peca.TetraminoN);
            drawPiece();
        }
    }
}

//Incompleta
function checkColision(){
    var nextRow;
    nextRow = linha_nova-1;
    if(nextRow < -1)
    {
        linha_nova = NLIN-3;
        coluna_nova = Math.floor((NCOL/2)-1);
        drawPiece();
    }
}