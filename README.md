## Local To-Do List
This will show you the logic of a basic to-do list
* We are using two state variables: `todos` and `input`.
* We are using `useState` hooks to declare both of them.
* `todos` contains an array containing two strings, and `input` contains an empty string.
* Next, inside the `return` statement, we use the controlled input of React to update the
input of an input box.
* Next, we have a `button` and a click event assigned to the button.
* When we click it, we run a function called `addTodo()` that changes the state of `todos`,
with `setTodos`. Here, it appends the already existing content with the user-typed content.
* We are using a `form` to wrap our input and button, and the button type is `submit`.
Therefore, if we type anything in the input box and press Enter on the keyboard, it
will work. For that reason, we need to use `e.preventDefault()` inside `the addTodo()`
function.
