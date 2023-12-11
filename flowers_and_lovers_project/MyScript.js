function changeLanguage() {
    var englishContent = document.getElementsByClassName('english-content');
    var spanishContent = document.getElementsByClassName('spanish-content');

    for (var i = 0; i < englishContent.length; i++) {
      englishContent[i].style.display = (englishContent[i].style.display === 'none') ? 'block' : 'none';
    }

    for (var i = 0; i < spanishContent.length; i++) {
      spanishContent[i].style.display = (spanishContent[i].style.display === 'none') ? 'block' : 'none';
    }
  }