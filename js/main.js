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

    // List of squares in the board
    var row1 = $('#sq0').data('value') + $('#sq1').data('value') + $('#sq2').data('value') + $('#sq3').data('value') + $('#sq4').data('value');
    var row2 = $('#sq5').data('value') + $('#sq6').data('value') + $('#sq7').data('value') + $('#sq8').data('value') + $('#sq9').data('value');
    var row3 = $('#sq10').data('value') + $('#sq11').data('value') + $('#sqfree').data('value') + $('#sq12').data('value') + $('#sq13').data('value');
    var row4 = $('#sq14').data('value') + $('#sq15').data('value') + $('#sq16').data('value') + $('#sq17').data('value') + $('#sq18').data('value');
    var row5 = $('#sq19').data('value') + $('#sq20').data('value') + $('#sq21').data('value') + $('#sq22').data('value') + $('#sq23').data('value');

    var col1 = $('#sq0').data('value') + $('#sq5').data('value') + $('#sq10').data('value') + $('#sq14').data('value') + $('#sq19').data('value');
    var col2 = $('#sq1').data('value') + $('#sq6').data('value') + $('#sq11').data('value') + $('#sq15').data('value') + $('#sq20').data('value');
    var col3 = $('#sq2').data('value') + $('#sq7').data('value') + $('#sqfree').data('value') + $('#sq16').data('value') + $('#sq21').data('value');
    var col4 = $('#sq3').data('value') + $('#sq8').data('value') + $('#sq12').data('value') + $('#sq17').data('value') + $('#sq22').data('value');
    var col5 = $('#sq4').data('value') + $('#sq9').data('value') + $('#sq13').data('value') + $('#sq18').data('value') + $('#sq23').data('value');

    var diag1 = $('#sq0').data('value') + $('#sq6').data('value') + $('#sqfree').data('value') + $('#sq17').data('value') + $('#sq23').data('value');
    var diag2 = $('#sq4').data('value') + $('#sq8').data('value') + $('#sqfree').data('value') + $('#sq15').data('value') + $('#sq19').data('value');

    if (
      row1 == 5 ||
      row2 == 5 ||
      row3 == 5 ||
      row4 == 5 ||
      row5 == 5 ||
      col1 == 5 ||
      col2 == 5 ||
      col3 == 5 ||
      col4 == 5 ||
      col5 == 5 ||
      diag1 == 5 ||
      diag2 == 5 ||
      $('.selected').length == selectedToWin
    ) {
      Swal.fire({
        title: 'Winner!',
        text: 'You won the Scammer Bingo!',
        type: 'success',
        confirmButtonText: 'Reset the Board',
        showCancelButton: true,
        cancelButtonText: 'Go Back',
        cancelButtonColor: '#444'
      }).then(result => {
        if (result.value) {
          window.location.reload();
        }
      });
    }
  });
});

// Shuffle function
shuffle = function(v) {
  for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
  return v;
};
