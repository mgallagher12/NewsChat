$(document).ready(function() {
  $('a').on('click', function() {
    $("#placeHolderImage").hide();
    var x = $(this).data('category');
    console.log(x);
    var apiKey = "eff8bb96fcc245ae99c6db2543885b84"
    var queryURL = "https://newsapi.org/v1/articles?source=" + x + "&sortBy=top&apiKey=" + apiKey;

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      for (var i = 0; i < response.articles.length; i++) {
        var random = Math.floor(Math.random() * response.articles.length);
        var articleDiv = $('<div>');
        var articleImage = $('<img>');
        articleImage.attr('src', response.articles[random].urlToImage)
        var articleTitle = $('<h2>').text(response.articles[random].title);
        var articleDescription = $('<p>').text(response.articles[random].description);

        articleDiv.append(articleTitle);
        articleDiv.append(articleImage);
        articleDiv.append(articleDescription);

        $('#placeHolder').html(articleDiv);
      }
    })
  });
})