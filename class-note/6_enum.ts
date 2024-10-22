enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes) // '나이키'

// enums 예제
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function ask(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}

ask(Answer.Yes);