import { useState, useEffect } from 'react';
import * as I from './ImageSliderStyle';
import Rectangle from '../../img/Project/Rectangle.svg';
import left from '../../img/Project/Circle.svg';
import right from '../../img/Project/Circle.svg';

const ImageSlider = () => {
  const slideImages = [
    {
      id: 0,
      img: Rectangle,
    },
    {
      id: 2,
      img: left,
    },
    {
      id: 3,
      img: Rectangle,
    },
    {
      id: 4,
      img: right,
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // 클리어 필요
  }, [currentIdx]);

  // 이미지 앞, 뒤로 넘어가는 함수
  const preSlide = () => {
    setCurrentIdx((preIdx) => (preIdx - 1 + slideImages.length) % slideImages.length);
  };
  const nextSlide = () => {
    setCurrentIdx((preIdx) => (preIdx + 1) % slideImages.length);
  };

  return (
    <I.BannerWrap>
      <I.SlideBanner>
        {slideImages.map((image, index) => (
          <I.BannerImage
            key={index}
            className={`${index === currentIdx ? 'active' : ''}`}
            src={image.img}
            alt={`slide ${index}`}
          />
        ))}
        <I.PreArrow>
          <img onClick={preSlide} src={left} alt="Previous" />
        </I.PreArrow>
        <I.NextArrow>
          <img onClick={nextSlide} src={right} alt="Next" />
        </I.NextArrow>
      </I.SlideBanner>
    </I.BannerWrap>
  );
};

export default ImageSlider;
