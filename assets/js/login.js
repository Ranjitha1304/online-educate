  const authModal = document.getElementById('authModal');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const authImage = document.getElementById('authImage');
  const imageTitle = document.getElementById('imageTitle');

  // Open modal from nav buttons
  document.querySelector('.btn-login').addEventListener('click', () => {
    openAuthModal('login');
  });

  document.querySelector('.btn-signup').addEventListener('click', () => {
    openAuthModal('register');
  });

  function openAuthModal(mode) {
    authModal.style.display = 'flex';
    if (mode === 'login') {
      showLogin();
    } else {
      showRegister();
    }
  }

  function closeAuthModal() {
    authModal.style.display = 'none';
  }

  function showLogin() {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    authImage.src = 'assets/images/login.png';
    imageTitle.textContent = 'Exam the is simply';
  }

  function showRegister() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
    authImage.src = 'assets/images/register.png';
    imageTitle.textContent = 'welcome to ways simply';
  }

  function handleRegister(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value.trim();
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value.trim();

    if (!email || !username || !password) {
      alert('All fields are required.');
      return;
    }

    const user = { email, username, password };
    localStorage.setItem('user_' + username, JSON.stringify(user));
    alert('Registration successful! Now login.');
    showLogin();
  }

  function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const savedUser = JSON.parse(localStorage.getItem('user_' + username));

    if (savedUser && savedUser.password === password) {
      alert('Login successful!');
      closeAuthModal();
    } else {
      alert('Invalid credentials. Please sign up first.');
    }
  }

  // Open Register Modal
document.querySelectorAll('.btn-signup').forEach(button => {
  button.addEventListener('click', () => {
    openAuthModal('register');
  });
});


