// ==== Lấy phần tử ====
const nextBtn = document.getElementById("nextBtn");
const page1   = document.getElementById("page1");
const page2   = document.getElementById("page2");

// ==== Sự kiện bấm nút "Sẵn Sàng" ====
nextBtn.addEventListener("click", () => {
    // Ẩn trang 1
    page1.classList.remove("active");

    // Hiện trang 2 (ảnh quà)
    page2.classList.add("active");
});
