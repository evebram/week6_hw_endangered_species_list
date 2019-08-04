document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const animalCommon = event.target.common_name.value;
      const animalScientific = event.target.scientific_name.value;
      const animalStatus = event.target.status.value;

      const animalEntry = document.createElement('div');

      const common = document.createElement('h3');
      common.textContent = animalCommon;
      animalEntry.appendChild(common);

      const scientific = document.createElement('p');
      scientific.textContent = animalScientific;
      animalEntry.appendChild(scientific);

      const status = document.createElement('p');
      status.textContent = animalStatus;
      animalEntry.appendChild(status);

      speciesList = document.querySelector('#species-list');
      speciesList.appendChild(animalEntry);

      form.reset();

    });

    const deleteButton = document.querySelector('#delete-all');
    deleteButton.addEventListener('click', (event) => {

      const speciesList = document.querySelector('#species-list');
      speciesList.innerHTML = '';

  })

});
