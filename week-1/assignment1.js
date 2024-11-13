const crypto = require("crypto");

let i = 1;
while (true) {
  let input = i.toString();
  const hash = crypto.createHash("sha256").update(input).digest("hex");

  if (hash.startsWith("00000")) {
    console.log(input);
    console.log(hash);
    break;
  }

  i++;
}
