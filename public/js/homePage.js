document.querySelector('.blockProducts').addEventListener('click', async (event) => {
  if (event.target.classList.contains('favorite-btn')) {
    event.preventDefault();
    console.log('click cool');
    const favoriteBtn = event.target;
    const house = favoriteBtn.closest('.card');
    const id = Number(house.dataset.id);
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

const sort = document.querySelector('.sort');
const htmlContainer = document.querySelector('.blockProducts');

sort.querySelector('.sort-dn').addEventListener('click', async (event) => {
  event.preventDefault();
  console.log('click dn');
  const res = await fetch('/dn');
  const html = await res.text();
  htmlContainer.innerHTML = html;
});

sort.querySelector('.sort-up').addEventListener('click', async (event) => {
  event.preventDefault();
  console.log('click up');
  const res = await fetch('/up');
  const html = await res.text();
  htmlContainer.innerHTML = html;
});
