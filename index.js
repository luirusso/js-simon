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

let resultsContainer = document.querySelector('.result-container');

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
    
    for(i = 0; i < generatedNumbers.length; i++){

        const userPrompt = parseInt(prompt(`Inserire il ${i + 1}° numero comparso`));
        // console.log(userPrompt);

        inputNumbers.push(userPrompt);
    }

    console.log(inputNumbers);

    let correctNumbers = generatedNumbers.filter((numero) => {
    
        if(inputNumbers.includes(numero)) {
            
            return true;
    
        }
    
    });
    
    console.log(correctNumbers);

    resultsContainer.innerHTML = `
    <div class="result">
        Complimenti, i numeri che hai indovinato sono: ${correctNumbers};
    </div>
    `

}, 3100);




/**
 * Generate unique random numbers
 */

 function getRandomNumber(min, max) {

    let numbers = 0;

    do {
        numbers += (Math.floor(Math.random() * max) + min);
    } while (numbers != numbers);

    return numbers;
};