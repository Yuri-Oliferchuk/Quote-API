const changeButton = document.getElementById('change-quote');
// const submitButton = document.getElementById('change-quote');
const deleteButton = document.getElementById('delete-quote');
const findButton = document.getElementById('find-quote');
// const newQuoteContainer = document.getElementById('new-quote');
const resultQuoteContainer = document.getElementById('result-quote');
const foundQuoteContainer = document.getElementById('found-quote');

findButton.addEventListener('click', () => {
    const id = document.getElementById('id').value;
    const quoteField = document.getElementById('quote');
    const personField = document.getElementById('person');

  fetch(`/api/quotes/${id}`, {
    method: 'GET',
  })
  .then(response => response.json())
  .then(({quote}) => {
        const newQuote = document.createElement('div');
        foundQuoteContainer.innerHTML = '';
        if (quote) {
            quoteField.value = quote.quote;
            personField.value = quote.person;
            newQuote.innerHTML = '<p align="center">Founded!!!</p>';
            foundQuoteContainer.appendChild(newQuote);
        } else {
            quoteField.value = '';
            personField.value = '';
            newQuote.innerHTML = '<p align="center">Not found!!!</p>';
            foundQuoteContainer.appendChild(newQuote);
        }
        
      });
});

changeButton.addEventListener('click', () => {
    const id = document.getElementById('id').value;
    const quote = document.getElementById('quote').value;
    const person = document.getElementById('person').value;

  fetch(`/api/quotes?id=${id}&quote=${quote}&person=${person}`, {
    method: 'PUT',
  })
  .then(response => response.json())
//   .then(({quote}) => {
//     const newQuote = document.createElement('div');
//     newQuote.innerHTML = `
//     <h3>Congrats, your quote was added!</h3>
//     <div class="quote-text">${quote.quote}</div>
//     <div class="attribution">- ${quote.person}</div>
//     <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
//     `
//     newQuoteContainer.appendChild(newQuote);
//   });
});
