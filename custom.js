$(document).ready(function () {

	var howMany = 1;
	
	$("#more").click(function(){
	    howMany += 1;
	    $("#info").text(howMany);
	});

	$(".clap").click(function(){
		$(".count").addClass('show');
		$(".stars img").addClass('show');
		setTimeout(function(){
		   $(".count").removeClass('show');
		   $(".stars img").removeClass('show');
		}, 1000);
	});	

});