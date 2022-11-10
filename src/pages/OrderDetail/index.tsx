import React, { FunctionComponent, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { OrderStates } from '@constants/order-states.constanst';
import { useTranslation } from 'react-i18next';

import './OrderDetail.scss';
import Timeline from './components/Timeline';
import DeliveryInfo from './components/Desktop/DeliveryInfo';
import DeliveryInfoMobile from './components/Mobile/DeliveryInfo';

import { CdsCard, CdsEmptyState, CdsIcon } from '@components/Cds';
import useGetOrder from '@hooks/useGetOrder';
import useMediaQuery from '@hooks/useMediaQuery';
import Map from './components/Map';
import CarguerAvatar from './components/CarguerAvatar';
import Loading from '@components/Loading';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Order } from '@interfaces/order.interface';

const SwipeableBottomSheetTimeline: FunctionComponent<{
  order: Order;
}> = ({ order }) => {
  return (
    <div>
      <SwipeableBottomSheet
        overflowHeight={80}
        topShadow={false}
        scrollTopAtClose={true}
        bodyStyle={{ backgroundColor: 'transparent' }}>
        <div
          style={{
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CdsIcon name="chevron-upward" />
        </div>
        <div>
          <Timeline states={order.active_states} />
        </div>
      </SwipeableBottomSheet>
    </div>
  );
};

const OrderDetail: FunctionComponent = () => {
  const { t } = useTranslation();
  const { trackingId } = useParams<'trackingId'>();
  const matched = useMediaQuery('(min-width: 769px)');
  const { order, isOrderLoaded } = useGetOrder(trackingId as string);

  return (
    <Fragment>
      {order && !isOrderLoaded && (
        <Fragment>
          {matched ? (
            <div className="order__container">
              <div>
                <Timeline states={order?.active_states} />
                <DeliveryInfo order={order} />
              </div>

              <Map state={order.state as OrderStates} />
            </div>
          ) : (
            /* <div className="order__container">
              <Map state={order.state as OrderStates} />
              <div className="delivery__info">
                <div className="delivery__title">
                  {t('COMMON.ORDER_TRACKING')}
                </div>
                <div className="delivery__cards">
                  <Timeline states={order?.active_states} />
                  <DeliveryInfo order={order} />
                </div>
              </div>
            </div> */
            <div className="order__container__mobile">
              <DeliveryInfoMobile order={order} />
              <Map state={order.state as OrderStates} />
              <CdsCard>
                <CarguerAvatar carguerName={order?.courier_name} />
              </CdsCard>
            </div>
          )}

          <SwipeableBottomSheetTimeline order={order} />
        </Fragment>
      )}

      {!order && !isOrderLoaded && (
        <CdsCard>
          <CdsEmptyState>{t('COMMON.ORDER_NOT_FOUND')}</CdsEmptyState>
        </CdsCard>
      )}

      {isOrderLoaded && <Loading text={t('COMMON.SEARCHING_ORDER')} />}
    </Fragment>
  );
};

export default OrderDetail;
