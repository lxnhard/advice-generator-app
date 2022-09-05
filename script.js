let apiUrl = 'https://api.adviceslip.com/advice';

let adviceContainer = document.querySelector('.advice');
let button = document.querySelector('.button');
let advice = "";

function loadAdvice() {
  return fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    advice = response.slip.advice;
    adviceContainer.innerText = "“"+advice+"”";
  })
  .catch(function(e) {
    console.error(e);
    hideLoader();
  });
}

loadAdvice();

button.addEventListener('click', function() {
  loadAdvice();
});
