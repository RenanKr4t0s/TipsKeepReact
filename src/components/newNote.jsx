import { useState } from "react"
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


export default function NewNote(props){
    let [changer, setChanger] = useState(false)

    function changeZoom(){
        console.log("clicado")
        setChanger(!changer)
    }

    const [note, setNote] = useState({
        title:'',
        content:'',
    })

    function handleChange(e){
        const {name, value}=e.target
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(e){
        e.preventDefault()
        props.onAdd(note)
        changeZoom()
        setNote({
            title:'',
            content:'',
        })
    }

    // Manipular o rows
  
    return(
        <div className="session-in">
            <form className="big-note">
                <Zoom in={changer}>
                    <input type="text" name="title"
                        value={note.title}
                        placeholder="Título" 
                        className="big-note__title" 
                        onChange={handleChange} >    
                    </input>
                </Zoom>
                <textarea name="content"
                    onClick={changeZoom}
                    value={note.content}
                    placeholder="Descrição da Nota"
                    className="big-note__content" 
                    rows={changer?"3":"1"} 
                    onChange={handleChange}
                />
                <Zoom in={changer} >
                    <Fab color="secondary"onClick={submitNote}>
                        <AddBoxOutlinedIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )

}