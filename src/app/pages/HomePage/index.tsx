import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Header } from 'app/components/Header/Loadable';
import { Hero } from 'app/components/Hero/Loadable';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
`;

export function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Harsh Kumar Jha | Web Developer | Mobile Developer</title>
        <meta
          name="description"
          content="Experienced software developer always ready to help you get your idea or business shipped to everyone across the globe as a website or mobile app!"
        />
      </Helmet>
      <Hero scrollPosition={scrollPosition} />
      <Header scrollPosition={scrollPosition} />
      <div style={{ width: '100%', height: '400vh' }}></div>
    </>
  );
}
