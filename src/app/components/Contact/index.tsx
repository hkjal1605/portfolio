/**
 *
 * Contact
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTheme } from 'styles/theme/ThemeProvider';
import { themes } from 'styles/theme/themes';
import constants from 'utils/constants';
import { Text } from '../Text/Loadable';

import LinkedinIconWhite from 'app/assets/social/linkedin-white.svg';
import GithubIconWhite from 'app/assets/social/github-white.svg';
import { IconBox } from '../IconBox/Loadable';

interface Props {}

const Container = styled.div`
  width: 100%;
  margin-top: 10vh;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Contact = memo((props: Props) => {
  const theme = useTheme();
  return (
    <Container>
      <Text
        fontFamily="CanelaDeckBold"
        lineHeight="80"
        size="64"
        letterSpacing="3"
        textAlign="left"
      >
        CONTACT ME!
      </Text>
      <Text
        marginTop="80"
        fontFamily="CanelaDeckBold"
        lineHeight="80"
        size="64"
        letterSpacing="3"
        textAlign="center"
      >
        I'm available for freelance work. Drop me a mail if you fancy a chat.
      </Text>
      <a
        href={constants.gmail}
        style={{ textDecoration: 'none', color: theme.text }}
      >
        <Text
          fontFamily="CanelaDeckBold"
          lineHeight="80"
          size="64"
          letterSpacing="3"
          marginTop="80"
          color={themes.dark.textTertiary}
        >
          hkjal1605@gmail.com
        </Text>
      </a>
      <div
        style={{
          display: 'flex',
          width: '140px',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <a href={constants.linkedin} target="_blank">
          <IconBox
            src={LinkedinIconWhite}
            height="50px"
            width="50px"
            cursor="pointer"
          />
        </a>
        <a href={constants.github} target="_blank">
          <IconBox
            src={GithubIconWhite}
            height="45px"
            width="45px"
            cursor="pointer"
          />
        </a>
      </div>
    </Container>
  );
});
