//Math.random = 0~1 사이에 랜덤한 숫자를 제공
//Math.round = 숫자를 반올림 한다 1.0~1.4 = 1, 1.5~1.9 = 2
//Math.ceil = 1.1~1.9 = 2
//Math.floor = 1.1~1.9 = 1
//ex ) : Math.floor(Math.random() * 10) = 1의자리 숫자

const images = ["0.jpg", "1.jpg", "2.jpg"];
const choseImage = images[Math.floor(Math.random() * images.length)];
const container = document.querySelector("#container");

container.style.backgroundImage = `url(img/${choseImage})`; //container 태그에 백그라운드 이미지 경로 지정
