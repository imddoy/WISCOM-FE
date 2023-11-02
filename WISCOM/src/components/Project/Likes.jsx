import React, { useState } from 'react';
import likeImg from '../../img/Project/likes.svg';
import * as L from './LikesStyle';

const Likes = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <L.LikesWrapper>
      <L.LikesImg src={likeImg} alt="image" onClick={handleLikeClick} />
      <L.LikesSpan>{likes}</L.LikesSpan>
    </L.LikesWrapper>
  );
};

export default Likes;
