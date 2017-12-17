$(document).ready(function(){
	$('.my-img').slick({
		autoplay: true,
		autoplaySpeed: 3000,
	});
	let audioPlay = true;
	let aud = document.getElementById("audio");
	$('#header-image').click(function() {
		audioPlay = !audioPlay;
		if (audioPlay) aud.play();
		else aud.pause();

	});
});
