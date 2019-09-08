$(window).scroll(function(){
    if($(document).scrollTop()>470 && $(document).scrollTop()<3200){
        $("#elevator").show();
    }else{
        $("#elevator").hide();
    }
	$(".eleva").children("li.flo").click(function(){
		//console.log($(".floor1").eq($(this).index())[0])
		//console.log($(".floor1").eq($(this).index())[0].offsetTop)
		var index = $(this).index();
		var t = $(".floor1").eq(index)[0].offsetTop;
		$("html").animate({
			scrollTop:t
		})
	})
	$(".eleva").find(".backtop").click(function(){
		var top = 0;
		$("html").animate({
			scrollTop:top
		})
	})
})