var site = site || {};
var offset = $(document).scrollTop();

$(document).ready(function(){

  $('.box-error').hide();

  $("#enviar").click(function(){

    var cont = 0;
    $("#formDados input").each(function(){
      if($(this).val() == "") {
         $(this).parent().addClass('erro');
         cont++;
         $('.box-error').show();
      }
    });
    if(cont == 0) {
        var data = {
            "frequency": $('#frequency option:selected').val(),
            "value": $('#value').val(),
            "first_name": $('#first_name').val(),
            "last_name": $('#last_name').val(),
            "complete_name": $('#tx_nome').val() + ' ' + $('#tx_lastname').val(),
            "email": $('#email').val(),
            "document": $('#document').val(),
            "card_number": $('#card_number').val(),
            "cvv": $('#cvv').val(),
            "validity": $('#validity').val(),
            "accept_contact": $('#accept_contact').is(':checked')
        }
        $.ajax({
            accept: "application/json",
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: 'https://trackmob-frontend-test.firebaseio.com/RdMa77REkLXsh9ec0WcWNbff1dw2/rayannecmoro/donors.json',
            data: JSON.stringify(data),
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function(data) {
            alert('ERRO');
        });      
    }

  });

  $('#value').keyup(function() {      
     $('.valor').html($(this).val()) 
  });
  $('#frequency').change(function() {      
     $('.periodo').html($('#frequency option:selected').val()) 
  });

  $("#document").mask("999.999.999-99");
  $("#card_number").mask("9999 9999 9999 9999");
  $("#cvv").mask("999");
  $("#validity").mask("99/99");

  $('#value').maskMoney();

});


