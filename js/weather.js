//navigator.geolocation.getCurrentPosition(위치 가져오기 성공시 실행될 함수, 실패시 실행될 함수) =
//openweathermap.org 계정 필요, API 사용, Current weather data
//fetch() =
//.then = fatch를 통헤 날씨 정보 전달 "그리고" 응답받은 정보 json 형식 변환 "그리고" json 접근하여 원하는 정보 추출
const API_KEY = "8c67c3516b1ac6c018c7da51d39d441e";

function onGeoOk(position) {
  const latitude = position.coords.latitude; //getCurrentPosition 함수를 사용해 얻은 좌표값 중 위도
  const longitude = position.coords.longitude; //getCurrentPosition 함수를 사용해 얻은 좌표값 중 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`; //units=metric = 섭씨 온도로 응답받기 위함
  fetch(url) //조합된 url 정보를 사용하여 해당 서버에 request(요청) 하는 함수 -> 크롬 개발자모드 -> Network에서 response(응답) 확인 가능
    .then((response) => response.json()) //응답 받은 json형식의 정보에 접근.
    .then((data) => {
      //원하는 위치의 정보를 가져와 변수에 담는다.
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const weather = data.weather[0].main; //날씨
      const cityContainer = document.querySelector("#weather span:last-child");
      const city = data.name; //지역
      const temp = data.main.temp; //온도
      weatherContainer.innerText = `${weather} / ${temp}˚`;
      cityContainer.innerText = city;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
