const dino = document.querySelector('.dino');
const arvore = document.querySelector('.arvore');
const pontuacao = document.getElementById("pont");

let valorP = 0;
let valorPS;

const jump = () => {
  dino.classList.add('jump');
          
  setTimeout(() => {
    dino.classList.remove('jump');
  }, 500); 
}

const loop = setInterval(() => {

  const arvorePosition = arvore.offsetLeft;
  const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');

  console.log(dinoPosition);  

  if (arvorePosition <= 350 && arvorePosition > 150 && dinoPosition < 15) {
    arvore.style.animation = 'none';
    arvore.style.left = `${arvorePosition}px`;

    dino.style.animation = 'none';
    dino.style.bottom = `${dinoPosition}px`;
    window.location.href = 'index.html'

    clearInterval(loop);
    
  } else {
    valorP += 1;
    valorPS = "PLACAR: " + valorP.toString();
    pontuacao.textContent = valorPS;
  }

}, 10);
document.addEventListener('keydown', jump);