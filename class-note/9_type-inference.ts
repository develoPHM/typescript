let a = 'a'
function getB(b = 10) {
  let c = 'hi';
  return b + c;
}

interface Dropdown<T> {
  value: T;
  title: string;
}

interface Dropdown2<T> extends Dropdown<T>{
  tag: T
  description: string;
}


let Item: Dropdown<string> = {
  value: 'a',
  title: 'b'
}
console.log(Item)

let arr = [0, 1, false];