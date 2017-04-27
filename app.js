$(document).ready(function(){

   // jQuery methods go here...
$("#bars").click(function(event) {
	$('.bars-dropdown').toggle('fast');
});
  
$(".tabs-item").hover(function() {
	$(this).addClass('active');
}, function() {
	$(this).removeClass('active');
});

$('.button').click(function(event) {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});

 
});