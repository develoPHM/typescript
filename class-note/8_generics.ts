// function logText(text) {
//   console.log(text);
//   return text;
// }
//
// logText(10);
//
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
logText<string>('하이');

function logText2(text: string) {
  return text;
}

function logNumber(num: number) {
  return num
}

function logText<T>(text: T): T {
  return text
}

const a = logText<string>('abc');
a.split('')


// 인터페이스에 제네릭을 선언
interface Dropdown {
  value: string;
  selected: boolean;
}

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown = { value: 'abc', selected: false };
const obj2: Dropdown2<string> = { value: 'abc', selected: false };