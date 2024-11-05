// @ts-nocheck

function logText(text) {
  console.log(text);
  return text;
}

logText(10);
logText('a');

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText<string>('Hello');

function logNumber(num: number) {
  console.log(num);
  return num;
}

logNumber<number>(10);
///////////////////////////////
// 인터페이스에 제네릭을 선언하는 방법//
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = {
  value: 'abc',
  selected: false
};

interface Dropdown<T> {
  value: T,
  selected: boolean;
}

const obj2: Dropdown<number> = {
  value: 123,
  selected: false
};

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function(text) {
    console.log(text);
  });
  return text;
}

logTextLength(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용
interface LengthType {
  length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength2(10);
logTextlength({ length: 19 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption
}

getShoppingItemOption(10); // 오류
getShoppingItemOption<string>('a'); // 오류
getShoppingItemOption('name') // 정상