import * as A from './MainAnimationStyle';
import dsce from './../../img/Main/dsce.png';
import web from './../../img/Main/web.png';
import ios from './../../img/Main/ios.png';
import ui from './../../img/Main/ui.png';
import metaverse from './../../img/Main/metaverse.png';
import app from './../../img/Main/app.png';
import ai from './../../img/Main/ai.png';
import game from './../../img/Main/game.png';
import star from './../../img/Main/star.png';
import { useEffect, useRef, useState } from 'react';

export default function MainAnimation() {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const animationWrapperRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% 이상이 화면에 나타날 때 알림을 받음
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimationVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (animationWrapperRef.current) {
      observer.observe(animationWrapperRef.current);
    }

    return () => {
      if (animationWrapperRef.current) {
        observer.unobserve(animationWrapperRef.current);
      }
    };
  }, []);

  return (
    <A.AnimationWrapper className="main-animation" ref={animationWrapperRef}>
      {isAnimationVisible && (
        <>
          <A.Text>축사 들어갈 자리 애니메이션 다 끝나면 자연스럽게 나타나주세요!</A.Text>
          <A.Leading>LEADING</A.Leading>
          <A.Woman>WOMAN</A.Woman>
          <A.Achieving>ACHIEVING</A.Achieving>
          <A.Developer>DEVELOPER</A.Developer>
          <A.Respect>RESPECT</A.Respect>
          <A.Perfect>PERFECT</A.Perfect>
          <A.DsceImg src={dsce} />
          <A.WebImg src={web} />
          <A.Star1 src={star} />
          <A.IosImg src={ios} />
          <A.UiImg src={ui} />
          <A.MetaverseImg src={metaverse} />
          <A.AppImg src={app} />
          <A.Star2 src={star} />
          <A.AiImg src={ai} />
          <A.GameImg src={game} />
        </>
      )}
    </A.AnimationWrapper>
  );
}
