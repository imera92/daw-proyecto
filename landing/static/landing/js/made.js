// Closes the sidebar menu
$("#menu-close").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});
// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});
// Scrolls to the selected menu item on the page
$(function() {
	$('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
	if ($(this).scrollTop() > 250) {
		if (!fixed) {
			fixed = true;
// $('#to-top').css({position:'fixed', display:'block'});
$('#to-top').show("slow", function() {
	$('#to-top').css({
		position: 'fixed',
		display: 'block'
	});
});
}
} else {
	if (fixed) {
		fixed = false;
		$('#to-top').hide("slow", function() {
			$('#to-top').css({
				display: 'none'
			});
		});
	}
}
});

function menulogin(){

	if ($('#loginEmail').val() == "mvelasco@espol.edu.ec" && $('#loginPassword').val() == "testeo"){
		console.log("dddd");
		window.location.href = "<?php echo site_url(\"web/index\"); ?>";
	}else{
		console.log("VVVV");
		window.location.href = "<?php echo site_url(\"web/login\"); ?>";
	}
}


$(document).ready(function() {

	var docHeight = $(window).height();
	var footerHeight = $('#footer').height();
	var footerTop = $('#footer').position().top + footerHeight;


	if (footerTop < docHeight) {
		$('#footer').css('margin-top', 10+ (docHeight - footerTop) + 'px');
	}

	
});