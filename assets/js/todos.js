// alert("CONNECTED!");



//Toggling done/not done
$("ul").on('click', 'li', function() {
	$(this).toggleClass("done");
})

//deleting items
$("ul").on('click', 'span', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	e.stopPropagation();
});

//adding tasks
$("input").keypress(function (e) {
	if( e.keyCode == 13 ) {
		$("ul").append(`<li><span class='item'><i class="far fa-trash-alt"></i></span>${$(this).val()}</li>`);
		$("input").val('');
	}
});

//toggle-form
$("h1").on('click', 'span', function() {
	$('input').fadeToggle();
})


