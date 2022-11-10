export const timestampToHumanDate = (timestamp: number): string => {
  return new Intl.DateTimeFormat('es-MX', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(timestamp));
};
