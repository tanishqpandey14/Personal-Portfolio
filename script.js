// ===== TAB NAVIGATION =====
const tabBtns = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".section");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    sections.forEach((s) => s.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

// ===== CONTACT FORM =====
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector(".btn-submit");
    const original = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json();

      if (data.success) {
        showToast("Message sent!", "success");
        form.reset();
      } else {
        showToast("Something went wrong. Try again.", "error");
      }
    } catch {
      showToast("Network error. Please try again.", "error");
    } finally {
      btn.innerHTML = original;
      btn.disabled = false;
    }
  });
}

// ===== TOAST =====
function showToast(message, type = "success") {
  const old = document.querySelector(".toast");
  if (old) old.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem; right: 2rem;
    background: ${type === "success" ? "#f59e0b" : "#ef4444"};
    color: ${type === "success" ? "#000" : "#fff"};
    padding: 0.9rem 1.4rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.88rem;
    z-index: 9999;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    animation: toastIn 0.4s ease;
    max-width: 300px;
  `;

  document.head.insertAdjacentHTML(
    "beforeend",
    `
    <style>@keyframes toastIn {
      from { opacity:0; transform:translateY(16px); }
      to   { opacity:1; transform:translateY(0); }
    }</style>
  `,
  );

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// ===== LIGHT / DARK THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Load saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
  themeIcon.classList.replace("fa-sun", "fa-moon");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  themeIcon.classList.toggle("fa-sun", !isLight);
  themeIcon.classList.toggle("fa-moon", isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
