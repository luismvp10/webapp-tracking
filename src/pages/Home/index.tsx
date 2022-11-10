import React, { FunctionComponent } from 'react';

import './Home.scss';
import OrderSearch from '@pages/Home/components/OrderSearch';

const Home: FunctionComponent = () => {
  return (
    <div className="home__container">
      <OrderSearch />
    </div>
  );
};

export default Home;
