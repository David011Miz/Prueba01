// Función para registrar un usuario en localStorage
document.getElementById("registroForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            alert("El usuario ya existe. Por favor, elige otro nombre de usuario.");
        } else {
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "index.html";
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Función para iniciar sesión
document.getElementById("loginForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const validUser = users.find(user => user.username === username && user.password === password);

        if (validUser) {
            alert(`Bienvenido, ${username}!`);
            window.location.href = "paquetes.html"; // Redirigir a la página de paquetes
        } else {
            alert("Usuario o contraseña incorrectos. Intenta nuevamente.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Carrusel funcionalidad
const carruselContainer = document.querySelector('.carrusel-container');
const carruselButtons = document.querySelectorAll('.carrusel-btn');
let currentIndex = 0;

if (carruselContainer && carruselButtons) {
    const paquetes = document.querySelectorAll('.paquete');

    carruselButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.classList.contains('next') ? 1 : -1;
            currentIndex = (currentIndex + direction + paquetes.length) % paquetes.length;
            carruselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    });
}
