import byiImg from 'public/images/info/byi.png';
import ImageReact from 'src/components/internal/ImageReact';
import type { ProcessInfoBodyProps } from 'src/helpers/createContentsData';
import { css } from 'styled-system/css';

export default function ({ children }: ProcessInfoBodyProps) {
  return (
    <div
      className={css({
        '&::after': {
          content: '""',
          d: 'block',
          w: '15%',
          h: '2px',
          radius: '100%',
          bgColor: '{colors.bg}',
          filter: 'blur(0.5px)',
          pos: 'absolute',
          right: '1rem',
          bottom: '.375rem'
        }
      })}>
      {children}
      <ImageReact
        imageMetaData={byiImg}
        alt="ビィ"
        className={css({
          w: '35%',
          pos: 'absolute',
          right: '.25rem',
          bottom: '.375rem',
          zIndex: '-1',
          transform: 'scaleX(-1)'
        })}
      />
    </div>
  );
}
