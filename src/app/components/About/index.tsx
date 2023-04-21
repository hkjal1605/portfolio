/**
 *
 * About
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { themes } from 'styles/theme/themes';
import { Text } from '../Text/Loadable';

const Container = styled.div`
  width: 100%;
  margin-top: 20vh;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

interface Props {
  ref: any;
}

export const About = memo((props: Props) => {
  return (
    <Container ref={props.ref}>
      <Text
        fontFamily="CanelaDeckBold"
        lineHeight="80"
        size="64"
        letterSpacing="3"
        textAlign="left"
      >
        About
      </Text>
      <Text size="28" lineHeight="35" width="85%">
        <span style={{ color: themes.dark.textTertiary }}>
          Cheers, I am Harsh
        </span>
        , a recent undergraduate from one of the most prestigious colleges in
        India.
        <br /> I have worked with 2 startups in the past 2+ years, and have
        gained extensive skills in software development.{' '}
        <span style={{ color: themes.dark.textTertiary }}>
          I love working with React
        </span>{' '}
        and other JS frameworks, and building pixel perfect frontends is one of
        the few things that give me eternal satisfaction.
        <br /> I also have experience working on cloud services including AWS
        and Google Cloud, databases including MongoDB and Firebase and have
        built a very robust payment based subscription system using Stripe and
        Firebase which I am very proud of.
        <br /> I have been with a startup in its journey from 2K WAU to 600K+
        WAU, with a major part of the software being developed by me. I can
        confidently say that I thrive in a fast paced work environment, I am
        self motivated and can quickly learn new things as and when need arises.
        <br />I am open to working as a software developer. Ping me up if you
        need someone with god-level frontend development skills and a keen
        interest in bringing super cool ideas to life. <br />
        <br />
      </Text>
      <Text size="28" lineHeight="35" width="85%">
        Do checkout my{' '}
        <span
          style={{
            color: '#809BF2',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          LinkedIn
        </span>{' '}
        profile to know more about me. DM me on LinkedIn if you are up for a
        quick chat or mail me anytime. Looking forward to working on exciting
        projects with you.
      </Text>
    </Container>
  );
});
