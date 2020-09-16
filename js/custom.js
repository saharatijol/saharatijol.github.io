'use strict';

$().ready(function() {
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text("Let's chat!" + recipient)
    modal.find('.modal-body input').val(recipient)
  });

  /*-------- Typing Effect -----------*/
    const texts = ['a Web Developer', 'persistent', 'creative', 'quirky 🤡'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

  (function typeEffect() {
      if(count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.querySelector('.type-effect').textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(typeEffect, 150);
  })();



});
