import React, { useState } from 'react';
import likeImg from '../../../img/Likes/likes.png';
import './likes.css';

const Likes = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-box">
      <img src={likeImg} alt="image" onClick={handleLikeClick} />
      <span>{likes}</span>
    </div>
  );
};

export default Likes;
