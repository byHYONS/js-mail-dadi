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
