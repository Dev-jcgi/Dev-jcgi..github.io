const canvas = document.getElementById("cw");
const context = canvas.getContext("2d");
context.globalAlpha = 0.5;

const cursor = {
    x: innerWidth / 2,
    y: innerHeight / 2,
};

let particlesArray = [];

// Generar partículas
generateParticles(101);
setSize();
anim();

// Manejo de eventos de movimiento del mouse
addEventListener("mousemove", (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
});

// Manejo de eventos de cambio de tamaño
addEventListener("resize", () => setSize());

// Cambiar el cursor a un icono relacionado con la tecnología
document.body.style.cursor = 'url("assets/imgs/cursor.png"), auto'; // Asegúrate de que la ruta sea correcta

// Función para seleccionar el idioma
function seleccionarIdioma(idioma) {
    // Cargar la página según el idioma seleccionado
    if (idioma === 'es') {
        window.location.href = 'es/index.html'; // Cargar la página en español
    } else if (idioma === 'en') {
        window.location.href = 'en/index.html'; // Cargar la página en inglés
    }
}

// Función para generar partículas
function generateParticles(amount) {
    for (let i = 0; i < amount; i++) {
        particlesArray[i] = new Particle(
            innerWidth / 2,
            innerHeight / 2,
            4,
            generateColor(),
            0.02
        );
    }
}

// Función para generar un color aleatorio
function generateColor() {
    const hexSet = "0123456789ABCDEF";
    let finalHexString = "#";
    for (let i = 0; i < 6; i++) {
        finalHexString += hexSet[Math.floor(Math.random() * 16)];
    }
    return finalHexString;
}

// Función para ajustar el tamaño del canvas
function setSize() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

// Clase para las partículas
function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
    this.x = x;
    this.y = y;
    this.particleTrailWidth = particleTrailWidth;
    this.strokeColor = strokeColor;
    this.theta = Math.random() * Math.PI * 2;
    this.rotateSpeed = rotateSpeed;
    this.t = Math.random() * 150;

    this.rotate = () => {
        const ls = { x: this.x, y: this.y }; // Última posición
        this.theta += this.rotateSpeed;
        this.x = cursor.x + Math.cos(this.theta) * this.t;
        this.y = cursor.y + Math.sin(this.theta) * this.t;
        context.beginPath();
        context.lineWidth = this.particleTrailWidth;
        context.strokeStyle = this.strokeColor;
        context.moveTo(ls.x, ls.y);
        context.lineTo(this.x, this.y);
        context.stroke();
    };
}

// Función de animación
function anim() {
    requestAnimationFrame(anim);

    context.fillStyle = "rgba(255, 255, 255, 0.05)"; // Fondo blanco semitransparente
    context.fillRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((particle) => particle.rotate());
}
