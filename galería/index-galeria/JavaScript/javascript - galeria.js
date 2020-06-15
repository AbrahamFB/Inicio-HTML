// Call carousel manually
$('#myCarouselCustom').carousel();

// Go to the previous item
$("#prevBtn").click(function(){
    $("#myCarouselCustom").carousel("prev");
});
// Go to the previous item
$("#nextBtn").click(function(){
    $("#myCarouselCustom").carousel("next");
});
$('.carousel').carousel({
     interval: 8000,/*Define la cantidad de tiempo entre cada uno de los elementos del slide*/
     pause:true,	/*Pausa el ciclo cuando el ratón se pose encima, y lo reanuda cuando el ratón abandona el slide. */
     wrap:false		/*Especifica si el carrusel debe ciclar continuamente o deternerse en el último elemento.*/
});