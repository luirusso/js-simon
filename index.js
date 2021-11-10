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

for(let i = 0; i < 5; i++) {
    generatedNumbers.push(getRandomNumber(1, 99));
}

numbersContainer.innerHTML = generatedNumbers;

const timer = setTimeout(() => {
    
    numbersContainer.innerHTML = '';

}, 3000);

const promptTimer = setTimeout(() => {
    
    for(i = 1; i < 6; i++){

        const userPrompt = parseInt(prompt(`Inserire il ${i}° numero comparso`));
        console.log(userPrompt);

        inputNumbers.push(userPrompt);
    }

    console.log(inputNumbers);

}, 3100);

const correctNumbers = inputNumbers.filter(([i]) => {
    if(i == generatedNumbers) {
        return true;
    }

    return false;

});

console.log(correctNumbers);


/**
 * Generate unique random numbers
 */

 function getRandomNumber(min, max) {

    let numbers = '';

    do {
        numbers += (Math.floor(Math.random() * max) + min);
    } while (numbers != numbers);

    return numbers;
};