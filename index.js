const NLIN = 10;
const NCOL = 20;
const cor = "white";
const x_y = 20;

//Pegar a matriz principal pelo ID
var canvas = document.getElementById('Matriz');
//Efeito 2d
var blocos = canvas.getContext("2d");
var matriz = new Array(); // new Matriz();


  for (linha = 0 ;linha < NLIN ; linha++){
      matriz[linha]= [];
      for(coluna = 0; coluna < NCOL ;coluna++){
        matriz[linha][coluna] = "white";
      }
    }


/*
function criarMatriz() {

    for (linha = 0; linha < NLIN; linha++) {
//matrizprincipal[linha] = new Array();
        for (coluna = 0; coluna < NCOL; coluna++) {
            matrizprincipal[linha][coluna] = Branco;
        }
    }

} */

function mostrarMatriz() {
  for (linha = 0 ;linha < NLIN ; linha++){
      for(coluna = 0; coluna < NCOL ;coluna++){
            criarBlocosMatriz(linha, coluna, matriz[linha][coluna]);
        }
    }
}
    mostrarMatriz();

function criarBlocosMatriz(linha, coluna, cor) {
    blocos.fillStyle = cor ;
    blocos.fillRect(linha*x_y, coluna*x_y, x_y, x_y);
    blocos.strokeStyle = 'black';
    blocos.strokeRect(linha*x_y, coluna*x_y, x_y, x_y);
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
              criarBlocosMatriz(linha, coluna,"pink");
            }
        }
    }






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
