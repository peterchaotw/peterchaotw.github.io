export function cast<T>(param: any): T {
  return typeof param === 'object' && !Array.isArray(param) && param != null
    ? (Object.assign({}, param) as T)
    : (param as T);
}

export function isNullOrEmpty(str?: string): boolean {
  return !(str && str.length > 0);
}
