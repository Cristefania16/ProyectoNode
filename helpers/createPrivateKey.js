const crypto = require("crypto")

const secret = crypto.randomBytes(32).toString("hex")

console.log(secret) //7d90abc433ddeb71bbbed513d8c1883813a2d8995c9e142561ef2d40b4b4983b
//3de58257b5b25e05e06624e2fad7bae71fdc2fa78aefe5d359f0f79b70398327