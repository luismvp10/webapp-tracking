import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './Map.scss';
import { OrderStates } from '@constants/order-states.constanst';

interface Prop {
  state: OrderStates;
}

const Map: FunctionComponent<Prop> = ({ state }) => {
  const { t } = useTranslation();

  return (
    <div className="map__container">
      <div className="map__state">{t(`MAP_ORDER_STATES.${state}`)}</div>
    </div>
  );
};

export default Map;
