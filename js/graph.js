$(document).ready(function() {

  $.ajax({
    url:'http://itrash.cloud/json/weight_day_json.php',
    type:'POST',
    dataType:'json',
    data:{}
  }).done(function(data){
    var graph_data = [];
    console.log(data);
    for (var i = 1 ; i <= 12 ; i++){
    
    }
    $.each(data, function(index, value){
      graph_data.push([ value['time'] , Number(value['count']) ]);
    });
    console.log(graph_data);
    graph_write(graph_data);
  }).fail(function() {
    console.log("error");
  });
  graph_write([[22,23],[24,24]]);

});

function graph_write (data){
  var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container'
    },
    xAxis: {
        type: 'datetime'
    },
    series: [{
        /*data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
               216.4, 194.1, 95.6, 54.4],*/
        data: data,
        pointStart: Date.UTC(2019, 9, 29),
        pointInterval: 60 * 1000 * 60
    }]
  });
}
