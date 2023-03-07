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
    ul.appendChild(li);
  });
  
  
  