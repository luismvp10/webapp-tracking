import React, { FunctionComponent } from 'react';

import './Loading.scss';
import Portal from '@components/Portal';
import { CdsLoading, CdsOverlay } from '@components/Cds';

interface LoadingProps {
  text?: string;
}

const Loading: FunctionComponent<LoadingProps> = ({ text }) => {
  return (
    <Portal portalWrapperId="loadingPortal">
      <CdsOverlay>
        <CdsLoading
          text={text}
          type="conveyor"
          className="loading__container"
        />
      </CdsOverlay>
    </Portal>
  );
};

export default Loading;
