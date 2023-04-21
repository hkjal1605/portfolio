/**
 *
 * Experience
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTheme } from 'styles/theme/ThemeProvider';
import { Text } from '../Text/Loadable';

const Container = styled.div`
  width: 100%;
  margin-top: 10vh;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .vertical-line {
    height: 178vh;
    min-width: 5px;
    border-radius: 100px;
    background: ${props => props.theme.text};
    margin-left: 20px;
  }
`;

const ExperienceCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 50px;
  margin-left: -22px;

  .title {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .circle {
      min-width: 40px;
      height: 40px;
      background: ${props => props.theme.text};
      border-radius: 100px;
      margin-right: 15px;
      outline: 6px solid ${props => props.theme.background};
      margin-top: -4.5px;
    }
  }

  .content {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 50px;
    margin-top: 20px;
  }
`;

interface Props {
  ref?: any;
}

export const Experience = memo((props: Props) => {
  const { theme } = useTheme();

  const data = [
    {
      role: 'Product Engineer',
      company: 'Martian',
      link: 'https://martianwallet.xyz',
      time: 'Jul 2022 - Present · 10 mos',
      points: [
        'Contributed to the growth of the company, which saw a significant increase in Weekly Active Users from 2k to 600k+',
        'Worked on developing a multichain crypto wallet for Move-based blockchains like Aptos and Sui',
        'Spearheaded the development of a Chrome extension built on React. Led the development of a React Native mobile app',
      ],
    },
    {
      role: 'Software Developer Intern',
      company: 'Visa',
      link: 'https://visa.com',
      time: 'May 2022 - Jul 2022 · 3 mos',
      points: [
        'Developed a data transformation microservice aimed at facilitating easy validation and transformation of JSON data',
        'Designed a distributed cache solution using Hazelcast to solve the problems in the in-memory cache that was used',
        'Created a config-based playground on the frontend, providing developers with a place to test the microservices',
      ],
    },
    {
      role: 'Full Stack Developer · Freelance',
      company: 'InfluencrX',
      link: 'https://influencrx.com',
      time: 'Nov 2020 - Apr 2022 · 1 yr 6 mos',
      points: [
        'Designed a database model that allowed creators to offer multiple subscription tiers based on a pricing structure',
        'Responsible for developing social media functionalities including posts, personal messages, and marketplace',
        'Utilized AWS services to create a secure pipeline for upload, processing, and storage of media files and other data',
        'Built a subscription-based and a one-time payment system using Stripe, allowing creators to monetize their content',
      ],
    },
    {
      role: 'Hackathon Winner',
      company: 'Smart India Hackathon, 2022',
      link: 'https://sih.gov.in/',
      time: 'Mar 2022 - Aug 2022Mar',
      points: [
        'Created an award-winning solution for the National Disaster Response Force (NDRF) that collected data from social media sites during the event of a disaster, analyzed them to determine extent of damage and help is required in an area, thus reducing the man power and time spent on doing social media analysis to find people in need of help in disaster struck areas',
      ],
    },
  ];

  return (
    <Container ref={props.ref} id="experience">
      <Text
        fontFamily="CanelaDeckBold"
        lineHeight="80"
        size="64"
        letterSpacing="3"
        textAlign="left"
      >
        Experience
      </Text>
      <TimelineContainer theme={theme}>
        <div className="vertical-line" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          {data.map(exp => (
            <ExperienceCard theme={theme}>
              <div className="title">
                <div className="circle" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Text size="36" lineHeight="32">
                    {exp.role} at{' '}
                    <span
                      style={{
                        color: '#809BF2',
                        cursor: 'pointer',
                      }}
                      onClick={() => window.open(exp.link)}
                    >
                      {exp.company}
                    </span>
                  </Text>
                  <Text type="secondary" size="20" marginTop="6">
                    {exp.time}
                  </Text>
                </div>
              </div>
              <div className="content">
                {exp.points.map(point => (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        minWidth: '10px',
                        minHeight: '10px',
                        background: theme.text,
                        borderRadius: '100px',
                        marginRight: '10px',
                        marginTop: '9.5px',
                      }}
                    />
                    <Text size="28" lineHeight="35">
                      {point}
                    </Text>
                  </div>
                ))}
              </div>
            </ExperienceCard>
          ))}
        </div>
      </TimelineContainer>
    </Container>
  );
});
