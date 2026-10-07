// src/services/emailService.js

export function sendWelcomeEmail(userEmail) {
    console.log("Đang gửi email tới: ", userEmail);
    
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    
    return true;
}