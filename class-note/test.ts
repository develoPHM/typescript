// 1. `document.getElementById`를 사용하여 요소를 가져옴.
const inputElement = document.getElementById("myInput");

// 2. 타입 단언을 안하면 타입스크립트는 myInput을 HTMLElement로 인식함
const myInput = inputElement
