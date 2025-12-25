// ===== SNOW =====
function createSnow() {
    const snow = document.createElement("div");
    snow.className = "snow";
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration = 3 + Math.random() * 5 + "s";
    snow.style.opacity = Math.random();
    snow.style.transform = `scale(${Math.random()})`;

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 8000);
}

setInterval(createSnow, 150);

// ===== MUSIC =====
const music = new Audio("music.mp3"); // đổi tên file nếu khác
music.loop = true;

document.getElementById("readyBtn").addEventListener("click", () => {
    music.play();
});
