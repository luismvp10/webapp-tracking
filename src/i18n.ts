import i18next from 'i18next';
import es from './translations/es.json';

// eslint-disable-next-line import/no-named-as-default-member
i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      translation: es,
    },
  },
});

export default i18next;
