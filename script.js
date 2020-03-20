let button = document.querySelector(".btn")
let input = document.querySelector(".addInput")
let addTodo = document.querySelector(".addTodo")

function counter(state = [], action) {
  switch (action.type) {
    case 'add':
      return state = state.concat(input.value)
    default:
      return state
  }
}

let state = Redux.createStore(counter);
// count.subscribe(() => input.textContent = count.getState());

state.subscribe(() => {
  addTodo.innerHTML = "";
  state.getState().forEach((todo) => {
    let li = document.createElement("li")
    li.classList.add("li")

    let btn = document.createElement("button")
    btn.innerHTML = "X"

    li.textContent = todo
    addTodo.append(li, btn)
    input.value = '';
  })
})


function add(e) {
  e.preventDefault()
  state.dispatch({ type: "add" });
}

button.addEventListener('click', add);