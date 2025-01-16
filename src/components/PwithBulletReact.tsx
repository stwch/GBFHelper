import PReact from 'src/components/PReact';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'p'> {
  withObject?: boolean;
  asSpan?: boolean;
}
export default function ({ children, className, withObject, asSpan }: Props) {
  const Component = asSpan ? 'span' : PReact;
  const props = asSpan ? {} : { withObject };
  return (
    <Component
      {...props}
      className={cx(
        className,
        css({
          d: 'grid',
          gridTemplateColumns: '.75rem auto',
          placeItems: 'start',
          '&::before': {
            content: '""',
            d: 'block',
            w: '.25rem',
            aspectRatio: '1/1.5',
            justifySelf: 'center',
            mt: '.375rem',
            bgColor: 'currentColor',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }
        })
      )}>
      <span className={css({ d: 'block', w: '100%' })}>{children}</span>
    </Component>
  );
}
