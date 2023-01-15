function LoadIncludeFile() {
    let _includeElAttr, _includeElContent;
    let _xmlhttp = new XMLHttpRequest();//서버와 상호 작용하는 객체 

    while (document.querySelector("include") != null) {
        let _includeEl = document.querySelector("include");//include 태그 모두 변수에 가져오기
        _includeElAttr = _includeEl.getAttribute("data-href");//i번째 include 태그의 data-href 속성값 변수에 담기

        _xmlhttp.open("GET", _includeElAttr, false);//파일 가져오기
        _xmlhttp.send();//보내기(null)
        _includeElContent = _xmlhttp.responseText;//가져온 파일 변수에 담기

		_includeEl.outerHTML = _includeElContent;//body 태그 변경
    }
}

$(function(){
	LoadIncludeFile();

	$('.depth02').hide();
	$('.main_nav').click(function(){
		$('.depth02').slideToggle();
	});
	
	$('.sub_btn_move').click(function(){
		var cl_name = "."+this.dataset.scroll;
		var boxOffset = $(cl_name).offset().top-150;
		
		$('html,body').animate({
			scrollTop:boxOffset
		})
	});
	
	$('.bxslider.auto-bx').bxSlider({
		auto: true,
	});
	$('.bxslider.bx-vertical').bxSlider({
		auto: true,
		mode: 'vertical',
		pager: false,
	});
});