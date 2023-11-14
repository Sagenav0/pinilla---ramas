import '.style.css';
function generarNumeroAleatorio(){
return Math.floor(Math.ramdom() *6)+1;

}
function dibujarDados() {
const dados =document.querySelectorAll('.dado');

for (let i = 0; i <dados.length; i++){
const dado = dados[i];

const imagen =document.createElement('img');
imagen.src= 'img/dado-${generarNumeroAleatorio()}.png';

dado.appendChild(imagen);
    }
}
dibujarDados();

document.querySelector('#lanzar').addEventListener('click', () => {


});