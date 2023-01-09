document.querySelector('.favorite-product').addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete-btn')) {
    console.log('delete click');
    const house = event.target.closest('.card');
    const houseId = Number(house.id);
    const result = await fetch(`/favorites/delete/${houseId}`, {
      method: 'DELETE',
    });
    const data = await result.json();
    if (data.message === 'done') {
      house.remove();
    }
  }
});
