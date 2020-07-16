/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2020-07-09 09:40:06
 * @version $Id$
 */
 //设置当前照片的序号
	
	
$(document).ready(function() {
	var index=0;
	//获取我们的照片的数量
	var imgLenth=$(".center-img li").length;
	var timer=null;//设置定时器
	timer=setInterval(intervalImg,3000);

	$("preImg").click(function(event) {
	//清楚0定时器
	clearInterval(time);
	var nowImg = nexImg;
	nexImg = nexImg-1;
	console.log(nexImg);
	if(nexImg<0){
		nexImg=imgLength-1;
	}

	//照片的移动
	$(".center-img ul img").eq(nowImg).css("position","relative");
	$(".center-img ul img").eq(nexImg).css("position","relative");
	time =setInterval(intervalImg,3000);
})
	//点击下一张
$(".nexImg").click(function(){
	clearInterval(timer);
	intervalImg();
	timer =setInterval(intervalImg,3000);
});
//轮播图
function intervalImg(nexImg){
	if(nexImg<imgLenth-1){
		nexImg++;
	}else{
		nexImg=0;
	}
	//将当前图片试用绝对定位,下一张图片试用相对定位
	$(".center-img ul img").eq(nexImg-1).css("position","absolute");
	$(".center-img ul img").eq(nexImg).css("position","relative");
	
	$(".center-img ul li").eq(nexImg).css("display","block");
	$(".center-img ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$(".center-img ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
	$(".center-img ul li").eq(nexImg-1).css("display","none");
	});
}
// $(".bottom-img .img1").click(function(event) {
// 	$(".center-img").append('<li><img src="images/1872年波士顿大火 1.png" alt="" width="612px" height="510px"><li>');
// });
// $(".bottom-img .img2").click(function(event) {
// 	$(".center-img").append('<li><img src="images/1872年波士顿大火 2.png" alt="" width="612px" height="510px"><li>');
// });
// $(".bottom-img .img3").click(function(event) {
// 	$(".center-img").append('<li><img src="images/1872年波士顿大火 3.png" alt="" width="612px" height="510px"><li>');
// });
// $(".bottom-img .img4").click(function(event) {
// 	$(".center-img").append('<li><img src="images/1872年波士顿大火 4.png" alt="" width="612px" height="510px"><li>');
// });
// $(".bottom-img .img5").click(function(event) {
// 	$(".center-img").append('<li><img src="images/1872年波士顿大火 5.png" alt="" width="612px" height="510px"><li>');
// $(".bottom-img .img6").click(function(event) {
// 	$(".center-img").append('<li><img src="images/1872年波士顿大火 6.png" alt="" width="612px" height="510px"><li>');
// });
// $(".bottom-img .img7").click(function(event) {
// 	$(".center-img").append('<li><img src="images/1872年波士顿大火 7.png" alt="" width="612px" height="510px"><li>');
// });
// $(".bottom-img .img8").click(function(event) {
// 	$(".center-img").append('<li><img src="images/1872年波士顿大火 8.png" alt="" width="612px" height="510px"><li>');
// });
// $(".bottom-img .img9").click(function(event) {
// 	$(".center-img").append('<li><img src="images/1872年波士顿大火 9.png" alt="" width="612px" height="510px"><li>');
// });
});