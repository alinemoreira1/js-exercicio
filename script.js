
let escolha = Number(prompt('Escolha um número de 0 a 50')); 
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    let numero=escolha (0,50); 
 }

let vidas = 10;

if(escolha===17){
    alert('Parabéns, você acertou.');
}

if (escolha>17){
    alert('Você errou, o número é menor. Tente novamente.');
}

if (escolha<17) {
    alert('Você errou, o número é maior.Tente novamente.');
}