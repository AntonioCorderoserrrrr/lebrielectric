let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
let slideInterval;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    slides[slideIndex - 1].style.opacity = 1;
    slideInterval = setTimeout(showSlides, 3000);
}

function changeSlide(n) {
    clearTimeout(slideInterval);
    slideIndex += n - 1; // Ajustamos el índice antes de llamar a showSlides
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    showSlides();
}

showSlides();
    // Función para traducir la página
function translatePage() {
var selectedLanguage = document.querySelector('#language select').value;
localStorage.setItem('selectedLanguage', selectedLanguage);  // Guarda el idioma seleccionado
var elementsToTranslate = document.querySelectorAll('[data-translate-key]');

elementsToTranslate.forEach(function(element) {
    var key = element.getAttribute('data-translate-key');
    if (translations[selectedLanguage] && translations[selectedLanguage][key]) {
        element.innerHTML = translations[selectedLanguage][key];
    }
});
}

// Función para cargar el idioma al iniciar la página
function loadLanguage() {
var selectedLanguage = localStorage.getItem('selectedLanguage') || 'es';  // Obtiene el idioma guardado o por defecto 'es'
document.querySelector('#language select').value = selectedLanguage;
translatePage();
}