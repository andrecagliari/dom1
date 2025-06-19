// Seleziona tutti i paragrafi
const paragrafi = document.querySelectorAll("p");

// Bottone: Cambia colore dei paragrafi
document.getElementById("colori").addEventListener("click", () => {
  paragrafi.forEach(paragrafo => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    paragrafo.style.color = `rgb(${r},${g},${b})`;
  });
});

// Bottone: Imposta testo in grassetto
document.getElementById("grassetto").addEventListener("click", () => {
  paragrafi.forEach(paragrafo => {
    paragrafo.style.fontWeight = "bold";
  });
});

// Bottone: Mostra/Nascondi paragrafi
let visibili = true;

document.getElementById("toggle").addEventListener("click", () => {
  paragrafi.forEach(paragrafo => {
    paragrafo.style.display = visibili ? "none" : "block";
  });
  visibili = !visibili;
});
