$(function(){
	var mySwiper1 = new Swiper('#swiper1',{
	    speed:500,
	    autoplay: 2000,
	    loop:true,
	});
	$('.menu_E').click(function(){
		$(this).children('div').slideToggle(0);
	})
	var flag=1;
	$('.menu_l').click(function(){
		if(flag==1){
			$('.menu_cont_1').fadeIn(100);
			flag=2;
		}else{
			$('.menu_cont_1').fadeOut(100);
			$('.menu_cont_2').fadeOut(100);
			flag=1;
		}
	})
	$('.menu_cont_1 li.on').click(function(){
		$('.menu_cont_1').fadeToggle(100);
		$('.menu_cont_2').fadeToggle(100);
	})
	$('.prev_level').click(function(){
		$('.menu_cont_1').fadeToggle(100);
		$('.menu_cont_2').fadeToggle(100);
	})
	
	$('.resume li').click(function(){
		var i=$(this).index();
		$('.tab_div .main').eq(i).fadeIn(200).siblings().fadeOut(200);
		var mySwiper2 = new Swiper('.swiper-container2',{
			speed:500,
			slidesPerView : 'auto',
			resistant:true,
			resistanceRatio:0,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev'
		});
	})
	
	$('.title h2.click_on').click(function(){
		$(this).parent().siblings().slideToggle(0);
		$(this).toggleClass('up');
		$(this).toggleClass('down')
	})
	getUlWidth();
	function getUlWidth(){
		var liWidth=0;
		for(var i=0;i<$('.tab_top ul li').length;i++){
			liWidth+=$('.tab_top ul li').eq(i).width();
		}
		$('.tab_top ul').css('width',liWidth+10+'px');
	}
	$('.tab_top ul li').click(function(){
		var i=$(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.tab_cont div.tab').eq(i).fadeIn().siblings().fadeOut();
	})
	$('.comprehensive_div div').click(function(){
		$(this).siblings().slideToggle();
		$(this).children('a').fadeToggle();
	})
	
	
})
