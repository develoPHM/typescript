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

const obj: Dropdown = {value: 'abc', selected: false};
const obj2: Dropdown2<string> = {value: 'abc', selected: false};

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text){
//     console.log(text);
//   })
//   return text
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption
}
getShoppingItemOption("name")
getShoppingItemOption("stock")