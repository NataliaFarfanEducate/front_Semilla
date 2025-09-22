document.addEventListener('DOMContentLoaded', function() {
    // Recuperar la información del usuario de sessionStorage
    const usuarioString = sessionStorage.getItem('usuario');
    const welcomeMessageElement = document.getElementById('welcomeMessage');

    if (usuarioString && welcomeMessageElement) {
        try {
            // parseo de datos de string a objeto
            const usuario = JSON.parse(usuarioString);
            const nombre = usuario.usuario || 'Usuario';
            welcomeMessageElement.textContent = `Hola, ${nombre}`;
        } catch (e) {
            console.error("Error al parsear los datos del usuario desde sessionStorage", e);
        }
    }
});