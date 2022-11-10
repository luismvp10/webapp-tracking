import { Order } from '@interfaces/order.interface';

const { VITE_API_BASE_URL, VITE_CARGAMOS_API_KEY } = import.meta.env;

export const getOrderById = (trackingId: string): Promise<Order> => {
  const url = `${VITE_API_BASE_URL}/v1/webapp-view/${trackingId}?key=${VITE_CARGAMOS_API_KEY}`;

  return new Promise<Order>((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject(response);
        }
      })
      .then(({ result }) => resolve(result))
      .catch(error => new Error(error));
  });
};

export const getTrakingLocationById = (trackingId: string): Promise<any> => {
  const url = `${VITE_API_BASE_URL}/v1/carguer-last-location/${trackingId}?key=${VITE_CARGAMOS_API_KEY}`;
  return new Promise<Order>((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject(response);
        }
      })
      .then(({ result }) => resolve(result))
      .catch(error => new Error(error));
  });
};

export const qualifyOrder = (payload: {
  trackingId: string;
  rating: number;
  feedback: string;
}): Promise<void> => {
  const url = `${VITE_API_BASE_URL}/v1/ratings/${payload.trackingId}?key=${VITE_CARGAMOS_API_KEY}`;
  return new Promise<void>((resolve, reject) => {
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject(response);
        }
      })
      .then(() => resolve())
      .catch(error => new Error(error));
  });
};
