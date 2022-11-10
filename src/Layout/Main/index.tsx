import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import './Main.scss';
import Navbar from '@components/Navbar';

const MainLayout: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="layout__container">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
