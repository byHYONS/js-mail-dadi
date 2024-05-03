# ESERCIZIO: Mail / Gioco dei Dadi

>[!INFO]
>
> nome repo: js-mail-dadi

### Mail:
1. Chiedi all’utente la sua email;
2. controlla che sia nella lista di chi può accedere;
3. stampa un messaggio appropriato sull’esito del controllo.

### Gioco dei dadi:
1. Generare un numero random da `1 a 6`, sia per il giocatore sia per il computer.
2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
- Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
- Se dobbiamo confrontare qualcosa che “cosa” ci serve?
- Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare;
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare;
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano;
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”.

## SVOLGIMENTO:
### MAIL
1. Dichiaro var, con il prompt chiedo all'utente di immettere la sua email e salvo l'email dell'utente;
2. Creo un arrey di nomi che confronterò con il nome dell'utente;
3. Dichiaro una variabile `trovato` con valore `false`:
```
let trovato = false;
```
4. creo una istruzione di iterazione per ciclare tutte le email presenti nell'arrey. All'interno del ciclo for metto una istruzione condizionale con condizione che una delle email presenti nell'arrey deve essere uguale alla email immessa dall'utente, se la condizione è vera la variabile `trovato` avra il valore di `true`:
```
or (let i = 0; i<emailLista.length; i++){
    console.log(emailLista[i]);

    if (emailLista[i] === emailUtente){
        trovato = true;
    }    
}
```
5. Scrivo tramite alert una notifica con il risultato all'utente:
```
alert(trovato ? 'email presente nella lista' : 'email assente nella lista')

```
##### FINE

### GIOCO DEI DADI
1. dichiaro due variabili con un arrey dove metto `6 numeri da 1 a 6`;
2. creo un bottone dove ad ogni click equivale ad un lancio di dadi, faccio un eventlistener dove ad ogni click avviene la scelta random dei 6 numeri:
```
document.querySelector('button').addEventListener('click', function(){
    let randomUtente = Math.floor(Math.random() * dadoUtente.length);
    let numeroUtente = dadoUtente[randomUtente];
    console.log(numeroUtente);
    let randomBot = Math.floor(Math.random() * dadoBot.length);
    let numeroBot = dadoBot[randomBot];
    console.log(numeroBot);

    ...
});
```
3. creo una istruzione condizionale dove inposto le regole per decretare chi vince o chi perde ed eventualmente il pareggio:
```
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
```
4. in fine sempre nelle istrizioni condizionali riporto il risultato sia in console che sull'html.

##### FINE
