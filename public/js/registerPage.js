const form = document.getElementById('registerForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    name, email, login, password, passwordRepeat,
  } = event.target;

  const response = await fetch('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name.value,
      login: login.value,
      email: email.value,
      password: password.value,
      passwordRepeat: passwordRepeat.value,
    }),
  });
  const data = await response.json();
  console.log(data.message);
  if (data.message === 'success') {
    window.location.href = '/';
  } else {
    const errorMessage = await response.text();
    console.log(errorMessage);
    alert(errorMessage);
  }
});
