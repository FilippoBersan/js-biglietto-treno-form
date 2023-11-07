'use strict';

// Calcolo del prezzo del biglieggto del treno

// 1. mostro un prompt per il numero chilometri da percorrere
const chilometri = parseFloat(prompt('Inserisci chilometri da percorrere'));

// 2. mostro un prompt per l'età del passeggero
const eta = parseFloat(prompt('Inserisci età del passeggero'));

// 3. salvo in una variabile il numero di chilometri
const numeroChilometri = chilometri;

// 4. salvo in una variabile l'età del passeggero
const numeroEta = eta;

console.log({ chilometri });
console.log({ eta });
// 5. il prezzo del biglietto sarà definito in base ai km 0.21
const prezzoalKm = '0.12';

// 6. calcolo prezzo biglietto
const prezzoBiglietto = numeroChilometri * prezzoalKm;
console.log({ prezzoBiglietto });

// 7. istruzione condizionale
//  -SE IL PASSEGGERO HA MENO DI 18 ANNI SCONTO DEL 20%
//  -ALTRIMENTI SE IL PASSEGERO HA PIU DI 65 ANNI SCONTO DEL 40%
//  -ALTRIMENTI IL PREZZO NON SARA SCONTATO

const calcoloSconto20 = (prezzoBiglietto * 20) / 100;

const sconto20 = prezzoBiglietto - calcoloSconto20;

const calcoloSconto40 = (prezzoBiglietto * 40) / 100;

const sconto40 = prezzoBiglietto - calcoloSconto40;

if (numeroEta <= 18) {
  alert(sconto20);
  console.log({ sconto20 });
} else if (numeroEta >= 65) {
  alert(sconto40);
  console.log({ sconto40 });
} else numeroEta;
alert(prezzoBiglietto);

console.log('il prezzo del biglietto è', prezzoBiglietto.toFixed(2));
