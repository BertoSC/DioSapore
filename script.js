// Carrusel del index


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    
    // Quitamos la clase 'active' de todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");  
    }
    
    // Aumentamos el índice para pasar a la siguiente imagen
    slideIndex++;
    
    // Si llegamos al final, volvemos al inicio
    if (slideIndex > slides.length) {slideIndex = 1}
    
    // Añadimos la clase 'active' solo a la imagen actual
    slides[slideIndex-1].classList.add("active");
    
    // Cambiamos cada 5 segundos
    setTimeout(showSlides, 5000); // Cambia la imagen cada 5 segundos
}

// Controles manuales del carrusel
function plusSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    
    // Quitamos la clase 'active' de todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Actualizamos el índice
    slideIndex += n;
    
    // Si llegamos al final o principio, ajustar el índice
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    
    // Añadimos la clase 'active' a la imagen actual
    slides[slideIndex-1].classList.add("active");
}


//texto banner historia
document.addEventListener('DOMContentLoaded', function () {
    const historiaTexto = document.querySelector('.historia-texto');
    historiaTexto.classList.add('show'); // Añade la clase que hace visible el texto
});

+// SHOW 
document.addEventListener("DOMContentLoaded", function() {
    const elementosTexto = document.querySelectorAll(".historia-texto, .localizacion-texto");

    function animarElementos() {
        elementosTexto.forEach((elemento) => {
            const rect = elemento.getBoundingClientRect();
            const elementoVisible = rect.top <= window.innerHeight * 0.8; // Activa antes de que esté completamente visible
            if (elementoVisible) {
                elemento.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", animarElementos);
    animarElementos(); // Llamada inicial para detectar si están visibles al cargar
});


// Formulario de contacto

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
        document.getElementById("form-response").innerText = "Gracias por tu mensaje, " + nombre + ". Te responderemos pronto.";
        document.getElementById("contactForm").reset(); // Reinicia el formulario
    } else {
        document.getElementById("form-response").innerText = "Por favor, completa todos los campos.";
    }
});


