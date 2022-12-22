const logForm = document.getElementById('loginForm');

if (logForm) {
  logForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      login, password,
    } = event.target;
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        login: login.value,
        password: password.value,
      }),
    });
    const data = await response.json();
    if (data.status === 'error') {
      alert(data.message);
    }
    if (data.status === 'success') {
      window.location.assign('/');
    } else {
      const errorMessage = await response.text();
      console.log(errorMessage);
      alert(errorMessage);
    }
  });
}
