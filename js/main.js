$(document).ready(function () {
	function b(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#preview').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	function b1(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#preview1').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	function b2(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#preview2').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	function b3(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#preview3').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	function b4(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#preview-profile').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#browse").change(function() {
		b(this);
	});
	$("#browse1").change(function() {
		b1(this);
	});
	$("#browse2").change(function() {
		b2(this);
	});
	$("#browse3").change(function() {
		b3(this);
	});
	$("#browse4").change(function() {
		//b4(this);
	});
	$('.link-register').on('click', function () {
		// Load up a new modal...
		$('#loginModal').modal('hide')
	});
	$('.link-login').on('click', function () {
		// Load up a new modal...
		$('#registerModal').modal('hide')
	});
	$('.wrap-forgot a').on('click', function () {
		// Load up a new modal...
		$('#loginModal').modal('hide')
	});
	$('.forgotPasswordModal .forgot').on('click', function () {
		// Load up a new modal...
		$('#forgotPasswordModal').modal('hide')
	});
	function setCookie(name,days) {		
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		var value = "true";
		var cookie = name + "=" + (value || "")  + expires + "; path=/";
		document.cookie = cookie;
	}
	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	if (getCookie('ModalShown') !== 'true') {
		//$("#cookieModal").modal("show");
		//Modal has been shown, now set a cookie so it never comes back
		$(".accept-cookie").click(function () {
			setCookie('ModalShown', 30);
			$("#cookieModal").css("display", "none");
		});		
	}
	$(".close-cookie").click(function(){
		$("#cookieModal").css("display", "none");
	});
	////////////////////// Yosuke Code ///////////////////////
	// Slider	
	$(".logout-btn").click(function(){
		$(".logout-part").css("display", "block");
	});
	$(".logout-part .close").click(function(){
		$(".logout-part").css("display", "none");
	});
	$(".logout-part .cancel-logout").click(function(){
		$(".logout-part").css("display", "none");
	});
	$(".logout-part .do-logout").click(function(){
		$(".logout-part").css("display", "none");
	});
	$(".receive-msg .close").click(function(){
		$(".receive-msg").css("display", "none");
	});
	$(".new-msg .mini").click(function(){
		$(".new-msg .content").css("display", "none");
		$(".new-msg .max").css("display", "block");
		$(".new-msg .mini").css("display", "none");
	});
	$(".new-msg .max").click(function(){
		$(".new-msg .content").css("display", "block");
		$(".new-msg .max").css("display", "none");
		$(".new-msg .mini").css("display", "block");
	});
	$(".new-msg .blank").click(function(){
		$(".new-msg").toggleClass("hide");
		var msg_class = $("#new-msg").attr('class');
		if(msg_class.indexOf('hide') > 0){
			$(".new-msg .content").css("display", "none");
			$(".new-msg .max").css("display", "block");
			$(".new-msg .mini").css("display", "none");
		}else{
			$(".new-msg .content").css("display", "block");
			$(".new-msg .max").css("display", "none");
			$(".new-msg .mini").css("display", "block");
		}
	});
	$(".new-msg .close").click(function(){
		$(".new-msg").css("display", "none");
	});
	// mail button in menu
	$(".nav-menu-right .inbox").click(function(){
		// if user logged in
		$(".new-msg").css("display", "block");	
		// else user didnt login
		//$("#loginModal").css("display", "block");
	});
	// calendar mark
	marked_height = $(".ui-state-default.ui-state-highlight").height();
	$(".ui-state-default.ui-state-highlight").width(marked_height);
	////////////////////
	$('.carousel.horizon.slide .carousel-item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i=0;i<2;i++) {
			next=next.next();
			if (!next.length) {
			next=$(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		}
	});	

	// custom select
	// order summary popup select
	$('.customized-select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
	
		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());
	
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
	
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
	
		var $listItems = $list.children('li');
	
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});
	
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			console.log($this.val());
		});
	
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});
//////////////////////////////////////////////

});
