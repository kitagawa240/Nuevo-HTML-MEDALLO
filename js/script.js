// Obtener elementos del DOM
const loginForm = document.getElementById('loginForm');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const resetPasswordModal = document.getElementById('resetPasswordModal');
const resetPasswordForm = document.getElementById('resetPasswordForm');
const closeBtn = document.querySelector('.close');

// Evento para mostrar el modal de restablecer contraseña
forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    resetPasswordModal.style.display = 'block';
});

// Evento para cerrar el modal
closeBtn.addEventListener('click', function() {
    resetPasswordModal.style.display = 'none';
});

// Cerrar el modal cuando se hace clic fuera de él
window.addEventListener('click', function(e) {
    if (e.target === resetPasswordModal) {
        resetPasswordModal.style.display = 'none';
    }
});

// Manejar el envío del formulario de login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log('Datos de login:', { nombre, correo, password });
    
    // Simulación de login exitoso
    alert('Login exitoso! Bienvenido, ' + nombre);
});

// Manejar el envío del formulario de restablecer contraseña
resetPasswordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const resetEmail = document.getElementById('resetEmail').value;
    
    // Aquí puedes agregar la lógica para enviar el correo de restablecimiento
    console.log('Solicitud de restablecimiento para:', resetEmail);
    
    // Simulación de envío exitoso
    alert('Se han enviado instrucciones a ' + resetEmail);
    
    // Cerrar el modal
    resetPasswordModal.style.display = 'none';
});