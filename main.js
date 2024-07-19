const lyricsBlock = document.getElementById("lyricsBlock");
const button = document.querySelector("button");
const audio = document.getElementById("myAudio");

const lyrics = [
  ["Selamat tinggal kasih", 0.15],
  ["Sampai kita jumpa lagi", 0.14],
  ["Aku pergi", 0.15],
  ["Takkan lama.....", 0.13],
  ["Hanya sekejap saja", 0.194],
  ["Ku akan kembali lagi", 0.12],
  ["Asalkan engkau tetap", 0.13],
  ["Menanti.....", 0.1],
];
const lineDelay = [0.5, 0.9, 1.3, 0.6, 0.5, 0.85, 1];

function displayLyrics() {
  button.style.display = "none";
  let totalDelay = 0;

  for (let i = 0; i < lyrics.length; i++) {
    let delay = lyrics[i][1] * 1000;
    const p = document.createElement("p");
    lyricsBlock.appendChild(p);

    if (i === 0) {
      let wordDelay = 0;
      for (let k = 0; k < lyrics[i][0].length; k++) {
        if (lyrics[i][0][k] === "l" && lyrics[i][0][k + 1] === "a") {
          wordDelay += 500;
        }
        setTimeout(() => {
          p.innerHTML += lyrics[i][0][k];
        }, totalDelay + wordDelay);
        totalDelay += delay;
      }
    } else {
      for (let j = 0; j < lyrics[i][0].length; j++) {
        setTimeout(() => {
          p.innerHTML += lyrics[i][0][j];
        }, totalDelay);
        totalDelay += delay;
      }
    }

    totalDelay += lineDelay[i] * 1000;
  }
}

button.addEventListener("click", () => {
  audio.play();
  displayLyrics();
});
