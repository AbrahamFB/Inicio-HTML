/*Todo lo que esta dentro se va a ejecutar hasta que el documento haya cargado*/
window.onload = function(carga){//Funcion que se ejecutará cuando la página haya cargado totalmente
	var contenedor = document.getElementById("contenedor_carga");
	contenedor.style.visibility= "hidden";
	contenedor.style.opacity= "0";
}

/*Función arriba*/
$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body.html').animate({
			scrollTop: '0px'
		});
	})
});


// Cuando el usuario cliclea el <div>, confirma con un mensaje
function mostrarMensaje() {
    var surgir = document.getElementById("mi-anuncio");
    surgir.classList.toggle("mostrar");
}

/*Formulario*/
$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});