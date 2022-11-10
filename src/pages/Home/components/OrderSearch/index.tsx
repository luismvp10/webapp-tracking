import React, { FunctionComponent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './OrderSearch.scss';
import useGetOrder from '@hooks/useGetOrder';
import Loading from '@components/Loading';
import { CdsInput, CdsButton } from '@components/Cds';

const OrderSearch: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState<string>('');
  const { order, isOrderLoaded, getOrder } = useGetOrder();

  useEffect(() => {
    if (order) {
      navigate(`order-detail/${trackingId}`);
    }
  });

  const handleTrackingId = (event: CustomEvent) =>
    setTrackingId(event.detail.target.value);

  const handleClick = (): void => getOrder(trackingId);

  return (
    <>
      <div className="search__box">
        <div className="search__title">{t('COMMON.TRACK_YOUR_ORDER')}</div>
        <div className="search__description">{t('HOME.WELCOME')}</div>

        <div className="search__form">
          <CdsInput
            endIcon="search"
            size="lg"
            onCdsInput={handleTrackingId}
            placeholder={t('COMMON.GUIDE_NUMBER')}
            className="search__input"
          />
          <CdsButton disabled={!trackingId} onClick={handleClick}>
            {t('HOME.TRACK')}
          </CdsButton>
        </div>
      </div>
      {isOrderLoaded && <Loading text={t('COMMON.SEARCHING_ORDER')} />}
    </>
  );
};

export default OrderSearch;
