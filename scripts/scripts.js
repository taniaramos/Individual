( function( $ ) {
  $.fn.spanLetters = function() {
    this.each( function() {

      var words, i, text;
      words = $( this ).text().split( '' );

      for ( i = 0; i in words; i++ ) {
        words[i] = '<span class="sl' + ( i + 1 ) + ' span-letter">' + words[i] + '</span>'
      };

      text = words.join( '' );

  $( this ).html( text );
})
}
}( jQuery ));


$( ".begin" ).spanLetters();

targets = $( ".begin span" );
duration = 200;
speed = 100;
infiniteLoop = true

function animateLetter( value ) {
  if ( turnedOn ) {
    $( value ).addClass( "active" );
    setTimeout( function() {
    stopAnimateLetter( value );
    }, duration );
  }
};


function stopAnimateLetter( value ) {
  $( value ).removeClass( "active" );
};

function startEverything() {

targets.each( function( index, value ) {

timer = setTimeout( function() {
  animateLetter( value );
  }, speed * index );
});

if ( clicked ) {
  clicked = false;

  } else {
  console.log( index );

if ( infiniteLoop ) {
if ( turnedOn ) {
  setTimeout( function() {

    startEverything();

      }, speed * index );
    }
  }
}
}

function stopEverything() {
  clearTimeout( timer );
  turnedOn = false;

  setTimeout( function() {
    targets.each( function( index, value ) {
    stopAnimateLetter( value );
  });
}, 200 );
}

$( ".begin" )
  .mouseenter( function() {
    turnedOn = true;
    clicked = false;

    startEverything();
})

  .mouseleave( function() {

    stopEverything();
});
