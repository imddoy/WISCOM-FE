import BackBlue from '../../img/Project/BackgroundBlue.svg';
import { useEffect } from 'react';
import styled from 'styled-components';

function Example() {
  /* --------------------
  Vars
  -------------------- */
  let progress = 50;
  let startX = 0;
  let active = 0;
  let isDown = false;

  /* --------------------
  Constants
  -------------------- */
  const speedWheel = 0.02;
  const speedDrag = -0.1;

  /* --------------------
  Get Z
  -------------------- */
  const getZindex = (array, index) =>
    array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

  /* --------------------
  Items
  -------------------- */
  const $items = document.querySelectorAll('.carousel-item');
  const $cursors = document.querySelectorAll('.cursor');

  const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index];
    item.style.setProperty('--zIndex', zIndex);
    item.style.setProperty('--active', (index - active) / $items.length);
  };

  /* --------------------
  Animate
  -------------------- */
  const animate = () => {
    progress = Math.max(0, Math.min(progress, 100));
    active = Math.floor((progress / 100) * ($items.length - 1));

    $items.forEach((item, index) => displayItems(item, index, active));
  };
  animate();

  /* --------------------
  Click on Items
  -------------------- */
  $items.forEach((item, i) => {
    item.addEventListener('click', () => {
      progress = (i / $items.length) * 100 + 10;
      animate();
    });
  });

  /* --------------------
  Handlers
  -------------------- */
  const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    progress = progress + wheelProgress;
    animate();
  };

  const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
      $cursors.forEach(($cursor) => {
        $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
    if (!isDown) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    progress = progress + mouseProgress;
    startX = x;
    animate();
  };

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  /* --------------------
  Listeners
  -------------------- */
  useEffect(() => {
    document.addEventListener('mousewheel', handleWheel);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleMouseDown);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      // Clean up event listeners on unmount
      document.removeEventListener('mousewheel', handleWheel);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleMouseDown);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  function Carousel() {
    const carouselItems = [
      {
        title: 'Paris',
        num: '01',
        imgSrc: BackBlue,
      },
      {
        title: 'Warsaw',
        num: '02',
        imgSrc: BackBlue,
      },
      {
        title: 'Madrid',
        num: '03',
        imgSrc: BackBlue,
      },
      {
        title: 'Sydney',
        num: '04',
        imgSrc: BackBlue,
      },
      {
        title: 'Istanbul',
        num: '05',
        imgSrc: BackBlue,
      },
      {
        title: 'Prague',
        num: '06',
        imgSrc: BackBlue,
      },
      {
        title: 'Munich',
        num: '07',
        imgSrc: BackBlue,
      },
      {
        title: 'Venice',
        num: '08',
        imgSrc: BackBlue,
      },
      {
        title: 'Oslo',
        num: '09',
        imgSrc: BackBlue,
      },
      {
        title: 'London',
        num: '10',
        imgSrc: BackBlue,
      },
    ];

    return (
      <div className="carousel">
        {carouselItems.map((item, index) => (
          <div className="carousel-item" key={index}>
            <div className="carousel-box">
              <div className="title">{item.title}</div>
              <div className="num">{item.num}</div>
              <img src={item.imgSrc} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  function Layout() {
    return (
      <div className="layout">
        <div className="box">
          High-end, full-service
          <br />
          visual content creation
          <br />
          for lifestyle branding.
        </div>
      </div>
    );
  }

  function Logo() {
    return <a className="logo">BackBlue</a>;
  }

  function Social() {
    return (
      <div className="social">
        <a>
          BackBlue
          <svg>
            <use xlinkHref="#ico-linkedin"></use>
          </svg>
        </a>
        <a>
          BackBlue
          <svg>
            <use xlinkHref="#ico-instagram"></use>
          </svg>
        </a>
      </div>
    );
  }

  function Cursor() {
    return <div className="cursor"></div>;
  }

  function Cursor2() {
    return <div className="cursor cursor2"></div>;
  }

  return (
    <Example>
      <Carousel />
      <Layout />
      <Logo />
      <Social />
      <Cursor />
      <Cursor2 />
    </Example>
  );
}

// Carousel 컴포넌트 스타일
export const Carousel = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
`;

export const CarouselItem = styled.div`
  --items: 10;
  --width: clamp(150px, 30vw, 300px);
  --height: clamp(200px, 40vw, 400px);
  --x: calc(var(--active) * 800%);
  --y: calc(var(--active) * 200%);
  --rot: calc(var(--active) * 120deg);
  --opacity: calc(var(--zIndex) / var(--items) * 3 - 2);
  overflow: hidden;
  position: absolute;
  z-index: var(--zIndex);
  width: var(--width);
  height: var(--height);
  margin: calc(var(--height) * -0.5) 0 0 calc(var(--width) * -0.5);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  user-select: none;
  transform-origin: 0% 100%;
  box-shadow: 0 10px 50px 10px rgba(0, 0, 0, 0.5);
  background: black;
  pointer-events: all;
  transform: translate(var(--x), var(--y)) rotate(var(--rot));
  transition: transform 0.8s cubic-bezier(0, 0.02, 0, 1);

  .carousel-box {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
    opacity: var(--opacity);
    font-family: 'Orelo-sw-db', serif;

    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.5)
      );
    }
  }

  .title {
    position: absolute;
    z-index: 1;
    color: #fff;
    bottom: 20px;
    left: 20px;
    transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
    font-size: clamp(20px, 3vw, 30px);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }

  .num {
    position: absolute;
    z-index: 1;
    color: #fff;
    top: 10px;
    left: 20px;
    transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
    font-size: clamp(20px, 10vw, 80px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;

// Layout 컴포넌트 스타일
export const Layout = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 90px;
    width: 10px;
    height: 100%;
    border: 1px solid #fff;
    border-top: none;
    border-bottom: none;
    opacity: 0.15;
  }

  .box {
    position: absolute;
    bottom: 0;
    left: 30px;
    color: #fff;
    transform-origin: 0% 10%;
    transform: rotate(-90deg);
    font-size: 9px;
    line-height: 1.4;
    text-transform: uppercase;
    opacity: 0.4;
  }
`;

// Logo 컴포넌트 스타일
export const LogoLink = styled.a`
  position: absolute;
  z-index: 2;
  top: 28px;
  right: 28px;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Orelo-sw-db', serif;
  pointer-events: all;
  color: black;
  text-decoration: none;
  font-size: 20px;
  overflow: hidden;
  padding-bottom: 0.1em;
`;

// Social 컴포넌트 스타일
export const Social = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  right: 25px;
  color: #fff;
  opacity: 0.4;

  a {
    display: inline-block;
    margin-left: 3px;
  }

  svg {
    --fill: #fff;
    width: 35px;
    height: 35px;
  }
`;

// Cursor 컴포넌트 스타일
export const Cursor = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  --size: 40px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: calc(var(--size) * -0.5) 0 0 calc(var(--size) * -0.5);
  transition: transform 0.85s cubic-bezier(0, 0.02, 0, 1);
  display: none;
  pointer-events: none;

  @media (pointer: fine) {
    display: block;
  }
`;

// Cursor2 컴포넌트 스타일
export const Cursor2 = styled.div`
  --size: 2px;
  transition-duration: 0.7s;
`;

export default Example;
