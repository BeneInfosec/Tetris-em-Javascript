const NLIN = 10;//Quantidade de linhas da matriz base
const NCOL = 20;//Quantidade de colunas da matriz base
const cor = "white";
const x_y = 20;//Tamanho dos blocos da matriz base //Podemos mudar para Square ou quadrado essa const ?


//Pegar a matriz principal pelo ID
var canvas = document.getElementById('Matriz');
//Efeito 2d
var blocos = canvas.getContext("2d");
var matriz = new Array(); // new Matriz();

//Gerador da matriz base
  for (linha = 0 ;linha < NLIN ; linha++){ //Gera 10 linhas
      matriz[linha]= [];
      for(coluna = 0; coluna < NCOL ;coluna++){//Gera 20 colunas
        matriz[linha][coluna] = "white";
      }
    }

function mostrarMatriz() {
  for (linha = 0 ;linha < NLIN ; linha++){
      for(coluna = 0; coluna < NCOL ;coluna++){
            criarBlocosMatriz(linha, coluna, matriz[linha][coluna]);
        }
    }
}
mostrarMatriz(); //Chamando a funcao Mostrar matriz

//Funcao que cria bloco na matriz
function criarBlocosMatriz(linha, coluna, cor) {
    blocos.fillStyle = cor ; //Define a cor do bloco gerado
    blocos.fillRect(linha*x_y, coluna*x_y, x_y, x_y);
    //Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
    blocos.strokeStyle = 'black'; //Define a cor das divisoes do bloco
    blocos.strokeRect(linha*x_y, coluna*x_y, x_y, x_y);
}

//Arthur fez aqui, nao sei se a mostrar matriz esta correta
function EscreverMatriz(){
    for (linha = 0; linha < NLIN;  linha++) {
        for (coluna = 0; coluna < NCOL; coluna++) {
            criarBlocosMatriz(NLIN, NCOL,matriz[linha][coluna]);
        }
    }
}

//criarBlocosMatriz(5,20,"blue"); //coluna e linha

var z = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

    for (linha = 0; linha < NLIN;  linha++) {
        for (coluna = 0; coluna < NCOL; coluna++) {
            if(z[linha][coluna] == 1){
              criarBlocosMatriz(linha, coluna,"red");
            }
        }
    }

//FAZENDO ARTHUR -- CRIANDO A PECA EM FORMATO Z

              //Z[0]                      Z[1] = posição girada 90 >    Z[2] posição girada 180 >  Z[3] posição girada 270 > 
const Z = [ [ [1,1,0],[0,1,1],[0,0,0] ],  [ [0,0,1],[0,1,1],[0,1,0] ], [ [0,0,0],[1,1,0],[0,1,1] ], [ [0,1,0],[1,1,0][1,0,0] ] ];

var Peca = new Peca (Z,"blue");//gerador a partir do protipo 

//Criando um prototipo da funcao para fazer os varios tipos de blocos
function Peca(Tetramino,cor){
    this.Tetramino=Tetramino;
    this.TetraminoN=0;//Mostra a posicao inicial do bloco (no caso z[0])
    this.GoTetramino = this.Tetramino[this.TetraminoN]; //Vá bloco Z    = bloco [posicao0]
    this.cor="blue";
    this.linha=3;//posicao inicial do bloco
    this.coluna=3;//posicao inicial acima da matriz principal (Para cair dps)

    for (linha = 0; linha <this.GoTetramino.length;  linha++) {
        for (coluna = 0; coluna < this.GoTetramino.length; coluna++) {
            if(this.GoTetramino[linha][coluna]){
                EscreverMatriz(linha,coluna,this.cor);
            }
        }
    }

}


//FAZENDO ARTHUR -- CRIANDO A PECA EM FORMATO Z




//Criando a matriz para obter as posições
/*
var linhas = prompt ("Digite a quantidade de linhas");
var colunas =prompt ("Digite a quantidade de colunas");
alert("Criar uma matriz de " + linhas + " linhas por " + colunas + " colunas ");

var matriz =[];
for (var l = 0; l < linhas; l ++){
matriz[l]= [];
for( var c =0; c<colunas;c++){
    matriz[l][c] = '';
}

}
for(var L = 0; L< linhas; L++){
    for(var C=0; C < colunas; C++){
        matriz[L][C] = prompt ("Digite um valor para inserir na matriz ");
    }
}

var valores = '';
for (var L =0; L <linhas; L++){
    for(var C = 0; C < colunas; C++){
        if (C < colunas -0){
            valores += matriz[L][C] + "\t\t";
        }
        else {
            valores += matriz[L][C] + "\n";
        }

    }
}

alert("Conteúdo da matriz:\n" + valores);
*/
