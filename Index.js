// JavaScript Document
	$(document).ready(function() {
		$('#off-canvas-menu,#close-slide-nav').click(function(event) {
			event.preventDefault(); 
     		$('#main,#side-nav').toggleClass('off-display');
    	});
	});
