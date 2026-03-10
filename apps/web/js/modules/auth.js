document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const btn = e.target.querySelector('button');

    try {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
        btn.disabled = true;

        // Llamada real a tu API
        // const response = await api.post('/auth/login', { email, password });
        
        // Simulación para prueba
        const isOwner = auth.isOwner(email);
        const mockUser = { email, name: 'Admin', role: isOwner ? 'OWNER' : 'ADMIN' };
        
        auth.saveSession('fake-token-123', mockUser);

        if (isOwner) {
            window.location.href = 'owner/dashboard.html';
        } else {
            window.location.href = 'workspace/dashboard.html';
        }

    } catch (err) {
        alert('Error al iniciar sesión: ' + (err.message || 'Credenciales inválidas'));
        btn.innerHTML = 'Entrar al Sistema';
        btn.disabled = false;
    }
});