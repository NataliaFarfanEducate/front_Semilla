document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault(); 
            
            const email = document.getElementById('email').value;
            const contrasena = document.getElementById('contrasena').value;
            
            try {
                const response = await fetch('http://localhost:8090/usuarios/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        contrasena: contrasena
                    })
                });
                
                if (response.ok) {
                    const usuario = await response.json();
                    
                    // almacena  datos  en sessionStorage para mostrar el nombre en boletines
                    sessionStorage.setItem('usuario', JSON.stringify(usuario));

                    console.log('Login exitoso:', usuario);
                    alert('¡Bienvenido!');
                    window.location.href = 'boletines.html';
                } else {
                    const error = await response.text();
                    alert('Error: ' + error);
                }
            } catch (error) {
                console.error('Error de conexión:', error);
                alert('Error de conexión con el servidor');
            }
        });
    }
});