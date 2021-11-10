/**
 * Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
 */

let numbersContainer = document.querySelector('.numbers-container');

numbersContainer.innerHTML = getRandomNumber(1, 9, 5);

const timer = setTimeout(() => {
    
    numbersContainer.innerHTML = '';

}, 30000);


/**
 * Generate random numbers
 */

 function getRandomNumber(min, max, length) {

    let numbers = '';

    for (let i = 0; i < length; i++) {

        numbers += (Math.floor(Math.random() * max) + min);

    }

    return numbers;
};