export enum OrderStates {
  ARRIVAL_SCAN = 'ARRIVAL_SCAN',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  EN_ROUTE_TO_DROPOFF = 'EN_ROUTE_TO_DROPOFF',
  FAILED = 'FAILED',
  DELIVERED = 'DELIVERED',
}

export const OrderStateDescription: {
  [key: string]: string;
} = {
  ARRIVAL_SCAN: 'Tu paquete ya se encuentra con Cargamos, está en espera de ser enviado',
  OUT_FOR_DELIVERY: 'Tu paquete está en ruta de entrega, cuando esté cerca de tu domicilio te notificaremos',
  EN_ROUTE_TO_DROPOFF: 'Tu paquete está por llegar a tu domicilio, visualiza su llegada a través del mapa',
  DELIVERY_ATTEMPTED: 'Tu paquete está pendiente de segundo intento de entrega',
  DELIVERED: 'Tu paquete fue entregado con éxito',
  FAILED: 'La entrega de tu paquete falló',
};
