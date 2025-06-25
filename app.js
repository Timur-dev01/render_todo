fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => renderTODO(data));

function renderTODO(todos) {
  const todos_div = document.querySelector(".todos");
  console.log(todos);
  for (const todo of todos) {
    const todo_div = document.createElement("div");
    todo_div.classList.add("todo");

    const input_checkbox = document.createElement("input");
    input_checkbox.setAttribute("type", "checkbox");
    if (todo.completed) {
      input_checkbox.checked = todo.completed
    }

    const span_title = document.createElement("span");
    span_title.classList.add("title");
    span_title.textContent =
      todo.title.charAt(0).toUpperCase() + todo.title.slice(1).toLowerCase();

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae.";

    todo_div.append(input_checkbox, span_title, description);
    todos_div.append(todo_div);
  }
}

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => renderTODO(data));

// function renderTODO(todos) {
//   const todosDiv = document.querySelector(".todos");

//   todos.forEach((todo) => {
//     // Создание карточки
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");

//     // Чекбокс
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = todo.completed;

//     // Заголовок (с большой буквы, остальное — строчные)
//     const title = document.createElement("span");
//     title.classList.add("title");
//     title.textContent =
//       todo.title.charAt(0).toUpperCase() + todo.title.slice(1).toLowerCase();

//     // Описание (статичное пока)
//     const description = document.createElement("p");
//     description.classList.add("description");
//     description.textContent =
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae.";

//     // Добавляем всё в карточку, потом карточку в общий список
//     todoDiv.append(checkbox, title, description);
//     todosDiv.append(todoDiv);
//   });
// }
