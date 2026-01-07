document.getElementById('about-toggle').addEventListener('click', function(e) {
  e.preventDefault();
  var aboutContent = document.getElementById('about-content');
  aboutContent.style.display = aboutContent.style.display === 'none' ? 'block' : 'none';
});