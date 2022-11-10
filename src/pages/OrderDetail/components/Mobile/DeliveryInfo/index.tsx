import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';

import './DeliveryInfo.scss';
import { CdsCard, CdsButton, CdsBadge } from '@components/Cds';
import { useTranslation } from 'react-i18next';
import { Order, OrderState } from '@interfaces/order.interface';
import { OrderStates } from '@constants/order-states.constanst';
import { timestampToHumanDate } from '@utils/functions.utils';

interface DeliveryInfoProps {
  order: Order;
}

interface InfoContainerProps {
  label: string;
  description: string;
}

const getLastOrderState = (orderStates: Array<OrderState>) => {
  return orderStates[0].created_at;
};

const getStartRoute = (orderStates: Array<OrderState>) => {
  return orderStates[orderStates.length - 1].created_at;
};

const InfoContainer: FunctionComponent<InfoContainerProps> = ({
  label,
  description,
}) => {
  return (
    <div className="info__container">
      <div className="item__title">{label}</div>
      <div className="item__description">{description}</div>
    </div>
  );
};

const DeliveryInfoMobile: FunctionComponent<DeliveryInfoProps> = ({
  order,
}) => {
  const { t } = useTranslation();
  const [, setCarguerAvatar] = useState<string | undefined>();

  useEffect(() => {
    const random: number = Math.floor(Math.random() * 4) + 1;
    setCarguerAvatar(`/images/avatars/Avatar${random}.svg`);
  }, []);

  return (
    <Fragment>
      <CdsBadge type="large">{t(`ORDER_STATES.${order?.state}`)}</CdsBadge>

      <CdsCard className="delivery__info__container">
        <div className="delivery__info__item delivery__info__item--flex">
          <InfoContainer
            label={t('COMMON.SENDER')}
            description={order?.domain.split('.')[0]}
          />

          <div className="item__description">
            {t('COMMON.ORDER')}: {order?.cargamos_tracking_id}
            <CdsButton onlyIcon icon="copy"></CdsButton>
          </div>
        </div>

        <div className="delivery__info__item">
          <InfoContainer
            label={t('COMMON.RECIPIENT')}
            description={order?.contact_name}
          />
        </div>

        <div className="delivery__info__item">
          <InfoContainer
            label={t('COMMON.DELIVERY_ADDRESS')}
            description={order?.contact_full_address}
          />
        </div>

        {order.state === OrderStates.DELIVERED && (
          <div className="delivery__info__item delivery__info__item--flex">
            <InfoContainer
              label={t('COMMON.SENDER')}
              description={timestampToHumanDate(
                getStartRoute(order.active_states),
              )}
            />

            <InfoContainer
              label={t('COMMON.SENDER')}
              description={timestampToHumanDate(
                getLastOrderState(order.active_states),
              )}
            />
          </div>
        )}
      </CdsCard>
    </Fragment>
  );
};

export default DeliveryInfoMobile;
