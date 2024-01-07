import { useState, useEffect } from 'react';
import { type IHooks } from '../../shared/interfaces';

const withDarMode = (): IHooks<string | undefined> => {
  const [mode, setMode] = useState<string | undefined>();

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const colorScheme = event.matches ? 'dark' : 'light';
        setMode(colorScheme);
      });
  }, []);

  return {
    name: 'darkmode',
    value: mode,
    setter: setMode,
  };
};

export default withDarMode;
