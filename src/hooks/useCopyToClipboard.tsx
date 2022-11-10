import { useTranslation } from 'react-i18next';

import { showToast } from '@utils/toast.utils';

type CopyFn = (text: string) => Promise<boolean>;

function useCopyToClipboard(): CopyFn {
  const { t } = useTranslation();

  const copy: CopyFn = async text => {
    if (!navigator?.clipboard) {
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      showToast({
        type: 'success',
        title: 'Bien hecho!',
        text: t('COMMON.SUCCESS_COPY_CLIPBOARD'),
      });
      return true;
    } catch (error) {
      showToast({
        type: 'error',
        title: 'Ups!',
        text: t('COMMON.ERROR_COPY_CLIPBOARD'),
      });
      return false;
    }
  };

  return copy;
}

export default useCopyToClipboard;
