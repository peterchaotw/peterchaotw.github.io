import { type Dispatch, type SetStateAction } from 'react';

export interface IHooks<T> {
  name: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
}
