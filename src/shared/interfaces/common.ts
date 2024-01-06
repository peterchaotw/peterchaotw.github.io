export type restParameterType = Record<string | number | symbol, any>;
export type fn<T> = (...args: any[]) => T;
