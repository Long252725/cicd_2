// src/config/payment.js

export const paymentConfig = {
    gateway: "AWS_Payment_Services",
    region: "ap-southeast-1",
    
    // 🔴 LỖI CHẾT NGƯỜI: Dev A để lộ AWS Access Key thật của công ty.
    // Gitleaks được lập trình sẵn để nhận diện chuỗi bắt đầu bằng "AKIA..."
    aws_access_key_id: "AKIAIOSFODNN7EXAMPLEEEE",
    
    // Chữ ký bí mật (Secret Token)
    aws_secret_access_key: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYYYY",

    // Lộ mật khẩu kết nối Database
    db_connection: "mongodb+srv://admin:SuperSecretPass1234!@cluster0.mongodb.net"
};