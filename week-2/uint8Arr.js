let uint8Arr = new Uint8Array([0, 255, 127, 128]);
console.log(uint8Arr);
uint8Arr[1] = 300; //300 % 256
console.log(uint8Arr);