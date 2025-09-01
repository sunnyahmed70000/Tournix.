// User balance system
let balance = 0;

function deposit() {
  balance += 100;
  document.getElementById("balance").innerText = "৳" + balance;
}

function withdraw() {
  if (balance >= 50) {
    balance -= 50;
    document.getElementById("balance").innerText = "৳" + balance;
  } else {
    alert("Not enough balance!");
  }
}

function showFreeFire() {
  document.getElementById("popup").style.display = "flex";
  startCountdown();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openMenu() {
  document.getElementById("menu").style.display = "flex";
}

function closeMenu() {
  document.getElementById("menu").style.display = "none";
}

function logout() {
  window.location.href = "index.html";
}

// Countdown
function startCountdown() {
  let count = 10;
  let interval = setInterval(() => {
    document.getElementById("countdown").innerText = "Match starts in " + count + "s";
    count--;
    if (count < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerText = "Match Started!";
    }
  }, 1000);
}

// Admin Login
function adminLogin() {
  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid credentials!";
  }
}