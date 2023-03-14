## TO-DO App with React and Firebase

This app is built with React and Firebase Firestore Database.
This article will try to give you the best insight of how the coding,organization and working of the application with elaborate explanations.

To build this app, I used React to design the frontend part of it and Firebase Firestore DB to store the data for efficient update and retrieval of data. This is a basic and a simple app that tries to show how powerful the combination of React and Firebase can be when used to build complex web applications.

## Introduction to Firebase

Firebase is not just a database but a set of tools; it is often called a `back-end-as-a-service`
(BaaS). Firebase contains a variety of services, as listed here:

- Authentication: User login and identity
- Real-time database: Real-time, cloud-hosted, NoSQL database
- Cloud Firestore: Real-time, cloud-hosted, NoSQL database
- Cloud storage: Massively scalable file storage
- Cloud functions: Serverless, event-driven back-end functions
- Firebase hosting: Global web hosting
- ML Kit: An SDK for common machine learning tasks

Firebase makes it easy for front-end developers to integrate a back end into their
application, without creating any API routes and other back-end code.
Firebase eliminates the back-end work, and you communicate directly with Firebase,
hosted on the Google platform with an SDK.

## Setting Up and Deploying a ReactJS Project with Firebase

Learn how to setup firebase project

### Creating a Firebase Account

To work with Firebase, you just need a Google account. So, go to Firebase site at
https://firebase.google.com/ and click Go to `console` in the top-right corner. You
need to be logged in with your Google account to do so.

### Setting Up Hosting

- Click the `Add project` link on the page, For your first time, you will see only the Add
  project link.
- On the page that opens, give the project a name like `todo-react-firebase` and click the
  `Continue` button.
- On the next page, click the `Create project` button. If you intend to deploy your app in production, you should keep Google Analytics enabled.
- Wait for sometime until the Project has been created then click `Continue`.
- Now, click the `Settings` icon at the top-left corner of the screen, After that, click `Project settings`.
- On the next page, click the code icon at the bottom of the page.
- On the next page, enter the same name of the app that you entered earlier. After that,
  click the `Register app` button.
- On the next page, just click the Next button.
- On the next page, you will see the command to install f`irebase-tools` globally from
  the terminal. So, open any terminal and run the command from anywhere.
  Notice that this is a one-time setup on a machine, since we are using it with the -g
  option. The -g option specifies that it needs to be installed globally.
  `npm install -g firebase-tools`
- Click Next and run the preceeding set of commands in the terinal inside the project directory. i.e.
  `firebase login` and `firebase init`

## Building our To-Do App with React and Firebase

Let's dive in and start building the frontend of our Application.
In this part, we shall learn how to build our awesome to-do list app in ReactJS, with the data
stored in the back end, specifically in a Firebase Firestore database. The hosting will also
be in Firebase.
We will see how to use Material UI for the icons in the project, and we will be using
a useRef hook in this project.
The user will be able to enter a to-do item and store it in a lovely list in the firebase database. So, this list is permanent and won’t be changed after a refresh of browser.

### Getting Started

To get started, we use the create-react-app command to create a new app called
todo-­react-­firebase. Specifically, the command for this is as follows:

`npx create-react-app todo-react-firebase`

### Initial Firebase Setup

Since we had set our Firebase previously, One additional setup step is required after you click the `Continue to the console `button in the setup procedure. You need to scroll down and click the Config radio button and then copy all the data for the firebaseConfig section. This is required because we are going to use the Firebase database in our project.

Now, open the code in VS Code and create a file called `firebase.js` inside the src
folder. Paste the code you have copied.

### Basic React Setup

Now, we will do the basic setup for ReactJS. Inside the todo-react-firebase directory,
start the React app with npm start. Next, we will delete some of the files because we
don’t need them. They are actually part of the logo and the other test, which we will not
be using in this project. These files inlude:

- App.test.js
- logo.svg
- reportWebvitals.js
- setUpTests.js

We will remove all the unnecessary boilerplate code, so our index.js file will look
like this:

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
```

The App.js file contains only the “TODO React Firebase” text, as shown here:

```
import './App.css';
function App() {
    return (
        <div className="App">
        <h1>TODO React Firebase</h1>
        </div>
    );
}
export default App;
```

### Let's Build it

Inside the src folder in our project Create another folder called components. It is a good thing to be organized and simple as possible. We will organize our code in form of compents and render all at once in our browser. This is one of the basics of React.
Inside the components folder, create two files called `CreateTodo.js` and `Todo.js`.
Let's begin working on the CreateTodo.js file.

Here, we are using two state variables: `todos` and `input`. We are using the `useState` hook to declare both of them. todos contains an empty array, and input contains an empty string.

```
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");
```

Next, inside the return statement, we use the controlled input of React to update the
input of an input box. Next, we have a button and a click event assigned to the button.
When we click it, we run a function called `addTodo()` that changes the state of todos,
with setTodos. Here, it appends the already existing content with the user-typed content.


We are using a form to wrap our input and button, and the button type is submit.
Therefore, if we type anything in the input box and press Enter on the keyboard, it
will work. For that reason, we need to use `e.preventDefault()` inside the `addTodo()`
function.

We will be using Material UI for the icons. So, we need to run two npm install
commands as per the documentation. We will install core and icons through the
integrated terminal, as shown here:


`npm install @material-ui/core @material-ui/icons`

Now, we will use the icons from material-ui on our project. At the top of the file, import:

`import { Button, FormControl, Input, InputLabel } from '@material-ui/core';`

```
<form>
    <FormControl>
        <InputLabel>Add TODO</InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
    </FormControl>
    <Button
          type="submit"
          onClick={addTodo}
          color="primary"
          variant="contained"
          disabled={!input}
    >
          Add
    </Button>
</form>
```

Let's move to the Todo.js file and design how our To-do list will appear and later import it in our CreateTodo component.

Now add the following code into the Todo.js file. We are just using a bunch of material-ui icons and showing the props called todo. These icons help us to make the list item prettier.

```
import { List, ListItem, ListItemAvatar, ListItemText } from ­'@material-ui/core'
import React from 'react'
const Todo = ({ todo }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={todo} secondary={todo} />
            </ListItem>
        </List>
    )
}
export default Todo
```

import the Todo component in the CreateTodo like this:

`import Todo from "./Todo";`

### Using Firebase
Now, we will start setting up Firebase for the back end. For that we will first install all
dependencies for Firebase in the terminal by running the following command:

`npm i firebase`

Next, we will update our firebase.js file to use the config to initialize the app. After
that, we use Firestore as the database.

```
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  ...
  ...
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = firebase.auth();
export { db, auth }

```

Now, we will go back to Firebase and click Cloud Firestore and then click the Create
database button.
On the next screen, select Start in test mode and then click the Next button. On the next screen, click the Enable button.



## Adding Firebase to the App

After that, within useEffect, we are calling the collection todos, and then we take
the snapshot. In Firebase terms, it is the live data, which we will get instantly. We will
then set this data in the todos array, via setTodos().
Also, notice that useEffect has input inside the array. So, any time a todo is added
by the user, it will instantly display in our app.

Now, we will add the functionality so the user can add the to-do item. For this we just
need to add the input to the collection, using add(). Also, notice that we are adding the
server timestamp, while adding a to-do. We are doing this because we need to order the
to-dos in descending order.

Now, we also want to get the ID of each item that we require for the key and also for
deleting, which we are going to implement. The key is essential in React for optimization,
and we also get a warning in the console. So, we need to change the structure in which
we set the data in setTodos().
Now, we are mapping through it in a different way, specifically when we are passing
the single item to a Todo component.

```
function CreateTodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            item: doc.data(),
          }))
        );
      });
  }, [input]);

  const addTodo = (e) => {
    e.preventDefault();
    // setTodos([...todos,input])
    db.collection("todos").add({
      todos: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <>
      <h1>My TODO App</h1>
      <form>
        <FormControl>
          <InputLabel>Add TODO</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          color="primary"
          variant="contained"
          disabled={!input}
        >
          Add
        </Button>
      </form>
      <ul>
        {todos.map((it) => (
          <Todo key={it.id} arr={it} />
        ))}
      </ul>
    </>
  );
}

export default CreateTodo;
```

Now, in the Todo.js file, we are getting a different structure, and we are updating our
file for that.
We have also added the delete functionality, in which we have to get the ID of the
item and call the delete().

```
function Todo({ arr }) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
        <DeleteForeverIcon fontSize='large'
          onClick={() => {
            db.collection("todos").doc(arr.id).delete();
          }}
        />
      </ListItem>
    </List>
  );
}
export default Todo;
```

import the CreateTodo component in the App.js like this:

`import CreateTodo from './components/CreateTodo'`

### A little bit of Styling
Next, in the App.css file, remove everything and insert the content shown here:
```
.app {
    display:grid;
    place-items: center;
}
```
Now, in the Todo.js file, add the import for the Todo.css file. Also, set fontSize to
large for the Delete icon. The updated code is marked in bold here:
```
import './Todo.css'
const Todo = ({ arr }) => {
    return (
    <List className="todo__list">
             ...
    <DeleteForeverIcon fontSize='large'
             onClick={() => {db.collection('todos').doc(arr.id).delete()}}
    />
    </List>
    )
}
```

Next, in the Todo.css file, add the following content:
```
.todo__list{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    border: 1px solid lightgray;
    margin-bottom: 10px !important;
}
```

### Deploying Firebase

In the project directory,
Now run `firebase login` from the terminal. If you are running it for the first time, it
will give you a pop-up message. After that, run the `firebase init` command. Type Y to
proceed.

Next, go down to Hosting using the arrow keys, press the spacebar to select Hosting,
and then press Enter. Then select Use an existing project and press Enter. Choose the project and Enter.

Next, choose the public directory, which is build. The next option is Yes for a single-­
page app and GitHub deploys, where you select No.

Now, you need to run npm run build in the terminal for a production-optimal build,
with this command:

`npm run build`

The final command is firebase deploy to deploy the project to Firebase, as shown
here:

`firebase deploy`

<h1>And That is all, I hope you enjoyed!!</h1>

