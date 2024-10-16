// Toggle navigation menu on small screens
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Show and hide sections based on navigation
const navItems = document.querySelectorAll('#nav-links a');
const sections = document.querySelectorAll('.section-content');

navItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = item.getAttribute('href').substring(1);

    sections.forEach(section => {
      section.classList.add('hidden');
    });

    const targetSection = document.getElementById(targetId);
    targetSection.classList.remove('hidden');

    // Close the menu after selection on small screens
    navLinks.classList.remove('active');
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.classList.toggle('dark-mode');
  });
});
