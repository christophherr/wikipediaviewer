$(document).ready(function() {

  $("#clearButton").click( function() {
    $("#searchTerm").val('');
    $(".articles-list").html("");
  });

  $("#search").submit( function(event) {
    event.preventDefault();
    var searchTerm = $("#searchTerm").val();
    var apiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm + "&callback=?";
    console.log(apiUrl);

    $.getJSON(apiUrl, function(data) {
      $(".articles-list").html("");
      for (var i = 0; i < data[1].length; i++) {
        var newItem = $("<a href=" + data[3][i] + " target='_blank'><li><b>" + data[1][i] + "</b> - " + data[2][i] + "</li></a>").hide();

        $(".articles-list").append(newItem);
        newItem.slideDown('slow');
      }
    });
  });
});
