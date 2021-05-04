declare module '*.svg';

declare module '~/assets/svgs/*.svg' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  export = value;
}
