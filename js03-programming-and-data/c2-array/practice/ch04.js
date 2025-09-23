/* =====04. 온도 바꾸기===== */

let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (let i = 0; i < celsiusTemps.length; i++) {
  fahrenheitTemps[i] = (celsiusTemps[i] * 9) / 5 + 32;
}

console.log(fahrenheitTemps);
