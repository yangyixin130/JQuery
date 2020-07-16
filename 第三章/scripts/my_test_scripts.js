/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2020-07-01 09:50:58
 * @version $Id$
 */
$(document).ready(function(){
	$("#btn1").click(function(){
		$("#header").addClass('hover');
		$("#header").removeClass('no_hover');
	});
	$("#btn2").click(function(){
		$("#header").removeClass('hover');
		$("#header").addClass('no_hover');
	});
})
