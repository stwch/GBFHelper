import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'span'> {
  number: number;
}
export default function ({ className, number }: Props) {
  return (
    <span
      className={cx(
        className,
        css({
          d: 'grid',
          gridTemplateColumns: 'auto auto',
          columnGap: '.125rem',
          alignItems: 'end',
          lineHeight: 1,
          color: '{colors.gray}',
          textShadow: '0 0 1px {colors.bg}, 0px 0px 2px {colors.bg}, 0 1px 6px {colors.bg}, 0 1px 8px {colors.bg}'
        })
      )}>
      <span
        className={css({
          fontWeight: '300',
          transform: 'scaleX(1.4)'
        })}>
        x
      </span>
      <span
        className={css({
          fontFamily: 'notoSerifJP',
          fontWeight: '900',
          fontSize: '1.25em'
        })}>
        {number}
      </span>
    </span>
  );
}
