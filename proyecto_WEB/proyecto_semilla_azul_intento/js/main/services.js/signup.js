document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            console.log('--- Iniciando proceso de registro ---');

            const nombreCompleto = document.getElementById('full-name').value.trim();
            const nombreUsuario = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const contrasena = document.getElementById('password').value;
            const rol = document.getElementById('role').value; 
            const ubicacionId = document.getElementById('location').value; 
            
        
const nuevoUsuario = {
    nombreCompleto: nombreCompleto,
    nombreUsuario: nombreUsuario,
    email: email,
    contrasena: contrasena,
    rol: parseInt(rol),
    ubicacion: {
        idUbicacion: parseInt(ubicacionId)
    }
};

            console.log('Datos a enviar:', nuevoUsuario);

            try {
                const response = await fetch('http://localhost:8090/usuarios/crear', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(nuevoUsuario)
                });

                console.log('Respuesta recibida. Estado HTTP:', response.status);

                if (response.ok) {
                    const usuarioCreado = await response.json();
                    console.log(' Registro exitoso. Respuesta del servidor:', usuarioCreado);
                    alert('¡Cuenta creada con éxito!');
                    window.location.href = 'iniciar-sesion.html';
                } else {
                    const error = await response.text();
                    console.error('Error del servidor:', response.status, error);
                    alert('Error al crear la cuenta: ' + error);
                }
            } catch (error) {
                console.error(' Error de conexión (no se pudo enviar la solicitud):', error);
                alert('No se pudo conectar con el servidor. Revisa tu conexión.');
            } finally {
                console.log('--- Proceso de registro finalizado ---');
            }
        });
    }
});