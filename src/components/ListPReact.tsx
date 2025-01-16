import PReact from 'src/components/PReact';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'p'> {
  withObject?: boolean;
}
export default function ({ children, className, withObject }: Props) {
  return (
    <PReact
      withObject={withObject}
      className={cx(
        className,
        css({
          d: 'grid',
          gridTemplateColumns: '1rem auto',
          placeItems: 'start',
          '&::before': {
            content: '""',
            d: 'block',
            w: '.25rem',
            aspectRatio: '1/1',
            bgColor: '{colors.gray}',
            radius: '100px',
            mt: '.5rem',
            ml: '.375rem'
          }
        })
      )}>
      <span className={css({ d: 'block', w: '100%' })}>{children}</span>
    </PReact>
  );
}
