function update() {
    $('#clock').html(moment().format('H:mm'));
    $('#clock_day').html(moment().format('dddd'));
    $('#clock_date').html(moment().format('D MMM'));
}

setInterval(update, 10000);

$( document ).ready(function() {
    console.log( "ready!" );
    update();

    /*document.getElementById('myChart').config = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            data: [37.4, 36.6, 40.48, 41.13, 42.05, 40.42, 43.09],
            label: 'Price of TRI.N'
          }]
        }
      }*/
});