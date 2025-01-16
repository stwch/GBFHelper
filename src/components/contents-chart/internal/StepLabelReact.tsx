import type { StarData } from 'src/assets/data/common';
import ImageReact from 'src/components/internal/ImageReact';
import { css, cx } from 'styled-system/css';
import type { ValueOf } from 'type-fest';

interface Props extends React.ComponentPropsWithoutRef<'span'> {
  isDark?: boolean;
  starData: ValueOf<StarData>;
}
export default function ({ className, isDark, starData }: Props) {
  //変化するスタイル
  const bgColorProp = isDark ? '{colors.bg}' : '{colors.gray}';
  const bgImageProp = isDark ? 'url(/images/bg-pattern-light-one.png)' : 'url(/images/bg-pattern-dark-one.png)';
  return (
    <span className={cx(className, css({ d: 'block' }))}>
      <span
        className={css({
          d: 'grid',
          radius: '0 0 100px 0',
          bgColor: bgColorProp,
          pd: '0 0 .25rem 0',
          pos: 'relative',
          '&::before': {
            content: '""',
            d: 'block',
            pos: 'absolute',
            inset: 0,
            bgImage: bgImageProp,
            bgSize: 'cover',
            opacity: '0.2'
          }
        })}>
        <ImageReact
          className={css({ w: '75%' })}
          src={`/images/icon/star/${starData.star}.png`}
          width={32}
          height={32}
          alt="解放段階のスター"
        />
      </span>
    </span>
  );
}
