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

const generatedNumbers = [];

console.log(generatedNumbers);

const inputNumbers = [];
console.log(inputNumbers);

numbersContainer.innerHTML = generatedNumbers;
console.log(numbersContainer);

const timer = setTimeout(() => {
    
    numbersContainer.innerHTML = '';

}, 3000);

const promptTimer = setTimeout(() => {
    
    let userPrompt = parseInt(prompt('Inserire i numeri comparsi a schermo'));
    console.log(userPrompt);

    inputNumbers.push(userPrompt);

}, 3100);

for(let i = 0; i < 5; i++) {
    generatedNumbers.push(getRandomNumber(1, 99, 1));
}


/**
 * Generate random numbers
 */

 function getRandomNumber(min, max, length) {

    let numbers = '';

    do {
        numbers += (Math.floor(Math.random() * max) + min);
    } while (numbers != numbers);

    return numbers;
};