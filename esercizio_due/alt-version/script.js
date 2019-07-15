// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito;
//Alt-version: controllo sul prompt.

// chiedo all'utente nome e sesso
var nome = prompt("Ciao, come ti chiami?");
var promptDue = prompt("Qual è il tuo sesso?");
var sesso = promptDue.toLowerCase();

// tramite ciclo while costringo l'utente a inserire un valore valido
while (Number(sesso) || sesso == 0 || (sesso != "uomo" && sesso != "maschio" && sesso != "donna" && sesso != "femmina")) {
  alert("Inserire un valore valido");
  promptDue = prompt("Qual è il tuo sesso?");
  sesso = promptDue.toLowerCase();
}


// richiamo l'elemento dall'HTML e nè inserisco il contenuto
document.getElementById('name').innerHTML = nome;

// a seconda del sesso il nome comparirà blu (maschio) o rosa (femmina)
if (sesso == "maschio" || sesso == "uomo") {
  document.getElementById('name').style.color = "blue";
} else if (sesso == "femmina" || sesso == "donna") {
  document.getElementById('name').style.color = "pink";
}
