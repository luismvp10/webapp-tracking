import { useEffect, useState } from 'react';

import { showToast } from '@utils/toast.utils';
import { Order } from '@interfaces/order.interface';
import { getOrderById } from '@services/api.service';

interface HookResponse {
  isOrderLoaded: boolean;
  order: Order | null;
  getOrder: (trackingId: string) => void;
}

function useGetOrder(trackingId?: string): HookResponse {
  const [order, setOrder] = useState<Order | null>(null);
  const [isOrderLoaded, setIsOrderLoaded] = useState<boolean>(false);
  const [localTrackingId, setLocalTrackingId] = useState<string | undefined>(
    trackingId,
  );

  useEffect(() => {
    if (localTrackingId) {
      const getOrder = async (): Promise<void> => {
        try {
          setIsOrderLoaded(true);
          const order: Order = await getOrderById(localTrackingId);
          setOrder(order);
          setIsOrderLoaded(false);
        } catch (error) {
          setIsOrderLoaded(false);
          setOrder(null);
          showToast({
            type: 'error',
            text: 'Orden no encontrada',
            title: 'Algo salio mal',
          });
        }
      };

      getOrder();
    }
  }, [localTrackingId]);

  return {
    isOrderLoaded,
    order,
    getOrder: setLocalTrackingId,
  };
}

export default useGetOrder;
