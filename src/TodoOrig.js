import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function TodoOrig() {
    const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');  

   //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
   useEffect(() => {
    //this code fires once when App.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log('😻 ', snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
}, [])

  const addToDo = event => {
    // console.log('👾', "I'm working"); 
    event.preventDefault();
    setTodos([...todos, input])
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

    return (
        <div>
            <h1>Hello World</h1>


<form>

  <FormControl>
    <InputLabel>Write a todo</InputLabel>
    <Input value={input} onChange={event => setInput(event.target.value)}/>
  </FormControl>

  <Button disabled={!input} type='submit' onClick={addToDo} variant="contained" color="primary">Add To Do</Button>
  {/* <button type='submit' onClick={addToDo}>Add To Do</button> */}
</form>



<ul>
  {todos.map(todo => (
    <Todo text={todo}/>
    // <li>{todo}</li>
  ))}
  
</ul>
        </div>
    )
}

export default TodoOrig
