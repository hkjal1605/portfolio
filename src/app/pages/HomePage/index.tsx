import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Header } from 'app/components/Header/Loadable';
import { Hero } from 'app/components/Hero/Loadable';
import styled from 'styled-components/macro';
import { About } from 'app/components/About/Loadable';
import { useTheme } from 'styles/theme/ThemeProvider';
import { themes } from 'styles/theme/themes';
import { Experience } from 'app/components/Experience/Loadable';
import { Contact } from 'app/components/Contact/Loadable';

const Container = styled.div<any>`
  width: 100%;
  min-height: 800vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: ${props => (props.scrollPosition < 2100 ? 'auto' : 'hidden')};
  background: ${props => props.theme.background};
  transition: background 0.35s;
`;

export function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 2150 && theme.text !== themes.dark.text) {
      setTheme(themes.dark);
    }
    if (scrollPosition < 2150 && theme.text !== themes.light.text) {
      setTheme(themes.light);
    }
  }, [scrollPosition]);

  const aboutRef = useRef();
  const experienceRef = useRef();

  const scollToAbout = () => {
    window.scrollTo({ top: 2151 });
    (aboutRef.current as any)?.scrollIntoView();
  };

  const scrollToExperience = () => {
    const exp = document.getElementById('experience');
    window.scrollTo({
      top: exp?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <Container theme={theme} scrollPosition={scrollPosition}>
      <Helmet>
        <title>Harsh Kumar Jha | Web Developer | Mobile Developer</title>
        <meta
          name="description"
          content="Experienced software developer always ready to help you get your idea or business shipped to everyone across the globe as a website or mobile app!"
        />
      </Helmet>
      <Header
        scrollPosition={scrollPosition}
        scollToAbout={scollToAbout}
        scrollToExperience={scrollToExperience}
      />
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: `${Math.min(60, scrollPosition * 0.12)}px`,
          bottom: 0,
          overflowY: scrollPosition > 2100 ? 'auto' : 'hidden',
          padding: `0px ${Math.min(80, scrollPosition * 0.2)}px`,
        }}
      >
        <Hero scrollPosition={scrollPosition} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Contact />
      </div>
    </Container>
  );
}
