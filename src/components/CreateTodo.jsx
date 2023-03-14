import React, { useState, useEffect } from "react";
import { Button, Input, InputLabel, FormControl } from "@material-ui/core";
import Todo from "./Todo";
import { db } from "../firebase";

import firebase from "firebase/compat/app";

function CreateTodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setTodos(
          snapshot.docs.map(doc => ({
            id: doc.id,
            item: doc.data()
          }))
        )
      })
  }, [input])

  const addTodo = e => {
    e.preventDefault()
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');
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
      {todos.map(it => <Todo key={it.id} arr={it} />)}
      </ul>
    </>
  );
}

export default CreateTodo;
