$(document).ready(function() {

  $.ajax({
    url:'http://itrash.cloud/json/weight_day_json.php',
    type:'POST',
    data:{}
  }).done(function(data){
    console.log(data);
  }).fail(function() {
    console.log("error");
  });

  graph_write();
});

function graph_write (){
  var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container'
    },
    xAxis: {
        type: 'datetime'
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
               216.4, 194.1, 95.6, 54.4],
        pointStart: Date.UTC(2019, 9, 29),
        pointInterval: 60 * 1000 * 60
    }]
  });
}
