import * as React from 'react';
import { Helmet } from 'react-helmet-async';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Harsh Kumar Jha | Web Developer | Mobile Developer</title>
        <meta
          name="description"
          content="Experienced software developer always ready to help you get your idea or business shipped to everyone across the globe as a website or mobile app!"
        />
      </Helmet>
      <div>Hello there</div>
    </>
  );
}
