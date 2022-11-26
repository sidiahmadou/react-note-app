import React, { useEffect, useState } from 'react'
import Note from './note'
import NewNote from './new-note'
const Notes = ({notes, deleteNote, handleAddNote}) => {
  const [search, SetSearch] = useState('')
  const [filterNotes,setFilterNotes] = useState([])

  const handleInput=(event)=>{
    SetSearch(event.target.value)
  }
  useEffect(()=>{
    setFilterNotes(
      notes.filter(
        item=>item.note.toLowerCase().includes(search)
    ))
  },[search])

  return (
    <div>
      <div className='input-box'>
        <input onChange={handleInput} placeholder='seach note...' type='text'></input>
      </div>

      <div className='note-list'>
      <NewNote addNote={handleAddNote}/>
    
        {search?
          (filterNotes.map((item)=>(
            <Note key={item.id} id={item.id} note={item.note} date={item.date}
            handleClick={deleteNote}
            />
            ))
          )
          :
          (
          notes.map((item)=>(
            <Note key={item.id} id={item.id} note={item.note} date={item.date}
             handleClick={deleteNote}
             />
            ))
            )
        }
      </div>
    </div>
  )
}

export default Notes