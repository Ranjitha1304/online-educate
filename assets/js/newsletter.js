document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const errorMsg = document.getElementById('errorMsg');
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    errorMsg.textContent = "Email is required.";
    emailInput.focus();
  } else if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    emailInput.focus();
  } else {
    errorMsg.textContent = "";
    alert("Subscribed successfully!");
    emailInput.value = '';
  }
});
