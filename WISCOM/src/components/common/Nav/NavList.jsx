import React, { useEffect, useRef, useState } from 'react';
import { TimelineMax, Power1, Power4, Back } from 'gsap';
import './nav.css';

const NavList = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuInnerRef = useRef(null);
  const menuTriggerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const menuTrigger = menuTriggerRef.current;

    if (!menuTrigger) {
      console.error('menuTrigger is null. Check your ref initialization.');
      return;
    }

    const handleMenuTriggerClick = () => {
      setMenuVisible(!menuVisible);
      const timeline = timelineRef.current;
      if (!menuVisible) {
        // 메뉴를 열 때 메뉴 배경을 보이게 함
        menuInnerRef.current.style.visibility = 'visible';
        timeline.play();
      } else {
        timeline.timeScale(1.25);
        timeline.reverse();
        // 메뉴를 닫을 때 생성된 menu 바를 사라지게 함
        setTimeout(() => {
          menuInnerRef.current.style.visibility = 'hidden';
        }, timeline.duration() * 0); // timeout 시간을 timeline의 duration으로 설정
      }
    };

    if (menuTrigger) {
      menuTrigger.addEventListener('click', handleMenuTriggerClick);
    }

    const timeline = new TimelineMax({
      paused: true,
    });

    timeline
      .to(
        menuInnerRef.current,
        1,
        {
          autoAlpha: 1,
          ease: Power4.easeOut,
        },
        'start',
      )
      .fromTo(
        document.querySelector('.js-menu-inner-background i'),
        0.25,
        {
          x: '-100%',
          autoAlpha: 0,
        },
        {
          x: '0%',
          autoAlpha: 1,
          ease: Power1.easeOut,
        },
        'start',
      )
      .staggerFromTo(
        document.querySelectorAll('.js-menu-items-list li'),
        0.4,
        {
          x: -30,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          delay: 0.35,
          ease: Back.easeOut.config(1),
        },
        0.15,
        'start',
      )
      .fromTo(
        document.querySelector('.js-menu-items-shape'),
        0.25,
        {
          scale: 0.7,
          autoAlpha: 0,
        },
        {
          scale: 1,
          autoAlpha: 1,
          delay: 0.95,
          ease: Back.easeOut.config(1.7),
        },
        'start',
      );

    timelineRef.current = timeline;

    return () => {
      // Cleanup: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      if (menuTrigger) {
        menuTrigger.removeEventListener('click', handleMenuTriggerClick);
      }
    };
  }, [menuVisible]);

  console.log(menuVisible);
  return (
    <>
      <div className={`menu__trigger`} ref={menuTriggerRef}>
        <span>{menuVisible ? 'CLOSE' : 'MENU'}</span>
      </div>

      <div className={`menu__inner js-menu-inner ${menuVisible ? 'active' : ''}`} ref={menuInnerRef}>
        <ul className="menu__inner-background js-menu-inner-background"></ul>

        <div className="menu__items-wrapper js-menu-items-wrapper">
          <ul className="menu__items-list js-menu-items-list">
            <li className="js-menu-item is-active">
              <a href="/project">PROJECT</a>
            </li>
            <li className="js-menu-item">
              <a href="/guestbook">GUESTBOOK</a>
            </li>
            <li className="js-menu-item">
              <a href="/chatbot">CHATBOT</a>
            </li>
            <li className="js-menu-item">
              <a href="#">QR-CODE</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavList;
