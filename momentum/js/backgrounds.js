const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url("img/${chosenImage}") no-repeat 0 0`;