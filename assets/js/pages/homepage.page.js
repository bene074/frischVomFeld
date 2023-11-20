document.addEventListener('DOMContentLoaded', function () {
    var textToShow = document.getElementById('textToShow');
    var additionalText = document.getElementById('additionalText');
    var toggleLink = document.getElementById('toggleLink');

    toggleLink.addEventListener('click', function () {
      // Überprüfen Sie den Status und ändern Sie den Text entsprechend
      if (additionalText.style.display === 'none' || additionalText.style.display === '') {
        additionalText.style.display = 'inline'; // oder 'block', je nach Bedarf
        toggleLink.textContent = 'Weniger Anzeigen';
      } else {
        additionalText.style.display = 'none';
        toggleLink.textContent = 'Mehr Anzeigen ';
      }
    });
  });
