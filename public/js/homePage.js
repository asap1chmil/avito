document.querySelector('.blockProducts').addEventListener('click', async (event) => {
  if (event.target.classList.contains('favorite-btn')) {
    event.preventDefault();
    console.log('click cool');
    const favoriteBtn = event.target;
    const house = favoriteBtn.closest('.card');
    const id = Number(house.id);
    console.log(id);
    const response = await fetch('/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
  }
});
