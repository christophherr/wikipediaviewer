// @ts-check @ignore $
$(document).ready(() => {
  $('#clearButton').click(() => {
    $('#searchTerm').val('');
    $('.articles-list').html('');
  });

  $('#search').submit((event) => {
    event.preventDefault();
    const searchTerm = $('#searchTerm').val();
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${
      searchTerm
    }&callback=?`;
    console.log(apiUrl);

    $.getJSON(apiUrl, (data) => {
      $('.articles-list').html('');
      for (let i = 0; i < data[1].length; i++) {
        const newItem = $(`<a href='${data[3][i]}'
        target='_blank'><li><b>${data[1][i]}</b> -
        ${data[2][i]}</li></a>`).hide();

        $('.articles-list').append(newItem);
        newItem.slideDown('slow');
      }
    });
  });
});
