import Note from "./Note";

function NoteMaker (props){
    const theNotes = props.array.map(object=>{
        return(
            <Note
            key = {object.id}
            title = {object.title}
            content = {object.content}
            />
        )
    })
    return theNotes
}

export default NoteMaker