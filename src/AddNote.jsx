import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function AddNote(props) {
    let deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="column">
                <div className="card">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                    <button  onClick={deleteNote}>
                        <DeleteOutlineIcon  className="DeleteOutlineIcon"/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddNote
