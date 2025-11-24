const crypto = require("crypto")

const password = "niloy123"
console.log(crypto.getHashes());

const hash = crypto.createHash("ssl3-sha1").update(password)
.digest("hex");

console.log(hash)
