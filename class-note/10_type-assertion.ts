// 타입 단언
let a;
a = 20;
a = 'a'
let b = a as string

// DOM API 조작
// <div id='app'/>
let div = document.querySelector('#app');
if (div) {
  // div.innerText
}
interface human {
  sayhi: string;
  age:number;
}

let person = {} as human
person.sayhi = 'hi'
person.age = 33

let per = {} as human
console.log(per.sayhi)
