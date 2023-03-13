import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { db } from "../firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import './Todo.css'

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
