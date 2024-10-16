// Toggle navigation menu on small screens
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle between sections
const navItems = document.querySelectorAll('#nav-links a');
const sections = document.querySelectorAll('.section-content');

navItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();

    const sectionToShow = this.getAttribute('href').substring(1);

    sections.forEach(section => {
      section.classList.add('hidden');
    });

    document.getElementById(sectionToShow).classList.remove('hidden');
  });
});

// Toggle dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('a').forEach(link => {
    link.classList.toggle('dark-mode');
  });
});
