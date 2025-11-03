const Inicio = document.getElementById("Inicio");
const Pausa = document.getElementById("Pausa");
const Reiniciar = document.getElementById("Reiniciar");

let timeLeft=2700;      //2700 es porque son 45 min por 60 seg
let interval;           //variable vacia porque se reescribe con los botones

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML = 
    `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`;
}
const startTimer = () => {
    interval = setInterval(() => {
        timeLeft --;
        updateTimer();

        if(timeLeft === 0) {
            clearInterval (interval);
            alert ("Descansito!");
            timeLeft = 2700;
            updateTimer();
        }
    }, 1000);

};

const stopTimer = () => clearInterval (interval);

const resetTimer = () => {

clearInterval (interval);
timeLeft =2700;
updateTimer();
}

Inicio.addEventListener("click", startTimer);
Pausa.addEventListener("click", stopTimer);
Reiniciar.addEventListener("click", resetTimer);


const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg"
];

let indice = 0;
function cambiarFondo() {
document.body.style.backgroundImage = `url(${images[indice]})`;
indice = (indice + 1)% images.length;

}
cambiarFondo() 
setInterval(cambiarFondo,10000);
