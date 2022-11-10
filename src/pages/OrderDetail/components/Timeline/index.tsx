import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './Timeline.scss';
import { OrderStateDescription } from '@constants/order-states.constanst';
import { CdsCard, CdsTimeline, CdsTimelineItem } from '@components/Cds';
import { OrderState } from '@interfaces/order.interface';
import { timestampToHumanDate } from '@utils/functions.utils';

interface Props {
  states: Array<OrderState>;
}

const Timeline: FunctionComponent<Props> = ({ states }) => {
  const { t } = useTranslation();
  return (
    <CdsCard>
      <CdsTimeline>
        {states.map((state: OrderState, index: number) => (
          <CdsTimelineItem key={index} isActive={index === 0}>
            <div slot="title">{t(`ORDER_STATES.${state?.state}`)}</div>
            <div slot="subtitle">
              <div>{OrderStateDescription[state?.state]}</div>
              <div className="timeline__timestamp">
                {timestampToHumanDate(state?.created_at)}
              </div>
            </div>
          </CdsTimelineItem>
        ))}
      </CdsTimeline>
    </CdsCard>
  );
};

export default Timeline;
