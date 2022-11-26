import React from 'react'
import deleteIcon from '../icons/delete.png'
const Note = ({id, note,date, handleClick}) => {
    return (
        <div className='note'>
            <p>{note}</p>
            <div className='note-footer'>
                <span>{date}</span>
                <img onClick={()=>handleClick(id)} src={deleteIcon} alt='delete note button'/>
            </div>
            
        </div>
  )
}

export default Note