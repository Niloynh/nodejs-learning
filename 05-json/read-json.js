const fs = require("fs")

const raw = fs.readFileSync("data.json")
const obj = JSON.parse(raw)
console.log(obj)