$(document).ready(function(){
	$('.my-img').slick({
		autoplay: true,
		autoplaySpeed: 2000,
	});
	let audioPlay = true;
	let aud = document.getElementById("audio");
	$('#header-image').click(function() {
		audioPlay = !audioPlay;
		if (audioPlay) aud.play();
		else aud.pause();

	});
});
