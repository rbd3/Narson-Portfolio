  // Get the necessary DOM elements
  const hamburger = document.querySelector('.humburger');
  const menu = document.querySelector('.menu');
  const closeBtn = document.querySelector('.closebtn');
  const workSection = document.querySelector('.work');
  const aboutSection = document.querySelector('.about-me');
  const contactSection = document.querySelector('.contact-form');

  // Show the mobile menu when the hamburger button is clicked
  hamburger.addEventListener('click', () => {
    //menu.style.display = "block";
    document.getElementById("myNav").style.width = '100%';

  });


  closeBtn.addEventListener('click', () => {
    document.getElementById("myNav").style.width = "0%";
  } );


  // Scroll to the work section when the Portfolio menu item is clicked
  const Portfolio = document.querySelector('#portfolio');
  Portfolio.addEventListener('click', () => {
    workSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("myNav").style.width = "0%";
  });

  // Scroll to the about section when the About menu item is clicked
  const about = document.querySelector('#about');
  about.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("myNav").style.width = "0%";
  });

  // Scroll to the contact section when the Contact menu item is clicked
  const contact = document.querySelector('#contact');
  contact.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("myNav").style.width = "0%";
  });
