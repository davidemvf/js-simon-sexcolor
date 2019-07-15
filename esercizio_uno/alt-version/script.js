// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;
//Alt-version: controlli sul prompt e countdown durante l'attesa.


// definisco variabili per: numeri casuali, array che li contiene, numeri inseriti dall'utente. Inizializzo il punteggio e creo array che conterrà i numeri indovinati;
var n;
var n_casuali = [];
var nTent;
var punteggio = 0;
var indovinati = [];
var start = 30;

// imposto un ciclo che mostri all'utente i 5 numeri da ricordare
for (var i = 0; i < 5; i++) {
  n = Math.floor((Math.random(i) * 100) + 1);
  alert("Numero: " + n);
  n_casuali.push(n);
  // console.log(n);
}
console.log("Numeri casuali: " + n_casuali);

//visualizzo un countdown durante l'attesa
var clock = setInterval(countdown, 1000);


// dopo 30 secondi appariranno i prompt dove inserire i numeri
setTimeout("indovina()", 30000);

// funzione utilizzata per far apparire i prompt, tenere conto del punteggio e riempire e visualizzare tramite log i numeri indovinati
function indovina() {
  for (i = 0; i < 5; i++){
    nTent = parseInt(prompt("Inserire numero"));
    while (isNaN(nTent) || n === null || (nTent - parseInt(nTent) != 0)){                                 //Imposto un ciclo while di controllo che obbliga l'utente a immettere un valore numerico
      alert("Il valore inserito non è accettabile. Inserire un numero compreso tra 1 e 100 inclusi.");
      nTent = parseInt(prompt("Inserire numero"));
    }
    if (n_casuali.includes(nTent)){
      punteggio = punteggio + 1;
      indovinati.push(nTent);
    }
  }
  console.log("Punteggio: " + punteggio);
  console.log("Numeri indovinati: " + indovinati);
}

//funzione utilizzata per il countdown
function countdown(){
  if (start === 0) {
    clearInterval(clock);
  } else {
  start--;
  console.log(start);
  }
}
