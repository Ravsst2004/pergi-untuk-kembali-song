const lyrics = [
  ["Selamat tinggal kasih", 0.5],
  ["Sampai kita jumpa lagi", 0.5],
  ["Aku pergi", 0.5],
  ["Takkan lama.....", 0.5],
  ["Hanya sekejap saja", 0.5],
  ["Ku akan kembali lagi", 0.5],
  ["Asalkan engkau tetap", 0.5],
  ["Menanti.....", 0.5],
];

function displayLyrics() {
  let totalDelay = 0;

  for (let i = 0; i < lyrics.length; i++) {
    let delay = lyrics[i][1] * 1000;
    for (let j = 0; j < lyrics[i][0].length; j++) {
      setTimeout(() => {
        process.stdout.write(lyrics[i][0][j]);
      }, totalDelay);
      totalDelay += delay;
    }

    totalDelay += delay;
    setTimeout(() => {
      process.stdout.write("\n");
    }, totalDelay);
  }
}

displayLyrics();
