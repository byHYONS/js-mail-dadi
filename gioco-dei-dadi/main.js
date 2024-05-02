// reset
'use strict'

// 1. dichiaro due variabili con un arrey dove metto 6 numeri da 1 a 6;
// 2. creo un bottone dove ad ogni click equivale ad un lancio di dadi, faccio un eventlistener dove ad ogni click avviene la scelta random dei 6 numeri:
// 3. creo una istruzione condizionale dove inposto le regole per decretare chi vince o chi perde ed eventualmente il pareggio:
// 4. in fine sempre nelle istrizioni condizionali riporto il risultato sia in console che sull'html.

const dadoUtente = [1, 2, 3, 4, 5, 6];
const dadoBot = [1, 2, 3, 4, 5, 6];
const risultato = document.querySelector('p');


document.querySelector('button').addEventListener('click', function(){
    
    let numeroUtente = Math.floor(Math.random() * dadoUtente.length) + 1;
    console.log(numeroUtente);
    
    let numeroBot = Math.floor(Math.random() * dadoBot.length) + 1;
    console.log(numeroBot);

    if (numeroUtente > numeroBot){
        console.log('Vince Utente');
        risultato.innerText = `Il tuo numero è ${numeroUtente}, mentre il numero del computer è ${numeroBot}. HAI VINTO!`;
    } else if (numeroUtente === numeroBot){
        console.log('Pareggio');
        risultato.innerText = `Il tuo numero è ${numeroUtente}, mentre il numero del computer è ${numeroBot}. PAREGGIO!`;
    } else {
        console.log('Hai Perso');
        risultato.innerText = `Il tuo numero è ${numeroUtente}, mentre il numero del computer è ${numeroBot}. HA VINTO IL COMPUTER!`;
    }

})

// FINE




