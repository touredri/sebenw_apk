const screenshots = [
  'assets/screenshot1.png',
  'assets/screenshot2.png',
  'assets/screenshot3.png',
];

let currentScreenshotIndex = 0;

function changeScreenshot() {
  const hero = document.querySelector('.hero');
  hero.style.backgroundImage = `url(${screenshots[currentScreenshotIndex]})`;
  currentScreenshotIndex = (currentScreenshotIndex + 1) % screenshots.length;
}

setInterval(changeScreenshot, 3000);
