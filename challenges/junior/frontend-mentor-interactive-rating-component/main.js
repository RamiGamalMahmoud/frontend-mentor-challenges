let submit = document.getElementById("submit");

submit.addEventListener('click', () => {

  let stars = document.querySelectorAll('input[name="number"]');
  let selectedStarsElement = document.getElementById('stars');

  let selectionCard = document.getElementById('star-container');

  let thankStatCard = document.getElementById('thank-stat-container');

  for(const radio of stars){
    if(radio.checked){
      selectedStarsElement.textContent = `${radio.value}`;

      selectionCard.classList.toggle('hidden');
      thankStatCard.classList.toggle('hidden');
    }
  }

  
});