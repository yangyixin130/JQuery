$(document).ready(function(){
var v = false;
	$("button#vegOn").click(function(){
 		if (v == false){
 		$(".fish").replaceWith("<li class='portobello'><em>艺术</em></li>")
		$(".hamburger").replaceWith("<li class='portobello'><em>地理</em></li>");
		$(".portobello").parent().parent().addClass("veg_leaf");
  		$m = $(".meat").detach();
		v = true;
    }
  });

	$("button#restoreMe").click(function(){
	
	if (v == true){
	$(".portobello").parent().parent().removeClass("veg_leaf");
		$(".portobello").replaceWith("<li class='hamburger'>地理</li>");
		v = false;
		}
	});
});