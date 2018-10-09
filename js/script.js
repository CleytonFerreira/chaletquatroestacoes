$("document").ready(function(){
	//menu responsivo
	$(".toggler").click(function(){
		$("nav").toggleClass("visible-menu");
		$(".fa-bars").toggleClass("fa-times");
	});

	//slider de imagens
	$(".slider > .slide:gt(0)").hide();

	setInterval(function(){
		$(".slider > .slide:first")
		.fadeOut(2000)
		.next()
		.fadeIn(2000)
		.end()
		.appendTo(".slider");
	}, 5000);

	//scrolling suave da página
	$("a").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;

	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 1000, function(){
	        window.location.hash = hash;
	      });
    	} // end if
  	});

  	$(document).scroll(function(){
  		//verfifica se a página já está no topo entes de exibir o botão
		 	if ($(this).scrollTop() > 100) {
	        $('.scrollToTop').fadeIn();
	    } else {
	        $('.scrollToTop').fadeOut();
	    }
	});

	    //evento click para retornar ao topo da página
	$('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
	});
});