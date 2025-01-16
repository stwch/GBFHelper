import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'p'> {
  bold?: boolean;
  defaultFontSize?: boolean;
  withObject?: boolean;
  objectBr?: boolean;
}
export default function ({ className, children, bold, defaultFontSize, withObject, objectBr }: Props) {
  return (
    <p
      className={cx(
        className,
        css({
          fontSize: defaultFontSize ? undefined : '.75rem',
          fontWeight: bold ? '700' : undefined,
          '&+p': { mt: withObject ? '{spacing.row.section}' : objectBr ? '1rem' : '{spacing.row.p}' }
        })
      )}>
      {children}
    </p>
  );
}
