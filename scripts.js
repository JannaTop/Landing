setTimeout(function() {
  console.log(window.innerWidth < 768);
  if (window.innerWidth < 768) {
    var cardsContainer = document.getElementsByClassName('cards');
    for (var i = 0; i < cardsContainer.length; i++) {
      cardsContainer[i].style.flexDirection = 'column';
      cardsContainer[i].style.alignItems = 'center';
      cardsContainer[i].style.justifyContent = 'center';
    }
  }
  
}, 500);