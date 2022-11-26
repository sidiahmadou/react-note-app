import React, { useState } from 'react'
const NewNote = ({addNote}) => {
  const characterLimit = 200
  const [text, setText]=useState("")
  const handleChange = (event)=>{
    if (characterLimit - event.target.value.length >=0)
      {setText(event.target.value)}
    }
  const saveNote=()=>{
    if (text && text.trim().length ){
      addNote(text)
      setText("")}
    else{
      alert('please enter text')
    }
  }

  return (
    <div className='new-note'>
        <textarea placeholder="type to add note" value={text} onChange={handleChange}>
        </textarea>
        <div className='note-footer'>
          <span>{characterLimit - text.length} Remaining</span>
          <button onClick={saveNote}>Save</button>
        </div>
    </div>
  )
}
export default NewNote