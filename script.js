// ==== Trang chuyển động ====
const nextBtn = document.getElementById("nextBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const giftBtn = document.getElementById("giftBtn");
const message = document.getElementById("message");

// Hiển thị trang 2 khi nhấn nút "Sẵn Sàng"
nextBtn.addEventListener("click", () => {
    page1.classList.remove("active");
    page2.classList.add("active");
});

// Hiển thị chữ dần lên khi nhấn nút "Nhận Quà"
giftBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
    message.style.animation = "fadeIn 2s forwards";
});

// ==== Hiệu ứng chữ dần lên ====
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`, styleSheet.cssRules.length);
