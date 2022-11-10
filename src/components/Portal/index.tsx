import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { CdsOverlay } from '@components/Cds';

interface Props {
  portalWrapperId: string;
  children: React.ReactNode;
}

const Portal: FunctionComponent<Props> = ({ children, portalWrapperId }) => {
  const [wrapper, setWrapper] = useState<Element | undefined>();

  useLayoutEffect(() => {
    let element: Element = document.getElementById(portalWrapperId) as Element;
    if (!element) {
      const wrapperElement: Element = document.createElement('div');
      wrapperElement.setAttribute('id', portalWrapperId);
      document.body.appendChild(wrapperElement);
      element = wrapperElement;
    }

    setWrapper(element);
  }, [portalWrapperId]);

  return wrapper
    ? createPortal(<CdsOverlay>{children}</CdsOverlay>, wrapper)
    : null;
};

export default Portal;
