'use strict';

// Calcolo del prezzo del biglieggto del treno

const inputChilometri = document.querySelector('input[type="text"]');

const inputEta = document.querySelector('input[type="text2"]');

console.log(inputChilometri.value);

console.log(inputEta.value);

/*
inputChilometri.addEventListener('keypress', function (e) {
  console.log('km');
  console.log(e.key);
});

inputEta.addEventListener('keypress', function (e) {
  console.log('eta');
  console.log(e.key);
});
*/

const inputGenera = document.querySelector('input[type="button"]');

inputGenera.addEventListener('click', function (e) {
  console.log(inputChilometri.value);
  console.log(inputEta.value);
  console.log(prezzoBiglietto.value0f);

  if (inputEta.value <= 18) {
    sconto20;
    console.log({ sconto20 });
  } else if (inputEta.value >= 65) {
    sconto40;
    console.log({ sconto40 });
  } else inputEta.value;
  prezzoBiglietto;
});

// 3. salvo in una variabile il numero di chilometri
const numeroChilometri = inputChilometri;

// 4. salvo in una variabile l'età del passeggero
const numeroEta = inputEta;

console.log({ numeroChilometri });
console.log({ numeroEta });
// 5. il prezzo del biglietto sarà definito in base ai km 0.21
const prezzoalKm = '0.12';

// 6. calcolo prezzo biglietto
const prezzoBiglietto = numeroChilometri * prezzoalKm;
console.log(prezzoBiglietto.value);

// 7. istruzione condizionale
//  -SE IL PASSEGGERO HA MENO DI 18 ANNI SCONTO DEL 20%
//  -ALTRIMENTI SE IL PASSEGERO HA PIU DI 65 ANNI SCONTO DEL 40%
//  -ALTRIMENTI IL PREZZO NON SARA SCONTATO

const calcoloSconto20 = (prezzoBiglietto * 20) / 100;

const sconto20 = prezzoBiglietto - calcoloSconto20;

const calcoloSconto40 = (prezzoBiglietto * 40) / 100;

const sconto40 = prezzoBiglietto - calcoloSconto40;

// console.log('il prezzo del biglietto è', prezzoBiglietto.toFixed(2));
