// Code your solutions in this file
function writeCards(array, event) {
    let thankYous = [];

    for (let i=0; i < array.length; i++) {
        thankYous.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thankYous
}


function countdown(countdown) {
    while (countdown > 0){
        console.log(countdown);
        countdown -= 1;
    }
    console.log(countdown);
}