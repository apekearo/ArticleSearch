    var api_key="d6d61d725d27418cbd8ac3ff86a4454a";
    $("#search").on("click", function() {
      var article;
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json&api_key="+ api_key;

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          // for (var i = 0; i < results.length; i++) {
          //   // var gifDiv = $("<div class='item'>");

          //   // var rating = results[i].rating;

          //   // var p = $("<p>").text("Rating: " + rating);

          //   // var personImage = $("<img>");
          //   // personImage.attr("src", results[i].images.fixed_height.url);

          //   // gifDiv.prepend(p);
          //   // gifDiv.prepend(personImage);

          //   // $("#gifs-appear-here").prepend(gifDiv);
          // }
        });
    });