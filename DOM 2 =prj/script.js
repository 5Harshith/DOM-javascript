const quotes=[{quote:"The only way to do great work is to love what you do." ,person:"Steve Jobs"},
              {quote:"In three words I can sum up everything I've learned about life: it goes on.",person:"Robert Frost"},
              {quote:"Life is what happens when you're busy making other plans",person:"John Lennon"},
              {quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",person:"Ralph Waldo Emerson"},
              {quote:"The purpose of our lives is to be happy.",person:"Dalai Lama"}
              ]


const button =document.querySelector('#new-quote');
const person =document.querySelector('.person');
const quote =document.querySelector('.quote');

button.addEventListener('click',function(){
  const random =Math.floor(Math.random() * quotes.length)
  person.innerText =quotes[random].person;
  quote.innerHTML =quotes[random].quote;
})
