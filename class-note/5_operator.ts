// function logMessage(value: string) {
//   console.log(value)
// }
// logMessage("Hello World")
// logMessage(10)
function logMessage(value: string | number) {
  console.log(value)
}

logMessage("Hello World")
logMessage(10)
////////////////////////////////////////

function logMsg(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMsg('hello')
logMsg(100)
/////////////////////////////////////////

type Developer =  {
  name: string;
  skill: string;
}

type Person =  {
  name: string;
  age: number;
}

let queen: string | number | boolean;

let ace: string & number & boolean;

function askSomeone1(someone: Developer | Person) {
  // someone.name; 정상
  // someone.age; 오류
  // someone.skill; 오류
}
askSomeone1({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone1({ name: '캡틴', age: 100 });

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}

askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 100 });
askSomeone2({ name: '캡틴', age: 100 });