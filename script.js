/* Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

//num random array,
//alert con 5num random
//timeout(30 secondi) 5 prompt x inserire uno alla volta tutti i num. (array 2);
//alert con scritto quanti num e quali sono stati indovinati

let randomArray = [];

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 11);

    if(!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber);
    }
    else {
        i--
    }
    
}

alert(` guarda bene i seguenti numeri 
                ${randomArray}`);

/* Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). */

let userArray = []
let usernumber;
let numeriIndovinati = [];

setTimeout(function(){
    for (let i = 0; i < 5; i++) {
             usernumber =  parseInt(prompt("inserisci uno alla volta i numeri visti prima"));
            userArray.push(usernumber);
    }
    randomArray.forEach((numeroR) => {
        userArray.forEach((numeroUser) => {
            if (numeroR == numeroUser) {
                numeriIndovinati.push(numeroUser);
            }
        })

    })

    if (numeriIndovinati.length > 0) {
        alert(`bravo/a! hai indovinato i seguenti numeri 
        ${numeriIndovinati}`);
    }
    else {
        alert("mi dispiace... ma non hai indovinato nessun numero..")
    }
    
}, 30000);

console.log(userArray);

/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

console.log(numeriIndovinati);

