import React, { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import MainLayout from '@layouts/Main';
import OrderDetail from '@pages/OrderDetail';

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="order-detail/:trackingId" element={<OrderDetail />} />
        <Route path="*" element={<div>Not found</div>} /> */
      </Route>
    </Routes>
  );
};

export default App;
