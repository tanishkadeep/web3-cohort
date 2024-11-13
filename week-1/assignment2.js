const crypto = require("crypto");

let i = 1;
const prefix = "100xdevs";
while (true) {
  let input = prefix + i.toString();
  const hash = crypto.createHash("sha256").update(input).digest("hex");

  if (hash.startsWith("00000")) {
    console.log(input);
    console.log(hash);
    break;
  }

  i++;
}
