let contador = 0;

const h1 = document.getElementById('contador');

function condicao(){
  if(contador < 0){
    h1.style.color = 'red'
  }else if(contador > 0){
    h1.style.color = 'green'
  }else{
    h1.style.color = 'white'
  }
  h1.textContent = contador;
}

function diminuir(){
  contador--;
  condicao()
}

function reset(){
  contador = 0;
  condicao()
}

function aumenta(){
  contador++;
  condicao()
}