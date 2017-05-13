    var api_key="d6d61d725d27418cbd8ac3ff86a4454a";
    $(document).ready(function() {

      $("#searchButton").on("click", function() {
      event.preventDefault();
      var searchInput = $("#searchInput").val();
      console.log(searchInput);
      var numRecs = $("#numberRecords").val();
      console.log(numRecs);
      var start = $("#startYearInput").val();
      var end = $("#endYearInput").val();
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key="+ api_key+"?q="+searchInput+"?page="+numRecs;

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(response);
          var results = response.docs;
          // var title = results[0].headline.main;
          var author = results[0].source;
          var section = results[0].subsection_name;
          var date = results[0].pub_date;
          var site = results[0].web_url;
          
        });
    });






    });
    