  // Get the necessary DOM elements
  const hamburger = document.querySelector('.humburger');
  const menu = document.querySelector('.menu');
  const closeBtn = document.querySelector('.close');
  const workSection = document.querySelector('.work');
  const aboutSection = document.querySelector('.about-me');
  const contactSection = document.querySelector('.contact-form');

  // Show the mobile menu when the hamburger button is clicked
  hamburger.addEventListener('click', () => {
    menu.style.display = "block";
  });


  // Scroll to the work section when the Portfolio menu item is clicked
  const portfolioMenuItem = document.querySelector('.menu-item:nth-of-type(1)');
  portfolioMenuItem.addEventListener('click', () => {
    workSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Scroll to the about section when the About menu item is clicked
  const aboutMenuItem = document.querySelector('.menu-item:nth-of-type(2)');
  aboutMenuItem.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Scroll to the contact section when the Contact menu item is clicked
  const contactMenuItem = document.querySelector('.menu-item:nth-of-type(3)');
  contactMenuItem.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
