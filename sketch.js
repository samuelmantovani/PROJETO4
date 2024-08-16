let palavra

function setup() {
  createCanvas(600, 600);
  palavra = omasp();
}

function draw() {
  escola();
  alura();
  omasp();
}

function escola(){
  background("lightblue");
  fill("black");
  textSize(70);
  textAlign(CENTER,CENTER);
}

 function alura(){
  let maximo=width;
  let minimo=0;
  let quantidade = map(mouseX, 0, width, 0, palavra.length);
  let inicio= palavra.substring(0, quantidade);
  text(inicio, 300,300);
}

function omasp(){
  let palavras=["Vô nada", "JavaScript", "Samuel", "Amo Deus"];
return random(palavras);
}
