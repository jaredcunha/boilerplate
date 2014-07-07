/* HIDE URL BAR FOR IPHONE================================================================= */
function hideURLbar(){
	window.scrollTo(0,1);
}

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
	addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);			
}