import React, { useState, useEffect } from 'react';
import likeImg from '../../img/Project/likes.svg';
import likedImg from '../../img/Project/liked.svg';
import * as L from './LikesStyle';
import axios from 'axios';

const Likes = (post_id) => {
  const nextPostId = Number(post_id.id) + 1;
  const [data, setData] = useState('');
  const [likes, setLikes] = useState(0);
  const [isLike, setIsLike] = useState(likeImg);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    if (isLike === likeImg) {
      setIsLike(likedImg);
    } else {
      setIsLike(likeImg);
    }
  };
  useEffect(() => {
    getDatas();
  }, []);
  const getDatas = async () => {
    await axios
      .get(`https://wiscom2023.shop/posts/${nextPostId}/like`)
      .then((response) => {
        setData(response);
        console.log('성공');
        console.log(response);
      })
      .catch((error) => {
        console.log('좋아요 실패', error);
      });
  };
  return (
    <L.LikesWrapper>
      <L.LikesImg src={isLike} alt="image" onClick={handleLikeClick} />
      <L.LikesSpan>{data.likes}</L.LikesSpan>
    </L.LikesWrapper>
  );
};

export default Likes;
