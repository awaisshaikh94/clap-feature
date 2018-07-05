$(document).ready(function () {

	var howMany = 1;
	
	$("#more").click(function(){
	    howMany += 1;
	    $("#info").text(howMany);
	});

});