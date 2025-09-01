// Función para activar el menú en móvil
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
