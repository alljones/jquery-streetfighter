$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	})
	.mousedown(function(){
		//console.log('mousedown');
		//play hadouken sound
		//show hadouken
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			//animate it to the right of screen
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','520px');
			});
	})
	.mouseup(function(){
		//console.log('mouseup');
		//ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(e) {
      if (e.keyCode == 88) {
      $('.ryu-still').hide();
      $('.ryu-throwing').hide();
	  $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-throwing').hide();
	  $('.ryu-ready').hide();
      $('.ryu-still').show();
    }
  });
});

function playHadouken () {
	$('#hadouken-sound') [0].volume = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();
};