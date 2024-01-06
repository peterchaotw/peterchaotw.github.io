import type React from 'react';

export default interface IError {
  status?: number;
  title?: string;
  subTitle?: string | React.ReactNode;
}
