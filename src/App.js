import { useState } from "react";
import "./App.css";
import React from "react";
import CreateTodo from './components/CreateTodo'

function App() {
  return (
    <div className="app">
      <CreateTodo />
    </div>
  );
}

export default App;
