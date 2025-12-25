<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎄 Merry Christmas 🎄</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Trang đầu -->
    <main id="page1" class="page active">
        <img src="data:image/png;base64,{{file_000000007e3c7206901d43d314d07d18}}" alt="Trang đầu">
        <h1 class="glow">🎄 Ông già Noel đang phát quà rồi! 🎄</h1>
        <p class="subtitle">Bạn đã sẵn sàng để nhận món quà đặc biệt chưa?</p>
        <button id="nextBtn" class="btn">Sẵn Sàng</button>
    </main>

    <!-- Trang thứ hai -->
    <main id="page2" class="page">
        <img src="data:image/png;base64,{{file_00000000dcd07206b07f09022a7ec328}}" alt="Trang thứ hai">
        <button id="giftBtn" class="btn">Nhận Quà 🎁</button>
        <div id="message" class="hidden">
            <h2 class="glow">Merry Christmas!</h2>
            <p>Chúc bạn một mùa Giáng Sinh ấm áp và hạnh phúc!</p>
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html>
