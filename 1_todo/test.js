function fetchTodoItems() {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

todoItems = fetchTodoItems();

function showCompleted() {
  return todoItems.filter(item => item.done);
}
