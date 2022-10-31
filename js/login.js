//스트링으로만 이루어진 변수를 네이밍할 때에는 대문자로 표기, 연속된 스트링을 타이핑하면 오타가 발생하여도 디버깅하기 힘듦

/*
특정 값을 브라우저가 기억할 수 있도록 하는 기능
//localStorage = 브라우저에 무언가를 저장할 수 있도록 한다.
ex) localStorage.setItem('key','value');
ex) localStorage.getItem('key');
*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const userTitle = document.querySelector("#userTitle");

const USER_KEY = "userName";
const CLASSNAME_HIDDEN = "hidden";

const savedUser = localStorage.getItem(USER_KEY);

function onLoginSubmit(arg) {
  //arg(명칭은 임의로) = submit event 발생 시 event object(동작 및 상태)를 전달 받기 위한 공간
  arg.preventDefault(); //preventDefault = 브라우저가 기본적으로 수행하는 동작을 방지(submit 시 새로고침)

  localStorage.setItem(USER_KEY, loginInput.value);

  loginForm.classList.add(CLASSNAME_HIDDEN);

  getUser(); //신규로 입력된 인수로 함수 호출
}

function getUser() {
  const userName = localStorage.getItem(USER_KEY);
  userTitle.innerText = `Hello!, ${userName}.`; //두개의 스트링을 묶어서 한번에 표현 변수는 ${} 으로 표시
  userTitle.classList.remove(CLASSNAME_HIDDEN); //h1 태그 보임
}

if (savedUser === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN); //Form 태그 보임
  loginForm.addEventListener("submit", onLoginSubmit); //submit = form 태그의 기본 동작
} else {
  getUser(); //이미 입력된 유저의 정보를 가져와 해당 인수로 함수 호출
}
