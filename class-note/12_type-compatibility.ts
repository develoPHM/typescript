// 타입 호환성

interface Developer {
  name: string;
  skill: string;
}

class Person {
  name: string;
  skill: string;
}

let developer: Developer;
let person: Person;
// 오른쪽이 더 많은 타입을 갖거나 구조적으로 더 커야 왼쪽과 호환이 된다.
// developer = person;
developer = new Person

// 함수
let add = function(a: number) {
  // ...
}
let sum = function(a: number, b: number) {
  // ...
}
// add = sum 오류
sum = add

// 제네릭
interface Empty<T> {
  // ... 비어있기때문에 어떤값이 들어가도 호환된다고 함
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2
empty2 = empty1

interface NotEmpty<T> {
  data: T
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// notempty1 = notempty2
// notempty2 = notempty1
