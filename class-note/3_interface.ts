interface User {
  age: number;
  name: string;
}
// 변수에 활용한 인터페이스ㅓ
let seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user)
}

const capt = {
  name: '캡틴',
  age: 10
}
getUser(capt)

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a','b','c'];
arr[0] = 's'

// 딕셔너리
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFIle: /\.js$/
};
Object.keys(obj).forEach(()=> {})

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let captain: Developer = {
  language: 'ts',
  age: 100,
  name: '아메리카'
}