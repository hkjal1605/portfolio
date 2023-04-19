/**
 *
 * Hero
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import BgImage from 'app/assets/bg.webp';
import { Text } from '../Text/Loadable';

interface Props {
  scrollPosition: number;
}

const Container = styled.div<Props>`
  position: fixed;
  left: ${props => `${Math.min(80, props.scrollPosition * 0.2)}px`};
  right: ${props => `${Math.min(80, props.scrollPosition * 0.2)}px`};
  top: ${props => `${Math.min(60, props.scrollPosition * 0.12)}px`};
  height: ${props =>
    props.scrollPosition < 1200
      ? '100vh'
      : `${Math.max(0, (2200 - props.scrollPosition) * 0.1)}vh`};
  border-radius: ${props => `${Math.min(20, props.scrollPosition * 0.2)}px`};
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: block;
    background: rgba(0, 0, 0, 0.3);
    content: '';
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NameContainer = styled.div<Props>`
  z-index: 10;
  margin-bottom: ${props =>
    props.scrollPosition > 400 ? (props.scrollPosition - 400) * 0.2 : 0}px;
  opacity: ${props =>
    props.scrollPosition > 900 ? (1000 - props.scrollPosition) * 0.01 : 1};
`;

const DescriptionContainer = styled.div<Props>`
  z-index: 10;
  margin-bottom: ${props =>
    props.scrollPosition > 1200 ? (props.scrollPosition - 1200) * 0.2 : 0}px;
  opacity: ${props =>
    props.scrollPosition > 1200 && props.scrollPosition < 1700
      ? (props.scrollPosition - 1200) * 0.01
      : props.scrollPosition > 1500
      ? (1800 - props.scrollPosition) * 0.01
      : 0};
`;

export const Hero = memo((props: Props) => {
  return (
    <Container scrollPosition={props.scrollPosition}>
      <Image src={BgImage} />
      {props.scrollPosition < 1000 ? (
        <NameContainer scrollPosition={props.scrollPosition}>
          <Text
            fontFamily="CanelaDeckBold"
            color="#fff"
            lineHeight="80"
            size="64"
            letterSpacing="3"
            textAlign="center"
          >
            Hi, I am <br />
            HARSH KUMAR JHA
          </Text>
        </NameContainer>
      ) : null}

      {props.scrollPosition > 1200 ? (
        <DescriptionContainer scrollPosition={props.scrollPosition}>
          <Text
            fontFamily="CanelaDeckBold"
            color="#fff"
            lineHeight="45"
            size="36"
            textAlign="center"
          >
            I build beautiful,
            <br /> hand-crafted, pixel-perfect websites. <br />
            And I can do it for you. <br />
            <span
              style={{
                color: '#809BF2',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Contact me
            </span>
          </Text>
        </DescriptionContainer>
      ) : null}
    </Container>
  );
});
