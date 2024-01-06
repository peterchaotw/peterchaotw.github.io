import { type IHooks } from '@/shared/interfaces';

const withGenerator = <T extends unknown>(hook: () => IHooks<any>) => {
  return (Comp: React.ComponentType<T>) => {
    return (orgProps: Omit<T, keyof IHooks<any>>) => {
      const _hooks = hook();
      const hooksProps = {
        [_hooks.name]: {
          value: _hooks.value,
          setter: _hooks.setter,
        },
      };

      return <Comp {...hooksProps} {...(orgProps as T)} />;
    };
  };
};

export default withGenerator;
