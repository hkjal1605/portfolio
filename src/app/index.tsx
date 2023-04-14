/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s"
        defaultTitle="Harsh Kumar Jha | Web Developer | Mobile Developer"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="Experienced software developer always ready to help you get your idea or business shipped to everyone across the globe as a website or mobile app!"
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
