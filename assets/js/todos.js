// alert("CONNECTED!");



//Toggling done/not done
$("li").click(function() {
	$(this).toggleClass("done");
})

//adding tasks
$("input").keypress(function (e) {
	if( e.keyCode == 13 ) {
		console.log($(this));
		$("ul").append(`<li>${$(this).val()}</li>`);
		$("input").val('');
	}
});

//deleting items

