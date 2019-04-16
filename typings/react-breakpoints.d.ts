declare module 'react-breakpoints' {
  namespace ReactBreakpoints {
    // eslint-disable-next-line import/prefer-default-export
    export function withBreakpoints<T>(
      Component: React.ElementType<
        T & {
          breakpoints: Breakpoints;
          currentBreakpoint: keyof Breakpoints;
        }
      >,
    ): React.ComponentClass<T>;

    interface Breakpoints {
      [id: string]: number;
    }
  }

  // eslint-disable-next-line react/prefer-stateless-function,no-undef
  class ReactBreakpoints extends React.Component<{
    breakpoints: ReactBreakpoints.Breakpoints;
  }> {}

  export = ReactBreakpoints;
}
