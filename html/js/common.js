timeend = new Date("30 October 2015 10:12:50");
//timeend = new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);

$(document).ready(function() {	

	function time() {
	    today = new Date();
	    today = Math.floor((timeend - today) / 1000);
	    today = Math.floor(today / 60);
	   
	    tmin = today % 60;
	    today = Math.floor(today / 60);

	    if(tmin < 10)
	    	tmin = '0' + tmin;
	    thour = today % 24;
	    today = Math.floor(today / 24);
	    timestrd = today;
	    timestrh = thour;
	    timestrm = tmin;
	    document.getElementById('d_time').innerHTML = timestrd;
	    document.getElementById('h_time').innerHTML = timestrh;
	    document.getElementById('m_time').innerHTML = timestrm;
	    window.setTimeout("time()",1000);
	}

	time();
	setInterval(time, 1000);


	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	})).eq(0).addClass("active");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
			}, 1000);
		});
	});
	
});

$(window).load(function() {
	$(".top_header").animated("fadeInDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profi_right").animated("fadeInRight", "fadeOut");
	$(".s_profi form").animated("zoomIn", "fadeOut");
});