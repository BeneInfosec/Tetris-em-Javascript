const NLIN = 20;//Quantidade de linhas da matriz base
const NCOL = 10;//Quantidade de colunas da matriz base
const pixel = 20;//Tamanho dos blocos da matriz base //Podemos mudar para Square ou quadrado essa const ?

var canvas = document.getElementById('Matriz');//Pegar a matriz principal pelo ID
var blocos = canvas.getContext("2d");//Efeito 2d

var base = []; //MAtriz de base

for (linha = 0 ;linha < NLIN ; linha++){ //Gera 20 linhas
    base[linha]= [];
    for(coluna = 0; coluna < NCOL ;coluna++){//Gera 10 colunas
        base[linha][coluna] = 0;
    }
}

function criarBlocosMatriz(linha, coluna, cor) {
    blocos.fillStyle = "white" ;
    blocos.fillRect(linha*pixel, coluna*pixel, pixel, pixel);
    blocos.strokeStyle = 'black';
    blocos.strokeRect(linha*pixel, coluna*pixel, pixel, pixel);
}

function mostrarMatriz() {
    for (linha = 0 ;linha < NLIN ; linha++){
        for(coluna = 0; coluna < NCOL ;coluna++){
              criarBlocosMatriz(coluna, linha, base[coluna][linha]);
        }
    }
}   
mostrarMatriz();


//FAZENDO ARTHUR -- CRIANDO A PECA EM FORMATO Z

              //Z[0]                      Z[1] = posição girada 90 >    Z[2] posição girada 180 >  Z[3] posição girada 270 > 
const Z = [ [ [1,0,0],[1,1,0],[0,1,0] ],  [ [0,0,1],[0,1,1],[0,1,0] ], [ [0,0,0],[1,1,0],[0,1,1] ], [ [0,1,0],[1,1,0][1,0,0] ] ];

var Peca = new Peca (Z,"blue");//gerador a partir do protipo 
//var Peca = new Peca (O,"black")

var GoTetramino;
//Criando um prototipo da funcao para fazer os varios tipos de blocos
function Peca(Tetramino,cor){
    this.Tetramino=Tetramino;
    this.TetraminoN=0;//Mostra a posicao inicial do bloco (no caso z[0])
    this.GoTetramino = this.Tetramino[this.TetraminoN]; //Vá bloco Z = bloco [posicao0]
    this.cor="blue";
    this.linha=4;//posicao inicial do bloco
    this.coluna=20;//posicao inicial acima da matriz principal (Para cair dps)
    //Geração das pecas na tela 
    for (linha = 0; (linha+this.linha) < (this.linha + this.GoTetramino.length) ;  linha++) { //conta o tamanho (3x3) ou (4x4)
        for (coluna = 0; (coluna+ this.coluna) < (this.coluna +this.GoTetramino.length) ; coluna++) {
            if(this.GoTetramino[linha][coluna] == 1){
                blocos.fillStyle = "blue" ; //Define a cor do bloco gerado
                blocos.fillRect((linha+this.linha)*pixel, (this.coluna+coluna)*pixel, pixel, pixel);//Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
                blocos.strokeRect((linha+this.linha)*pixel, (this.coluna+coluna)*pixel, pixel, pixel);
            }
        }
    }
}


