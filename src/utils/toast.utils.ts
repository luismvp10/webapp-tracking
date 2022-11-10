import { ToastController, ToastConfig } from '@cds.js/core';

type ToastOptions = Omit<ToastConfig, 'timer' | 'progress' | 'position'>;

let toastCtrl: ToastController;

export const showToast = (options: ToastOptions) => {
  if (!toastCtrl) {
    toastCtrl = new ToastController();
  }

  toastCtrl.show({
    ...options,
    position: 'bottom-start',
    progress: false,
    timer: 4000,
  });
};
