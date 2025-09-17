// Función para manejar el login
async function login(email, password) {
  try {
    const response = await fetch('http://localhost:8080/auth/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Error de autenticación');
    }

    const data = await response.json();
    // El backend debe devolver un token
    const token = data.token; 

    // **Guarda el token** en el almacenamiento local para usarlo más tarde
    localStorage.setItem('jwtToken', token); 
    console.log('Login exitoso. Token guardado.');

  } catch (error) {
    console.error('Login fallido:', error.message);
  }
}