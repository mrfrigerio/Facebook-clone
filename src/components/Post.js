import React from 'react'
import Comment from './Comment'

function Post({ avatar, author, date, content, comments }) {


  return (
    <div className="post">
      <div className="bio">
        <img className="avatar" src={avatar} alt="" />
        <div className="title">
          <p className="author">{author}</p>
          <p className="date"><small>{date}</small></p>
        </div>
      </div>
      <p className="content">{content}</p>
      <div className="separator"></div>
      <div className="comments">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  )

}

export default Post