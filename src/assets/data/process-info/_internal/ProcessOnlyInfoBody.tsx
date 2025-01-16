import type { ProcessInfoBodyProps } from 'src/helpers/createContentsData';
import { css } from 'styled-system/css';

export default function ({ children, processIndex }: ProcessInfoBodyProps) {
  if (!processIndex) {
    console.log(children);
    throw new Error('processIndex: number は必須です');
  }
  return (
    <div
      className={css({
        d: 'grid',
        gridTemplateColumns: 'auto auto',
        columnGap: '.25rem',
        placeItems: 'start',
        radius: '1px',
        fontSize: '.75rem',
        fontWeight: '700',
        lineHeight: 1.125,
        // pd: '0 0 .25rem 0',
        // pd: '.75rem .375rem .875rem .25rem',
        bgColor: '{colors.bg}',
        color: '{colors.gray}',
        pos: 'relative',
        zIndex: 1,
        '&::before': {
          content: '""',
          d: 'block',
          bgImage: 'url(/images/bg-pattern-light.png)',
          bgSize: 'contain',
          opacity: '0.15',
          pos: 'absolute',
          inset: 0,
          zIndex: '-1'
        }
      })}>
      <span
        className={css({
          d: 'grid',
          // placeItems: 'center',
          justifyContent: 'center',
          pt: '.5rem',
          w: '1rem',
          fontSize: '.75rem',
          // fontSize: '.625rem',
          h: '100%',
          br: '1px solid {colors.gray}',
          aspectRatio: '1/1',
          // radius: '100px',
          // radius: '1px',
          // bgColor: '{colors.gray}',
          color: '{colors.gray}',
          lineHeight: 1,
          pb: '1px'
        })}>
        {processIndex}
      </span>
      <span className={css({ d: 'block', pd: '.375rem .5rem .375rem 0' })}>{children}</span>
      {/* {children} */}
    </div>
  );
}
