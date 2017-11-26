function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    // var request = {
    //     resource_id: 'd618ce2e-7d29-4569-97bd-d97bd5831924', // the resource id
    //     limit: 5, // get 5 results
    //     q: 'jones' // query for 'jones'
    // };

    // $.ajax({
    //     url: 'https://data.qld.gov.au/api/action/datastore_search',
    //     data: request,
    //     dataType: 'jsonp',
    //     success: function (results) {
    //         console.log(results);
    //     }
    // });

    var data = {
        resource_id: 'd618ce2e-7d29-4569-97bd-d97bd5831924', // the resource id
        limit: 5, // get 5 results
        q: 'jones' // query for 'jones'
      };
      $.ajax({
        url: 'https://data.qld.gov.au/api/action/datastore_search',
        data: data,
        dataType: 'jsonp',
        success: function(data) {
          alert('Total results found: ' + data.result.total)
        }
      });
}