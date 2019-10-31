import React from 'react'

function Comment({ comment }) {
  const { author: { name, avatar }, content } = comment
  return (
    <div className="comment">
      <img className="avatar" src={avatar} />
      <div className="content">
        <p className="text"><span className="author">{name}</span>{content}</p>
      </div>
    </div>
  )
}

export default Comment