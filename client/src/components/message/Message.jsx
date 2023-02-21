import React from 'react'
import "./message.css"
export const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}> 
    <div className='messagetop'>
      <img src='assets/bitch3.jpg' alt="" className='messageimg' />
      <p className='messagetext'>hello this is a message from the user</p>
    </div>
    <div className='messagebotom'>1 hour ago</div>
    </div>
  )
}
