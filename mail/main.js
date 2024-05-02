// reset
'use scrict'

// 1. Dichiaro var, con il prompt chiedo all'utente di immettere la sua email e salvo l'email dell'utente;
// 2. Creo un arrey di email che confronterò con il nome dell'utente;
// 3. Dichiaro una variabile trovato con valore false;
// 4. creo una istruzione di iterazione per ciclare tutte le email presenti nell'arrey. All'interno del ciclo for metto una istruzione condizionale con condizione che una delle email presenti nell'arrey deve essere uguale alla email immessa dall'utente, se la condizione è vera la variabile trovato avra il valore di true;
// 5. Scrivo tramite alert una notifica con il risultato all'utente;

const emailLista = ['samuele', 'jonathan', 'marsela', 'elisa', 'paola', 'pietro', 'gaetano'];
console.log(emailLista);

const emailUtente = prompt('Inserisci il tuo nome').toLowerCase();
console.log({emailUtente});

let trovato = false;

for (let i = 0; i<emailLista.length; i++){
    console.log(emailLista[i]);

    if (emailLista[i] === emailUtente){
        trovato = true;
    }    
}

console.log(trovato);
console.log(trovato ? 'Nome Presente' : 'Nome Assente');

alert(trovato ? 'La tua email è presente nella lista, puoi accedere al servizio!' : 'La tua email non è nella lista, non puoi accedere al servizio!')

