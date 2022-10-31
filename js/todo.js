const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "toDos";
const LISTCLASS_KEY = "list-style";
const TEXTCLASS_KEY = "txt-style";
const BTNCLASS_KEY = "btn-style";

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //parsedToDos.forEach((item) => console.log("test " + item));
  toDos = parsedToDos; //toDos 배열의 값을 기존에 입력된 toDos가 있다면 해당 값을 부여
  parsedToDos.forEach(paintToDo);
  //기존에 입력된 toDos 를 배열형태로 만들고, 배열에 forEach 반복문을 사용하여 순차적으로 배열내 아이템에 접근 해당 아이템을 인자로 paintToDo 함수를 호출하여 리스트 작성
}

//배열 내에 입력된 값들을 localStorage에 String형식으로 변환하여 저장
function saveToDos() {
  //JSON.stringify(변수) = object,string 및 어떠한 코드던 간에 string으로 변환
  //JSON.parse(변수) = 변수안에 있는 값의 형태를 자동으로 변환
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//사용자가 List 중 삭제 버튼을 눌렀을 경우 해당 해당 버튼의 부모 li를 삭제, 해당 li의 id 값을 가진 배열내 인덱스를 제외 후 저장 함수 호출
function deleteToDo(event) {
  //클릭 이벤트 발생 시 이벤트에 대한 정보를 인자로 넘겨 받음
  //어떤 todoList를 제거할 것인가
  //event.target = 클릭된 대상의 위치 정보
  //event.target.parentElement = 클릭된 대상의 부모 정보
  const li = event.target.parentElement; //삭제 대상 태그
  li.remove(); // 해당 태그 삭제
  toDos = toDos.filter((deleteId) => deleteId.id !== parseInt(li.id)); //deleteId 변수가 배열 내에 데이터가 deleteId 변수에 담기고 해당 변수의 값이 삭제 대상 태그의 id와 같으면 "false" , 같지 않으면 "true" / false 된 값은 배열 내에서 제외되며 제외된 배열로 toDos 배열을 업데이트하여줌
  saveToDos();
}

//사용자에게 입력받은 값을 ul 태그 내 li{span, button} 형식으로 생성 후 출력
function paintToDo(newToDo) {
  const li = document.createElement("li"); //li태그 생성
  li.id = newToDo.id; // 생성된 li 태그에 넘겨받은 인자값의 id 값을 부여
  const span = document.createElement("span"); //span태그 생성
  span.innerText = newToDo.text; //span 태그 내에 인자값(사용자가 input 태그에 입력한 값) 입력
  const button = document.createElement("button"); //button태그 생성
  button.innerText = "X"; //button 태그 내에 텍스트 입력

  button.classList.add(BTNCLASS_KEY, TEXTCLASS_KEY);
  button.addEventListener("click", deleteToDo);

  li.classList.add(LISTCLASS_KEY, TEXTCLASS_KEY);
  li.appendChild(span); //li태그 하위에 span 태그 추가
  li.appendChild(button); //li태그 하위에 button 태그 추가

  toDoList.appendChild(li); //ul 태그 내에 생성된 li 태그 추가
}

//사용자가 리스트 입력 후 submit 했을 시 입력 받은 데이터를 object 타입 변수에 id,text 으로 분류하여 저장 후 toDos 배열에 추가, input 태그 내 데이터는 초기화 한다.
function handleToDoSubmit(event) {
  event.preventDefault(); //submit 기본 이벤트 방지
  if (toDoList.querySelectorAll("li").length >= 9) {
    //toDoList 태그 내 li 개수가 10이상일 시 경고창 발생 및 리스트 추가 X
    alert("There's a lot of lists.");
    toDoInput.value = "";
    return;
  }

  const newToDoObj = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDoInput.value = ""; //input 태그 입력값 초기화

  toDos.push(newToDoObj);
  paintToDo(newToDoObj); //리스트에 아이템 추가 및 삭제 함수 호출
  saveToDos(); //로컬스토리지 저장 함수 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);
