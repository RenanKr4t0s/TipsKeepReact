import Note from "./Note";

function NoteMaker (props){
    const theNotes = props.array.map((object, index)=>{
        return(
            <Note
            title = {object.title}
            content = {object.content}
            toDelete = {props.toDelete}
            key={index}
            id={index}
            />
        )
    })
    return theNotes
}

export default NoteMaker