import 'i18next';
import type en from '../assets/locales/en-US';
import type jp from '../assets/locales/jp/';
import type zh from '../assets/locales/zh-TW';

declare module 'i18next' {
  interface CustomTypeOpetions {
    defaultNS: 'en-US';
    resources: {
      'en-US': typeof en;
      'zh-TW': typeof zh;
      'ja-JP': typeof jp;
    };
  }
}
