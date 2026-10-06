export const dbConfig = {
    host: "prod-cluster.mongodb.net",
    user: "admin_super",
    // Gitleaks rule: rsa-private-key
    sslKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA0Y5wZ3V1p5eX4t9b8c2d1e0f3a4b5c6d7e8f9a0b1c2d3e4f
5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b
7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d
-----END RSA PRIVATE KEY-----`
};
export const testToken = "xoxb-123456789012-1234567890123-4XxXyYzZ1234567890abcdef";