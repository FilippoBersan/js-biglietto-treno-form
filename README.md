Calcolo del prezzo del biglieggto del treno

1. mostro un prompt per il numero chilometri da percorrere
   const chilometri = parseInt(prompt('Inserisci chilometri da percorrere'));

2. mostro un prompt per l'età del passeggero
   const eta = parseInt(prompt('Inserisci età del passeggero'));

3. salvo in una variabile il numero di chilometri
   const numeroChilometri = chilometri;

4. salvo in una variabile l'età del passeggero
   const numeroEta = eta;

5. il prezzo del biglietto sarà definito in base ai km 0.21
   const prezzoalKm = '0.12';

6. calcolo prezzo biglietto
   const prezzoBiglietto = numeroChilometri \* prezzoalKm;

7. istruzione condizionale
   -SE IL PASSEGGERO HA MENO DI 18 ANNI SCONTO DEL 20%
   -ALTRIMENTI SE IL PASSEGERO HA PIU DI 65 ANNI SCONTO DEL 40%
   -ALTRIMENTI IL PREZZO NON SARA SCONTATO
