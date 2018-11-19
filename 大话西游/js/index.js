$(function(){
	$(".head_img").hover(function(){
		$(this).find(".h_img").css("visibility","hidden");
		$(this).find("a").show();
	},function(){
		$(this).find(".h_img").css("visibility","visible");
		$(this).find("a").hide();
	})
	
	//轮播图
	var num=0;
	var timer=setInterval(move,3000);
	function move(){
		if(num==0){
			num=1;
		}else{
			num=0;
		}
		$(".banner_box").find("a").siblings("a").fadeIn(800).eq(num).fadeOut(800);
	}
	$(".banner_left").on("click",function(){
		clearInterval(timer);
		move();
		timer=setInterval(move,3000);
	})
	$(".banner_right").on("click",function(){
		clearInterval(timer);
		move();
		timer=setInterval(move,3000);
	})
	
})
