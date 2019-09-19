import { eventNames } from "cluster";

// Code your solutions in this file
let cards = (["Lisa", "Kaitlin", "Jan", "surprise"]);


function writeCards(cards) {
    var newCards = [];
   for (let i = 0; i < cards.length; i++) 
    
   {
        newCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
   }
   return newCards;
   }
   


   
   



   function countdown(number = 10)
    { 
        while (number >= 0) {
            console.log(number--);
        }
    } 
   