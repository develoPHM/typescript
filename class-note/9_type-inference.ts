// @ts-nocheck
// 타입 추론 1
let a = 'a'
function getB(b = 10) {
  let c = 'hi';
  return b + c;
}
// 10 + '10' = 1010

// 타입 추론 2
interface Dropdown<T> {
  value: T;
  title: string;
}

const shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello'
}

// 타입 추론 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

const detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'efg',
  tag: 'tt'
}