import React, { FunctionComponent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  carguerName: string;
}

const CarguerAvatar: FunctionComponent<Props> = ({ carguerName }) => {
  const { t } = useTranslation();
  const [carguerAvatar, setCarguerAvatar] = useState<string | undefined>();

  useEffect(() => {
    const random: number = Math.floor(Math.random() * 4) + 1;
    setCarguerAvatar(`/images/avatars/Avatar${random}.svg`);
  }, []);

  return (
    <div>
      <div className="item__description">Datos del repartidor</div>

      <div>
        <div className="item__title">{t('COMMON.DELIVERY_MAN')}</div>
        <div className="carguer__info">
          <div>
            <img
              src={carguerAvatar}
              className="carguer__avatar"
              alt="carguer avatar"
            />
          </div>
          <div className="item__description">
            {carguerName || t('COMMON.NOT_AVAILABLE')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarguerAvatar;
