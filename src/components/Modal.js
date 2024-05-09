import React from 'react';

const Modal = ({ post, toggleModal }) => {
    console.log('post', post)
  return (
    <div className="modal" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={toggleModal}>&times;</span>
        <h2>{post.title}</h2>
        <img src={post.thumbnail.large} alt="thumbnail" className="card-image1"/>
      
        <p>{post.content}</p>
        <div className="author-info">
          <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
          <div className="author-details">
            <p className="author-name">{post.author.name}</p>
            <p className="author-role">{post.author.role}</p>
          </div>
       
          <p className="post-date">{new Date(post.date * 1000).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
