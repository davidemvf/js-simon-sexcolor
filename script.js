// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;
var n;
var n_casuali = [];
var nTent;
var punteggio = 0;
var indovinati = [];

for (var i = 0; i < 5; i++) {
  n = Math.floor((Math.random(i) * 100) + 1);
  alert("Numero: " + n);
  n_casuali.push(n);
  // console.log(n);
}
console.log("Numeri casuali: " + n_casuali);

window.setTimeout("indovina()", 30000);

function indovina() {
  for (i = 0; i < 5; i++){
    nTent = parseInt(prompt("Inserire numero"));
    if (n_casuali.includes(nTent)){
      punteggio = punteggio + 1;
      indovinati.push(nTent);
    }
  }
  console.log("Punteggio: " + punteggio);
  console.log("Numeri indovinati: " + indovinati);
}
