import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './Navbar.scss';

import { PAGES_REDIRECT } from '@constants/page-redirections.constanst';

const Navbar: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <header className="navbar__container">
      <div className="navbar__brand">
        <a href={PAGES_REDIRECT.CARGAMOS_HOME} rel="noopener">
          <img
            src="/images/logo_horizontal.svg"
            alt="cargamos logo"
            loading="lazy"
          />
        </a>
      </div>

      <nav className="navbar__links">
        <a
          className="link__item"
          href={PAGES_REDIRECT.OUR_SOLUTIONS}
          rel="noopener">
          {t('NAVBAR.OUR_SOLUTIONS')}
        </a>
        <a className="link__item" href={PAGES_REDIRECT.ABOUT_US} rel="noopener">
          {t('NAVBAR.WHO_WE_ARE')}
        </a>
        <a className="link__item" href="/" rel="noopener">
          {t('NAVBAR.ORDER_TRACKING')}
        </a>
        <a
          className="link__item link__item--black hide-sm"
          href={PAGES_REDIRECT.CONTACT}
          rel="noopener">
          {t('NAVBAR.CONTACT_US')}
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
