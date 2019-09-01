$(document).ready(function() {
  // Populates the header and footer
  $('#header').append(headerText);
  $('#sub-header').append(subHeader);
  $('#footer').append(footerText);

  // Shuffles the bingo board
  shuffle(data.squares);

  for (i = 0; i < 24; i++) {
    if (i == 12) {
      $('#bingo-table').append("<div data-value='1' class='freesquare' id='sqfree'><div class='text'><br/>Free Space</div></div>");
      $('#bingo-table').append("<div data-value='0' class='square' id='sq12'><div class='text'><br/>" + data.squares[i].square + '</div></div>');
    } else {
      $('#bingo-table').append("<div data-value='0' class='square' id='sq" + i + "'><div class='text'><br/>" + data.squares[i].square + '</div></div>');
    }
  }

  // Whenever a square is selected
  $('div.square').tappable(function() {
    // Make it selected
    $(this).toggleClass('selected');

    // Alternates the selected class
    if ($(this).data('value') == 1) {
      $(this).data('value', 0);
    } else {
      $(this).data('value', 1);
    }

    // Checks for win
    if ($('.selected').length == selectedToWin) {
      $('#header').html(winText);
      $('#header').addClass('win');
      $('#bingo-table').css('opacity', 0.6);
    } else {
      $('#header').html(headerText);
      $('#header').removeClass('win');
      $('#bingo-table').css('opacity', 1);
    }
  });
});

// Shuffle function
shuffle = function(v) {
  for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
  return v;
};
