/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50
BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili? */


alert ("Benvenuto utente. Rispondi alle seguenti domande per ottenere il prezzo del tuo biglietto");
let eta = prompt("Quanti anni hai?"); 
var valid = false;
while (!valid) {
    if (isNaN(parseInt(eta)) || eta.length < 1 || eta.length > 2) {
        eta = prompt("Seleziona un età valida.");
    } 
    else {
        valid = true;
    }
};

let quantitaKm = prompt("Quanti chilometri vuoi percorrere?");
var valid = false;
while (!valid) {
    if (isNaN(parseInt(quantitaKm)) || quantitaKm.length < 1 || quantitaKm.length > 4) {
        quantitaKm = prompt("Seleziona un valore numerico valido da 1 a 4 cifre.");
    }  else {
        valid = true;
    }
};
const prezzoAlKm = 0.21;
let prezzoBiglietto = parseInt(quantitaKm) * prezzoAlKm;
let prezzoFinale;

if (parseInt(eta) < 18) {
    (prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 20 / 100));
} else if (parseInt(eta) > 65) {
    (prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 40 / 100));
} else {
    (prezzoFinale = prezzoBiglietto);
};

let age = document.getElementById("eta");
age.innerHTML = `Età: ${eta} anni`;

let Km = document.getElementById("km");
Km.innerHTML = `Distanza selezionata: ${quantitaKm} km`;

let finalPrice = document.getElementById("prezzo-finale");
finalPrice.innerHTML = `Prezzo biglietto: ${prezzoFinale.toFixed(2)}€`;


