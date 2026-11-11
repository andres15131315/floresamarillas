
const container = document.getElementById("flowers");
const starsContainer = document.getElementById("stars");

const flowerSettings = [
    { height: "260px", scale: 0.85, lean: "-9deg" },
    { height: "340px", scale: 1.05, lean: "5deg" },
    { height: "290px", scale: 0.9, lean: "-4deg" },
    { height: "390px", scale: 1.2, lean: "3deg" },
    { height: "310px", scale: 1, lean: "-6deg" },
    { height: "365px", scale: 1.1, lean: "7deg" },
    { height: "270px", scale: 0.85, lean: "-3deg" },
    { height: "330px", scale: 1, lean: "5deg" }
];

flowerSettings.forEach((settings, index) => {
    const flower = document.createElement("div");

    flower.className = "flower";

    flower.style.setProperty("--height", settings.height);
    flower.style.setProperty("--scale", settings.scale);
    flower.style.setProperty("--lean", settings.lean);
    flower.style.setProperty("--speed", `${3 + Math.random() * 2}s`);
    flower.style.setProperty("--delay", `${Math.random() * 2}s`);

    const head = document.createElement("div");
    head.className = "flower-head";

    // Crear los pétalos
    for (let i = 0; i < 12; i++) {
        const petal = document.createElement("div");

        petal.className = "petal";
        petal.style.transform = `rotate(${i * 30}deg)`;

        head.appendChild(petal);
    }

    // Centro de la flor
    const center = document.createElement("div");
    center.className = "flower-center";

    head.appendChild(center);

    // Tallo
    const stem = document.createElement("div");
    stem.className = "stem";

    // Hojas
    const leftLeaf = document.createElement("div");
    leftLeaf.className = "leaf left";

    const rightLeaf = document.createElement("div");
    rightLeaf.className = "leaf right";

    flower.appendChild(head);
    flower.appendChild(stem);
    flower.appendChild(leftLeaf);
    flower.appendChild(rightLeaf);

    // Interacción con las flores
    flower.addEventListener("click", (event) => {
        for (let i = 0; i < 8; i++) {
            createSparkle(
                event.clientX + (Math.random() - 0.5) * 80,
                event.clientY + (Math.random() - 0.5) * 80
            );
        }
    });

    container.appendChild(flower);
});

// Crear estrellas de fondo
for (let i = 0; i < 55; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    star.style.opacity = Math.random();

    starsContainer.appendChild(star);
}

// Crear destellos al tocar las flores
function createSparkle(x, y) {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 850);
}
