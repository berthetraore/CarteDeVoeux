var q = $('.question');          //Mémorisation du sélecteur dans une variable pour optimiser le code
q.css('background', '#92a8d1');  //Couleur d'arrière-plan
q.css('border-style', 'groove'); //Type de la bordure
q.css('border-width', '4px');    //Largeur de la bordure
q.css('width', '900px');         //Largeur des balises <div> de classe « question »
q.css('height', '250px');        //Hauteur des balises <div> de classe « question »
q.css('margin', '20px');         //Marge autour des balises <div> de classe « question »
$('.texte').css('float', 'left');
$('.texte').css('width', '90%');
$('img').css('float', 'right');
$('img').css('margin-top', '80px');

$(function() {
    // Dissimulation des réponses
    $('.reponse').hide();
})
$('a').hover(
    function() { 
      $('.reponse').show();
      if ($(':radio[id="r1"]:checked').val()) {
        $('#img1').attr('src', 'images/bon.png'); 
        $('#reponse1').css('color', 'green');
      }  
      else {
        $('#img1').attr('src', 'images/mauvais.png');
        $('#reponse1').css('color', 'red');
      } 
  
      if ($(':radio[id="r4"]:checked').val()) {
        $('#img2').attr('src', 'images/bon.png');
        $('#reponse2').css('color', 'green');
      }
      else {
        $('#img2').attr('src', 'images/mauvais.png');
        $('#reponse2').css('color', 'red');
      } 
  
      if ($(':radio[id="r8"]:checked').val()) {
        $('#img3').attr('src', 'images/bon.png'); 
        $('#reponse3').css('color', 'green');
      }
      else {
        $('#img3').attr('src', 'imges/mauvais.png');
        $('#reponse3').css('color', 'red');
      }
    },
    function() { 
      $('.reponse').hide(); 
      $('#img1').attr('src', 'images/question.png');
      $('#img2').attr('src', 'images/question.png');
      $('#img3').attr('src', 'images/question.png');
    }
  );