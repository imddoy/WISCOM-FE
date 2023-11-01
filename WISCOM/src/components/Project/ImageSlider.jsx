import { useState, useEffect } from 'react';
import * as I from './ImageSliderStyle';
import LeftArrow from '../../img/Project/LeftArrow.svg'; // 화살표 이미지 경로
import RightArrow from '../../img/Project/RightArrow.svg'; // 화살표 이미지 경로

import { useParams } from 'react-router-dom';

const ImageSlider = () => {
  const [data, setData] = useState(null);
  const { post_id } = useParams();
  const [slideImages, setSlideImages] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    // 정적 URL을 사용하여 데이터를 가져옵니다.
    fetch(`https://dswuwis.store/posts/${post_id}/`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setSlideImages(data.images);
        console.log('데이터 가져오기 성공');
      })
      .catch((error) => console.error('데이터 가져오기 오류:', error));
  }, [post_id]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIdx, slideImages.length]);

  const preSlide = () => {
    setCurrentIdx((preIdx) => (preIdx - 1 + slideImages.length) % slideImages.length);
    console.log('이전 이미지 가져오기');
  };

  const nextSlide = () => {
    setCurrentIdx((preIdx) => (preIdx + 1) % slideImages.length);
    console.log('다음 이미지 가져오기');
  };

  const toggleArrows = () => {
    setShowArrows(!showArrows);
  };

  return (
    <I.BannerWrap onMouseEnter={toggleArrows} onMouseLeave={toggleArrows}>
      {data && (
        <I.SlideBanner>
          {slideImages.map((image, index) => (
            <I.BannerImage
              key={index}
              className={`${index === currentIdx ? 'active' : ''}`}
              src={`https://dswuwis.store/${image}`}
              alt={`slide ${index}`}
            />
          ))}
          {showArrows && (
            <>
              <I.PreArrow>
                <img onClick={preSlide} src={LeftArrow} alt="Previous" />
              </I.PreArrow>
              <I.NextArrow>
                <img onClick={nextSlide} src={RightArrow} alt="Next" />
              </I.NextArrow>
            </>
          )}
        </I.SlideBanner>
      )}
    </I.BannerWrap>
  );
};

export default ImageSlider;
