import React from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Fab from '@mui/material/Fab';

export default function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab color="error" onClick={()=>{props.toDelete(props.id)}}>
                <DeleteForeverOutlinedIcon />
            </Fab>
        </div>
    )
}