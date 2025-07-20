// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Form Validation (basic)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill out all fields.');
      return false;
    }

    if (!validateEmail(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      return false;
    }
  });
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// Image modal logic
const profilePic = document.getElementById('profilePic');
const imgModal = document.getElementById('imgModal');
const closeModal = document.getElementById('closeModal');

profilePic.addEventListener('click', () => {
  imgModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  imgModal.style.display = 'none';
});

// Optional: Close modal if user clicks outside the image
window.addEventListener('click', (e) => {
  if (e.target === imgModal) {
    imgModal.style.display = 'none';
  }
});
