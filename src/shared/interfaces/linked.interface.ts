export default interface ILinked {
  icon?: JSX.Element;
  title?: string;
  value?: string;
  link?: (value: string) => string | null | undefined;
}
