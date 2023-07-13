class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Ceylan Ertem & Sena Şener", "Çok Geç Kaldın", "1.jpeg", "1.mp3"),

  new Music("Sufle", "Ne Söz Ne Saz", "2.jpeg", "2.mp3"),

  new Music("The Weekend", "Sidewalks", "3.jpeg", "3.mp3"),
];
