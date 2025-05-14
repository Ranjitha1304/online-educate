
  const loginBtn = document.querySelector(".btn-login");
  const signupBtn = document.querySelector(".btn-signup");
  const modal = document.getElementById("authModal");
  const backdrop = document.getElementById("modalBackdrop");

  const tabLogin = document.getElementById("tab-login");
  const tabRegister = document.getElementById("tab-register");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
//   const authHeading = document.getElementById("auth-heading");

  const authImage = document.getElementById("auth-image");

  function openModal(defaultTab) {
    modal.style.display = "flex";
    backdrop.style.display = "block";
    if (defaultTab === "login") {
      showLogin();
    } else {
      showRegister();
    }
  }

  function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }

  function showLogin() {
    tabLogin.classList.add("active");
    tabRegister.classList.remove("active");
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    // authHeading.innerText = "Exam the is simply";
    authImage.src = "assets/images/login.png";
  }

  function showRegister() {
    tabRegister.classList.add("active");
    tabLogin.classList.remove("active");
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    // authHeading.innerText = "welcome to ways simply";
    authImage.src = "assets/images/register.png";
  }

  loginBtn.addEventListener("click", () => openModal("login"));
  signupBtn.addEventListener("click", () => openModal("register"));

  tabLogin.addEventListener("click", showLogin);
  tabRegister.addEventListener("click", showRegister);

  backdrop.addEventListener("click", closeModal);

  function togglePassword(fieldId, icon) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
      field.type = "text";
      icon.innerText = "🙈";
    } else {
      field.type = "password";
      icon.innerText = "👁️";
    }
  }

  // Validation (basic)
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    if (!username || !password) {
      alert("Please enter all fields in login.");
      return;
    }
    alert("Login Successful!");
    closeModal();
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("regEmail").value.trim();
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    if (!email || !username || !password) {
      alert("Please enter all fields in register.");
      return;
    }
    if (!email.includes("@")) {
      alert("Invalid email.");
      return;
    }
    alert("Registration Successful!");
    closeModal();
  });
