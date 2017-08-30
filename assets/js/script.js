$(document).ready(function(){
	$('*').addClass('animated');
	introAnimation();
	musicControls();
});
function musicControls(){
	document.getElementById("song").volume = 0.6;
}
function introAnimation(){
$('.intro').addClass('fadeInDown');


	$('.fill').one('webkitAnimationEnd',function(){
		setTimeout(function(){
			$('.intro').addClass("fadeOutUp");
			setTimeout(function(){
				$('.intro').hide("slow");
			},3000);


			$('.total-logo').addClass("fadeInDown");


		},2000);


		setTimeout(function(){
		$('.total-logo').addClass("fadeOutDown")
		setTimeout(function(){
			$('.total-logo').hide("slow");
		},1000);
	},6500);
setTimeout(function(){
	$('.saying').css('display','block');
},12900);
setTimeout(function(){
	$('.saying').css('display','none');

},14000);
setTimeout(function(){
	$('.southSound-heading').css('display','block');
},15100);
setTimeout(function(){
		$('.southSound-heading').css('display','none');

	$('.out-now-heading').css('display','block');
},17200);
setTimeout(function(){
	$('header').fadeOut("slow");
	$('.main-body').fadeIn("slow");
},19000);
	});

}
