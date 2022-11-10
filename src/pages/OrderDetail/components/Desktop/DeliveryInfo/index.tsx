import React, { FunctionComponent } from 'react';

import './DeliveryInfo.scss';
import { CdsCard, CdsButton, CdsBadge } from '@components/Cds';
import { useTranslation } from 'react-i18next';
import { Order } from '@interfaces/order.interface';
import CarguerAvatar from '@pages/OrderDetail/components/CarguerAvatar';
import useCopyToClipboard from '@hooks/useCopyToClipboard';

interface DeliveryInfoProps {
  order: Order;
}

interface InfoContainerProps {
  label: string;
  description: string;
}

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

const DeliveryInfo: FunctionComponent<DeliveryInfoProps> = ({ order }) => {
  const { t } = useTranslation();
  const copy = useCopyToClipboard();

  const onCopyTrackingId = () => copy(order.tracking_id);

  return (
    <CdsCard>
      <div className="guide__container">
        <div className="item__description">
          {t('COMMON.ORDER')}: {order?.cargamos_tracking_id}
        </div>
        <CdsButton onlyIcon icon="copy" onClick={onCopyTrackingId}></CdsButton>
      </div>

      <div className="status__container">
        <div className="item__title">{t('COMMON.STATUS')}</div>
        <CdsBadge type="large"> {t(`ORDER_STATES.${order?.state}`)}</CdsBadge>
      </div>
      <hr></hr>

      <div className="info__order__container">
        <div className="sender__container">
          <div className="item__description">{t('COMMON.SENDER_DATA')}</div>
          <InfoContainer
            label={t('COMMON.SENDER')}
            description={order?.domain.split('.')[0]}
          />
        </div>

        <div>
          <div className="item__description">{t('COMMON.RECIPIENT_DATA')}</div>
          <div className="dropoff__container">
            <InfoContainer
              label={t('COMMON.RECIPIENT')}
              description={order?.contact_name}
            />
            <InfoContainer
              label={t('COMMON.DELIVERY_ADDRESS')}
              description={order?.contact_full_address}
            />
          </div>
        </div>
      </div>
      <hr />
      <CarguerAvatar carguerName={order?.courier_name} />
    </CdsCard>
  );
};

export default DeliveryInfo;
