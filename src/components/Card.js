import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ post }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className='card-total-container'>
      {modalOpen && <Modal post={post} toggleModal={toggleModal} />}
      <div className="card" onClick={toggleModal}>
        <img src={post.thumbnail.small} alt={post.title} className="card-image" />
       <div className="colors-div">
       <div className="circle red"></div>
        <div className="circle blue"></div>
       </div>
        <div className="card-content">
          <h2 className="card-title">{post.title}</h2>
          <p className="card-description">{post.content}</p>
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
    </div>
  );
}

export default Card;
