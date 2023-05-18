const hamburger = document.querySelector('.humburger');
const closeBtn = document.querySelector('.closebtn');
const workSection = document.querySelector('.work');
const aboutSection = document.querySelector('.about-me');
const contactSection = document.querySelector('.contact-form');

// Show the mobile menu when the hamburger button is clicked
hamburger.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
});

closeBtn.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
});

const Portfolio = document.querySelector('#portfolio');
Portfolio.addEventListener('click', () => {
  workSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('myNav').style.width = '0%';
});

const about = document.querySelector('#about');
about.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('myNav').style.width = '0%';
});

const contact = document.querySelector('#contact');
contact.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('myNav').style.width = '0%';
});

// Contact for validation and giving error feedback
const form = document.querySelector('form');
function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    // If it fits requirement[lowercase], ahead
    form.submit();
  } else {
    // Otherwise show dynamic error below
    let errorMessage = form.querySelector('.errorMsg');
    if (errorMessage) {
      form.removeChild(errorMessage);
    }
    errorMessage = document.createElement('p');
    errorMessage.classList.add('errorMsg');
    errorMessage.textContent = 'Oops! An error has occurred, your email must be lowercase.';
    form.appendChild(errorMessage);
  }
}
form.addEventListener('submit', handleSubmit);