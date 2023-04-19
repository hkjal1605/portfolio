/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { IconBox } from '../IconBox/Loadable';
import { Text } from '../Text/Loadable';

import LogoBlack from 'app/assets/hkj-black.png';
import LogoWhite from 'app/assets/hkj-white.png';
import GmailIcon from 'app/assets/social/gmail.svg';
import LinkedinIcon from 'app/assets/social/linkedin.svg';
import GithubIcon from 'app/assets/social/github.svg';
import GmailIconWhite from 'app/assets/social/gmail-white.svg';
import LinkedinIconWhite from 'app/assets/social/linkedin-white.svg';
import GithubIconWhite from 'app/assets/social/github-white.svg';
import { media } from 'styles/media';
import constants from 'utils/constants';

interface Props {
  scrollPosition: number;
}

const Container = styled.div`
  left: 0;
  top: -2px;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  height: 60px;
  z-index: 99;

  ${media.mediumsmall} {
    padding-left: 48px;
    padding-right: 48px;
  }

  ${media.medium} {
    padding-left: 100px;
    padding-right: 100px;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.45rem;
  }

  transition: all 0.5s;
`;

export const Header = memo((props: Props) => {
  return (
    <Container>
      <div>
        <IconBox
          src={props.scrollPosition > 270 ? LogoBlack : LogoWhite}
          height="28px"
          width="40px"
          cursor="pointer"
        />
        <Text
          fontWeight="400"
          cursor="pointer"
          color={props.scrollPosition > 270 ? '#000' : '#fff'}
        >
          About
        </Text>
        <Text
          fontWeight="400"
          cursor="pointer"
          color={props.scrollPosition > 270 ? '#000' : '#fff'}
        >
          Experience
        </Text>
        <Text
          fontWeight="400"
          cursor="pointer"
          color={props.scrollPosition > 270 ? '#000' : '#fff'}
        >
          Education
        </Text>
        <Text
          fontWeight="400"
          cursor="pointer"
          color={props.scrollPosition > 270 ? '#000' : '#fff'}
        >
          Contact
        </Text>
      </div>
      <div>
        <a href={constants.gmail}>
          <IconBox
            src={props.scrollPosition > 270 ? GmailIcon : GmailIconWhite}
            height="28px"
            width="28px"
            cursor="pointer"
          />
        </a>
        <a href={constants.linkedin} target="_blank">
          <IconBox
            src={props.scrollPosition > 270 ? LinkedinIcon : LinkedinIconWhite}
            height="28px"
            width="28px"
            cursor="pointer"
          />
        </a>
        <a href={constants.github} target="_blank">
          <IconBox
            src={props.scrollPosition > 270 ? GithubIcon : GithubIconWhite}
            height="28px"
            width="28px"
            cursor="pointer"
          />
        </a>
      </div>
    </Container>
  );
});
