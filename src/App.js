import React from 'react'
import Notes from './components/notes'
import { useState, useEffect } from 'react'

const App = () => {
  const [notes, setNotes]=useState(JSON.parse(localStorage.getItem("Notes"))||[])
  console.log(notes)

//saving data to local storage
useEffect(() => {
  localStorage.setItem("Notes", JSON.stringify(notes));
}, [notes]);

const deleteNote = (id)=>{
  setNotes(
    (prevNote)=>prevNote.filter((note)=>note.id !==id)
  )
  }
const createNote = (text)=>{
  const date = new Date();
  const newNote = {
    id:notes.length+1,
    note:text,
    date:date.toLocaleDateString()
    }
  const newNotes = [newNote, ...notes]
  setNotes(newNotes)
}
  return (
    <div className='note-app'>
      <h1 className='title'>My note app</h1>
      <Notes notes={notes} handleAddNote={createNote} deleteNote={deleteNote}/>
    </div>
  )
}

export default App