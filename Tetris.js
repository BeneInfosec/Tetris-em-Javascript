const NLIN = 20;//Quantidade de linhas da matriL base
const NCOL = 10;//Quantidade de colunas da matriL base
const pixel = 20;//Tamanho dos blocos da matriL base //Podemos mudar para Square ou quadrado essa const ?

var canvas = document.getElementById('MatriL');//Pegar a matriL principal pelo ID
var blocos = canvas.getContext("2d");//Efeito 2d

var base = []; //MatriL de base
//Criando a MatriL base
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
const L = [ [ [0,0,1],[1,1,1],[0,0,0]],[ [1,1,0],[1,0,0],[1,0,0]],[ [1,1,1],[0,0,1],[0,0,0]],[ [1,0,0],[1,0,0][1,1,0]]];
var Peca = new Peca (L,"blue");//gerador a partir do protipo 

const l = [ [ [1,0,0],[1,1,1],[0,0,0]],[ [1,1,0],[1,0,0],[1,0,0]],[ [1,1,1],[0,0,1],[0,0,0]],[ [0,0,1],[0,0,1],[0,1,1]]];//L invertido
var Peca = new Peca (l,"red");

const O = [ [ [1,1,0],[1,1,0],[0,0,0]],[ [1,1,0],[1,1,0],[0,0,0]],[ [1,1,0],[1,1,0],[0,0,0]],[ [1,1,0],[1,1,0],[0,0,0]]];//quadrado
var Peca = new Peca (O,"brown");

const Y = [ [ [0,1,0],[1,1,1],[0,0,0]],[ [0,1,0],[0,1,1],[0,1,0]],[ [0,0,0],[1,1,1],[0,1,0]],[ [0,1,0],[1,1,0],[0,1,0]]];
var Peca = new Peca (Y,"orange");

const U = [ [ [1,0,1],[1,1,1],[0,0,0]],[ [0,1,1],[0,1,0],[0,1,1]],[ [0,0,0],[1,1,1],[1,0,1]],[ [1,1,0],[0,1,0],[1,1,0]]];              
var Peca = new Peca (U,"green");

const I = [ [ [1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],[ [1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[ [0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1]],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,1,1,1]];
var Peca = new Peca (I,"yellow");


var GoTetramino;
//Criando um prototipo da funcao para faLer os varios tipos de blocos
function Peca(Tetramino,cor){
    this.Tetramino=Tetramino;
    this.TetraminoN=0;//Mostra a posicao inicial do bloco (no caso L[0])
    this.GoTetramino = this.Tetramino[this.TetraminoN]; //Vá bloco L = bloco [posicao0]
    this.cor="blue";
    this.linha=20;//posicao inicial do bloco
    this.coluna=4;//posicao inicial acima da matriL principal (Para cair dps)
    //Geração das pecas na tela 
                    //(linha+linhaInicial) < (LinhaInicial+TamanhoDaPeca)
    for (linha = 0; (linha+this.linha) < (this.linha + this.GoTetramino.length) ;  linha++) { //conta o tamanho (3x3) ou (4x4)
                    //(coluna+ColunaInicial) < (ColunaInicial+TamanhoDaPeca)
        for (coluna = 0; (coluna+ this.coluna) < (this.coluna +this.GoTetramino.length) ; coluna++) {
            if(this.GoTetramino[linha][coluna] == 1){
                blocos.fillStyle = "blue" ; //Define a cor do bloco gerado
                blocos.fillRect((this.coluna+coluna)*pixel, (linha+this.linha)*pixel, pixel, pixel);//Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
                blocos.strokeRect((this.coluna+coluna)*pixel, (linha+this.linha)*pixel, pixel, pixel);
            }
        }
    }
}
