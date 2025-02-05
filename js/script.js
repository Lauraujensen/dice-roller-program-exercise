'use strict';

function rollDice(){

    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    // arrays:
    const values = [];
    const images = [];
    
    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src='img/${value}.png'>`); 
        //alt = 'Dice ${value}' kan skrives efter png, hvis billederne ikke vises, så teksten i det mindste vises.
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}