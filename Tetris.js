var NCOL= prompt ("Digite a largura do tabuleiro (MAX: 22)");//Quantidade de colunas da matriL base
var NLIN= prompt ("Digite a altura do tabuleiro (MAX: 44)");//Quantidade de linhas da matriL base

var Jogadores = [];//Criando diversos jogadores com o construtor Pessoa

const height_pixel = 500/NLIN;//Tamanho dos blocos da matriL base
const width_pixel = 250/NCOL;
const EMPTY_SQ = "#eeeeee";

var canvas = document.getElementById('Matriz');//Pegar a matriL principal pelo ID
canvas.width = 250;
canvas.height = 500;
var blocos = canvas.getContext("2d");//Efeito 2d
var intervalo;
var base = []; //MatriL de base
var linha_nova=0;
var coluna_nova=0;
var gameState = 0;
var pecaAtual;
var proximaPeca;


class Peca{
    constructor(Tetramino,cor)
    {
        this.Tetramino=Tetramino;
        this.TetraminoN=0;//Mostra a posicao inicial do bloco (no caso L[0])
        this.GoTetramino = this.Tetramino[this.TetraminoN]; //Vá bloco L = bloco [posicao0]
        this.cor=cor;
        if(Tetramino == O)
        {
            this.linha=NLIN-4;//posicao inicial do bloco O
            this.coluna = Math.floor((NCOL / 2) - 1);
        }
        else {
            this.linha = NLIN - 3;//posição inicial dos outros blocos
            this.coluna = Math.floor((NCOL / 2) - 1);//posicao inicial acima da matriL principal (Para cair dps)
        }
    }

}


let checkGameOver = () => {

    if(checkColision(0, 0, pecaAtual.GoTetramino)){
        alert('Game over');
        gameState = 1;
        clearInterval(intervalo);
        }
    };



//Criando a Matriz base
for (linha = 0 ;linha < NLIN ; linha++){ //Gera linhas
    base[linha]= [];
    for(coluna = 0; coluna < NCOL ;coluna++){//Gera colunas
        base[linha][coluna] = EMPTY_SQ;
    }
}

function criarBlocosMatriz(linha, coluna, cor) {
    blocos.fillStyle = EMPTY_SQ ;
    blocos.fillRect(linha*width_pixel, coluna*height_pixel, width_pixel, height_pixel);
    blocos.strokeStyle = 'black';
    blocos.strokeRect(linha*width_pixel, coluna*height_pixel, width_pixel, height_pixel);
}

function mostrarMatriz() {
    for (linha = 0 ;linha < NLIN ; linha++){
        for(coluna = 0; coluna < NCOL ;coluna++){
              criarBlocosMatriz(coluna, linha, base[coluna][linha]);
        }
    }
}   
mostrarMatriz();

             //L[0]                     L[1] = posição girada 90 >    L[2] posição girada 180 >  L[3] posição girada 270 > 
const L = [ [ [0,0,1],[1,1,1],[0,0,0]],[ [1,0,0],[1,0,0],[1,1,0]],[ [1,1,1],[1,0,0],[0,0,0]],[ [0,1,1],[0,0,1],[0,0,1]]]; //L normal
const M = [ [ [1,1,0],[1,1,0],[0,0,0]],[ [1,1,0],[1,1,0],[0,0,0]],[ [1,1,0],[1,1,0],[0,0,0]],[ [1,1,0],[1,1,0],[0,0,0]]]; //quadrado
const N = [ [ [1,0,0],[1,1,1],[0,0,0]],[ [1,1,0],[1,0,0],[1,0,0]],[ [1,1,1],[0,0,1],[0,0,0]],[ [0,0,1],[0,0,1],[0,1,1]]]; //L invertido
const O = [ [ [0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[ [0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[ [0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[ [0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]]]; // |
const Y = [ [ [0,1,0],[1,1,1],[0,0,0]],[ [0,1,0],[0,1,1],[0,1,0]],[ [0,0,0],[1,1,1],[0,1,0]],[ [0,1,0],[1,1,0],[0,1,0]]]; // _|_
const U = [ [ [1,0,1],[1,1,1],[0,0,0]],[ [0,1,1],[0,1,0],[0,1,1]],[ [0,0,0],[1,1,1],[1,0,1]],[ [1,1,0],[0,1,0],[1,1,0]]]; //U             



var peca_proxima = (Math.floor(Math.random()*6)+1);
pecaAtual = peca_aleatoria(peca_proxima)
console.log(pecaAtual);
peca_proxima = (Math.floor(Math.random()*6)+1);
proximaPeca = peca_aleatoria(peca_proxima);
drawPiece_1(proximaPeca);


function peca_aleatoria(random){ //função para gerar peça aleatoria
  
  switch(random){
    case 1:
      return new Peca(L,"blue");
      break;
    case 2:
      return new Peca(M,"red");
      break;
    case 3:
      return new Peca(N,"green");
    break;
    case 4:
      return new Peca(O,"Gold");
    break;
    case 5:
      return new Peca(Y,"DeepPink");
    break;
    case 6:
      return new Peca(U,"purple");
    break;
  }
  
}

intervalo = setInterval(tickMovimentation, 1000);


//Criando um prototipo da funcao para faLer os varios tipos de blocos



function deletePiece(){

	 
    for (linha = 0; (linha+pecaAtual.linha) < (pecaAtual.linha + pecaAtual.GoTetramino.length) ;  linha++) { //conta o tamanho (3x3) ou (4x4)
        //(coluna+ColunaInicial) < (ColunaInicial+TamanhoDaPeca)

        for (coluna = 0; (coluna + pecaAtual.coluna) < (pecaAtual.coluna + pecaAtual.GoTetramino.length) ; coluna++) {
            if(pecaAtual.GoTetramino[linha][coluna] == 1){
                blocos.fillStyle = EMPTY_SQ ; //Define a cor do bloco gerado
                blocos.fillRect((pecaAtual.coluna+coluna)*width_pixel, (linha+pecaAtual.linha)*height_pixel, width_pixel, height_pixel);//Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
                blocos.strokeRect((pecaAtual.coluna+coluna)*width_pixel, (linha+pecaAtual.linha)*height_pixel, width_pixel, height_pixel);
            }
        }

    }
}


function drawPiece(){
    for (linha = 0; (linha+pecaAtual.linha) < (pecaAtual.linha+ pecaAtual.GoTetramino.length) ;  linha++) { //conta o tamanho (3x3) ou (4x4)
        //(coluna+ColunaInicial) < (ColunaInicial+TamanhoDaPeca)
        for (coluna = 0; (coluna + pecaAtual.coluna) < (pecaAtual.coluna + pecaAtual.GoTetramino.length) ; coluna++) {
            if(pecaAtual.GoTetramino[linha][coluna] == 1){
                blocos.fillStyle = pecaAtual.cor ; //Define a cor do bloco gerado
                blocos.fillRect((pecaAtual.coluna+coluna)*width_pixel, (linha+pecaAtual.linha)*height_pixel, width_pixel, height_pixel);//Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
                blocos.strokeRect((pecaAtual.coluna+coluna)*width_pixel, (linha+pecaAtual.linha)*height_pixel, width_pixel, height_pixel);
            }
        }
    }
    

}

function drawPiece_1(proxima){

	console.log(proxima);
	console.log("AQUI Zè");
	var next = document.getElementById('next-canvas');//teste
	next.width = 150;
	next.height = 100;
	var bloquinhos = next.getContext("2d"); //teste

    for (let linha1 = 0; linha1 < proxima.GoTetramino.length ;  linha1++) { //conta o tamanho (3x3) ou (4x4)
        //(coluna+ColunaInicial) < (ColunaInicial+TamanhoDaPeca)
        for (let coluna1 = 0; coluna1 < proxima.GoTetramino.length ; coluna1++) {
            if(proxima.GoTetramino[linha1][coluna1] == 1){
                bloquinhos.fillStyle = proxima.cor ; //Define a cor do bloco gerado
                bloquinhos.fillRect(coluna1*width_pixel, linha1*height_pixel, width_pixel, height_pixel);//Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
                bloquinhos.strokeRect(coluna1*width_pixel, linha1*height_pixel, width_pixel, height_pixel);
            }
        }
    }
    
}

function tickMovimentation() { //Função para a movimentação constante da peça
    if(checkColision(-1, 0, pecaAtual.GoTetramino)){
        drawPieceOnBoard();
        pecaAtual = proximaPeca;
        proximaPeca = peca_aleatoria(Math.floor(Math.random()*6)+1);
        checkGameOver();
        console.log(proximaPeca);
        drawPiece_1(proximaPeca);
    }
    else{
    	
        deletePiece(); //apagar peça antes de mover

        pecaAtual.linha--; //sobe a peça
        drawPiece(); //desenha a peça no lugar novo
    }
}

document.onkeydown = function(event) { //função para detectar as setas do teclado que sao pressionadas
    if(gameState == 1){
        return false;
    }
    else{
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
                rotatePiece();
            break;
        }
    }
};

function arrowMovimentation(arrow){ // funcao de movimentaçao horizontal da peça
    if(arrow == 37)
    {
        if(checkColision(0, -1, pecaAtual.GoTetramino)){
            return false;
        }
        else{
            deletePiece();
            pecaAtual.coluna--;
            drawPiece();
        }
    }
    else
    if(arrow == 39)
    {
        if(checkColision(0, 1, pecaAtual.GoTetramino)){
            return false;
        }
        else{
            deletePiece();
            pecaAtual.coluna++;
            drawPiece();
        }
    }
    else
    if(arrow == 38)
    {
        if(checkColision(-1, 0, pecaAtual.GoTetramino)){
            drawPieceOnBoard();
            pecaAtual = proximaPeca;
            proximaPeca = peca_aleatoria((Math.floor(Math.random()*6)+1));
            checkGameOver();
            drawPiece_1(proximaPeca);
            return false;

        }
        else{
            deletePiece();
            pecaAtual.linha--;
            drawPiece();
        }
    }
    if(arrow == 40) //Funcao para girar a peca
    {
        if (pecaAtual.TetraminoN > 3)//reseta o vetor
        {
            pecaAtual.TetraminoN =0;
        }
        else //se nao for a ultima posicao da peca 
        {
            deletePiece();
            pecaAtual.GoTetramino = pecaAtual.Tetramino;
            pecaAtual.Tetramino[pecaAtual.TetraminoN++];
            drawPiece();
        }
    }
}

function checkColision(r, c, futurePiece){
    for(linha = 0 ; linha < pecaAtual.GoTetramino.length ; linha++){
        for(coluna = 0 ; coluna < pecaAtual.GoTetramino.length ; coluna++){
            if(futurePiece[linha][coluna] != 0){
                let nextRow;
                let nextCol;
                nextRow = linha + r + pecaAtual.linha;
                nextCol = coluna + c + pecaAtual.coluna;
                if(nextRow < 0 || nextCol < 0 || nextCol > NCOL){
                	
                    return true;
                }
                if(base[nextRow][nextCol] != EMPTY_SQ){

                    return true;
                }
                else{
                    continue;
                }
            }
            else{
                continue;
            }
        }
    }
    return false;
}

function drawPieceOnBoard(){
    for(linha = 0 ; linha < pecaAtual.GoTetramino.length ; linha++){
        for(coluna = 0 ; coluna < pecaAtual.GoTetramino.length ; coluna++){
            if(pecaAtual.GoTetramino[linha][coluna] == 1){
                base[linha+pecaAtual.linha][coluna+pecaAtual.coluna] = pecaAtual.cor;
                blocos.fillStyle = pecaAtual.cor ; //Define a cor do bloco gerado
                blocos.fillRect((pecaAtual.coluna+coluna)*width_pixel, (linha+pecaAtual.linha)*height_pixel, width_pixel, height_pixel);//Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
                blocos.strokeRect((pecaAtual.coluna+coluna)*width_pixel, (linha+pecaAtual.linha)*height_pixel, width_pixel, height_pixel);
            }
        }
       
    }
   verificalinha();

    
}

function verificalinha(){

    var contador = 0;
    for(linha = 0 ; linha < NLIN ; linha++){
        for(coluna = 0 ; coluna < NCOL ; coluna++){ //percorre a matriz base inteira
            if(base[linha][coluna] != EMPTY_SQ){ //verifica se é diferente de vazio
                contador++;
            }
        }
        if(contador == NCOL){ // compara se a linha inteira está preenchida
            for(lin = linha; lin < NLIN-1; lin++){
                for(col = 0; col < NCOL; col ++){  // se foi preenchida
                  base[lin][col] = base[lin+1][col]; // coloca as colunas em branco
                  blocos.fillStyle = base[lin][col]; //Define a cor do bloco gerado
                  blocos.fillRect(col*width_pixel, lin*height_pixel, width_pixel, height_pixel);//Linha*tamDoBloco,Coluna*TamDoBloco, TamDoBloco,TamDoBloco
                  blocos.strokeRect(col*width_pixel, lin*height_pixel, width_pixel, height_pixel);
                }
            }
            contador = 0;
            linha--;
        }
        else{
            contador = 0; 
        }
    }
} 

function rotatePiece(){
    let futureN = pecaAtual.TetraminoN;
    let futureTetramino = pecaAtual.GoTetramino;
    if(futureN == 3){
        futureN = 0;
        futureTetramino = pecaAtual.Tetramino[futureN];
    }
    else{
        futureN++;
        futureTetramino = pecaAtual.Tetramino[futureN];
    }
    if(checkColision(0, 0, futureTetramino)){
        return false;
    }
    else{
        deletePiece();
        pecaAtual.TetraminoN = futureN;
        pecaAtual.GoTetramino = futureTetramino;
        drawPiece();
    }
}
/*Funcao para o ranking */
var Points;
var Name;
var Level;
var Time;
var cont=0;

//Criando arrow function como objeto pessoa
class Pessoa {
    constructor() {
        this.Name = SetName(Name);
        this.Points = SetPoints(Points);
        this.Level = SetLevel(Level);
        this.Time = SetTime(Time);
    }
};

//Funções para setar o valor dos atributos
function SetName(){Name =  prompt("Digite seu nome:");return Name;}
function SetPoints(){Points = prompt("Digite os pontos:");return Points;}
function SetLevel(){Level = prompt("Digite o nivel que chegou:"); return Level}
function SetTime(){Time = prompt("Tempo de jogo:"); return Time}

function exibirDados(){

    console.log(Jogadores.push (new Pessoa()));//Adicionando Pessoas ao array Jogadores
    
    //Funcao para ordenar o Vetor de jogadores a partir da maior pontução
    Jogadores.sort((a, b) => (a.Points < b.Points) ? 1 : -1)

    document.getElementById("dados").innerHTML = ""; //Limpa o campo dados antes de imprimir a lista 

    //Item Percorre a quantidade de jogadores imprimindo no html
    Jogadores.forEach(item => {
        document.getElementById("dados").innerHTML +=
        '<li><b>Name: </b>'+item.Name +
        '<b> Points: </b>'+item.Points+
        '<br><b> Level: </b>'+item.Level +
        '<b> Time: </b>'+item.Time+
        '</li>';//Adicionar ponto aqu
    });

    return false;
} 
 
