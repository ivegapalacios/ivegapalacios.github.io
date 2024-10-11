//Boton de idioma
$(document).ready(function(){
    $("#language-btn").click(function(){
        //obtener url actual
        var currentUrl = window.location.href;

        //obtener nombre archivo
        var currentPage = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

        //verificar si estamos en la carpeta de inglés
        if (currentUrl.includes('/eng/')){
            //cambiar a la version español
            var newPage = currentPage.replace('-en.html', '.html');
            window.location.href = '../' + newPage;
        } else {
            //cambiar a la version ingles
            var newPage = currentPage.includes('.html') ? currentPage.replace('.html', '-en.html') : currentPage + '-en.html';
            window.location.href = 'eng/' + newPage;
        }
    })
})

//Slides pagina sobre mi
$(document).ready(function(){
    $("#toggle-btn-1").click(function() {
        if ($(".texto2").is(":visible")){
            $(".texto2").slideUp("slow", function(){
                $(".texto1").css("border", "1px solid gray");
                $(".texto1").slideToggle("slow");
            })
        } else {
            $(".texto1").css("border", "1px solid gray");
            $(".texto1").slideToggle("slow");
        }
    });
    
    $("#toggle-btn-2").click(function() {
        if ($(".texto1").is(":visible")){
            $(".texto1").slideUp("slow", function(){
                $(".texto2").css("border", "1px solid gray");
                $(".texto2").slideToggle("slow");
            })
        } else {
            $(".texto2").css("border", "1px solid gray");
            $(".texto2").slideToggle("slow");
        }
    });
})

//Validación formulario
$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        
        var email = $('#email').val();
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        
        alert('Formulario enviado exitosamente!');
    });
});