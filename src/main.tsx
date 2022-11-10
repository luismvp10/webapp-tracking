import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import './index.scss';
import App from './App';
import i18next from './i18n';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
);
