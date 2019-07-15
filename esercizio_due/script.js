// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito;

// chiedo all'utente nome e sesso
var nome = prompt("Ciao, come ti chiami?");
var sesso = prompt("Qual è il tuo sesso?");

// richiamo l'elemento dall'HTML e nè inserisco il contenuto
document.getElementById('name').innerHTML = nome;

// a seconda del sesso il nome comparirà blu (maschio) o rosa (femmina)
if (sesso == "maschio" || sesso == "uomo") {
  document.getElementById('name').style.color = "blue";
} else if (sesso == "femmina" || sesso == "donna") {
  document.getElementById('name').style.color = "pink";
}
