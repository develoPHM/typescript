// 타입 단언
var a;
a = 20;
a = 'a'
var b = a // b는 any
var c = a as string // c 는 string

// DOM API 조작
// <div id='app'> hello </div>
var div = document.querySelector('div');