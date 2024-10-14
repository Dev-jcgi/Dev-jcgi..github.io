// language-selector.js

function selectLanguage() {
    const userChoice = confirm("Do you want to view the site in English? (Click 'Cancel' for Spanish)");

    if (userChoice) {
        // Si el usuario elige inglés
        window.location.href = "/en/index.html"; // URL a la página en inglés
    } else {
        // Si el usuario elige español
        window.location.href = "/es/index.html"; // URL a la página en español
    }
}

// Ejecutar el script al cargar la página
window.onload = function() {
    selectLanguage();
};
