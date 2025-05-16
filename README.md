1. Cài đặt Playwright
    npx playwright install

2. Chạy Playwright Tests
- Chạy toàn bộ test: npx playwright test
- Mở trình duyệt để xem test chạy: npx playwright test --headed

- Chạy 1 file cụ thể: npx playwright test "tên file"
- Chạy test chế độ UI: npx playwright test --ui

3. Chạy HTTP Server
    npx http-server . -p 3000
    
Sau đó truy cập trang trong test qua URL: http://localhost:3000/