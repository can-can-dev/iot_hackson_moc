$(document).ready(function() {

  $.ajax({
    url:'http://itrash.cloud/json/weight_day_json.php',
    type:'POST',
    dataType:'json',
    data:{}
  }).done(function(data){
    console.log(data);
  }).fail(function() {
    console.log("error");
  });

});
