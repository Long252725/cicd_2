// src/services/emailService.js

export function sendWelcomeEmail(userEmail) {
    console.log("Đang gửi email tới: ", userEmail);
    
    // 🔴 LỖI CHẾT NGƯỜI: Dev A lại quen tay hardcode mật khẩu vào file Service
    const awsAccessKey = "AKIAIOSFODNN7EXAMPLE"; // Gitleaks sẽ vồ ngay dòng này
    const sendGridApiKey = "SG.Th1sIsAFak3Ap1K3yF0rT3st1ng.1234567890abcdefg"; // Hoặc dòng này
    
    // Logic gửi email...
    return true;
}