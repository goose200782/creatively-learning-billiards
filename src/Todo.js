import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import './Todo.css';
 
function Todo({text}) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={text} secondary="Dummy deadline 🕗" /> 
            </ListItem>
        </List>
    )
}

export default Todo
