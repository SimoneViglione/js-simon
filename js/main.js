function generaNumeri(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
let numeri = [];
  
while (numeri.length < 5) {

const numeroCasuale = generaNumeri(1, 100);

if (!numeri.includes(numeroCasuale)) {
    numeri.push(numeroCasuale);
    }
}
  
const ul = document.getElementById("numeriRandom");
  
numeri.forEach(numero => {
const li = document.createElement("li");
li.textContent = numero;
ul.append(li);
});
  
setTimeout(() => {
const lis = document.querySelectorAll("#numeriRandom li");

lis.forEach(li => li.classList.add("d-none"));
}, 30000);
  
setTimeout(() => {
let tentativoUtente = [];
let indovinati = 0;

for (let i = 0; i < 5; i++) {
    const numero = numeri[i];
    const input = prompt(`Inserisci il ${i + 1}° numero che hai visto`);
    if (input == numero) {
    tentativoUtente.push(numero);
    indovinati++;
    }
}

alert(`Hai indovinato ${indovinati} numeri: ${tentativoUtente.join(", ")}`);
}, 31000);
  
  
  