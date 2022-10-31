/*
//intervals = 사용자 지정 시간을 두고 매번 실행하는 동작
ex ) setInterval(function, time(ms))

//timeout = 동작 실행 전 대기시간 부여
ex ) setTimeout(function, time(ms))

//Date = 
ex ) new Date(); = 년월일 시분초 모두 가져옴
ex ) const dt = new Date();
    dt.getDate()
    dt.getDay()
    dt.getFullYear()
    등등
//string 형으로 받고 싶을 경우
String(new Data().getHours());


//padStart or padEnd = string 형식에 사용 가능한 함수, 텍스트 시작점 및 마지막 규칙을 정의, 규칙이 지켜질 때 까지 추가할 텍스트 정의
ex ) .padStart(규칙(텍스트길이),추가할 텍스트)
ex ) "1".padStart(2,"0"); -> "01"
ex ) "1".padEnd(2,"0"); -> "10"
*/
const clock = document.querySelector("h1#clock");

function getDate() {
  const dt = new Date();
  const hours = String(dt.getHours()).padStart(2, "0"); //가져오는 값의 타입을 스트링 형으로 변환 후, padStart에 정의된 규칙에 부합할 시 앞 부분이 정의된 텍스트를 추가
  const minutes = String(dt.getMinutes()).padStart(2, "0");
  const seconds = String(dt.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getDate(); //웹 사이트 로딩시 바로 시간 출력
setInterval(getDate, 1000); //1초뒤 반복적으로 시간 갱신
