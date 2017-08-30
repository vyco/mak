var answer = '';
$(document).ready(function(){


	$('*').addClass('animated');
	introAnimation();
	musicControls();
	mainBody();


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
	$('.main-body').addClass('here');
	$('.main-body').css('visibility','visible');
	answer = "no";

},19000);
	});

}
function mainBody(){
		$('.here > .wrapper > .animated').css('opacity','0');

	$(window).scroll(function(){
		var wscroll = $(this).scrollTop
if(wscroll > $('.main-body').offset().top + 700)
	$('.here > .wrapper > .animated').each(function(i){
		setTimeout(function(){
			$('.here > .wrapper > .animated').eq(i).addClass("fadeInUp")
			$('.here > .wrapper > .animated').css('opacity','1');
		},i*400);
	});
});
}
