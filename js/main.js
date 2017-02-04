$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	},  0);
	
}); 

wow = new WOW(
{
	animateClass: 'animated',
	offset:       100,
	callback:     function(box) {
		console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
}
);
wow.init();