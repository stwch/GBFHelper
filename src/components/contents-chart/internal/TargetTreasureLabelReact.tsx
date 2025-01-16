import NumberLabelReact from 'src/components/contents-chart/internal/NumberLabelReact';
import StepLabelReact from 'src/components/contents-chart/internal/StepLabelReact';
import ImageReact from 'src/components/internal/ImageReact';
import type { TreasuresData } from 'src/helpers/createContentsData';

import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  target: TreasuresData[number];
  number?: number;
}
export default function ({ className, target, number }: Props) {
  const { star, thumbnailPathRoot } = target;
  const pathRoot = thumbnailPathRoot ? thumbnailPathRoot : 'treasure';
  return (
    <div className={cx(className, css({ radius: '2px', overflow: 'hidden' }))}>
      <div
        className={css({
          w: '100%',
          aspectRatio: '280/160',
          pos: 'relative'
        })}>
        <ImageReact
          src={`/images/thumbnail/${pathRoot}/${target.name}.jpg`}
          alt={target.label}
          width={280}
          height={160}
        />
        {number && (
          <NumberLabelReact
            number={number}
            className={css({
              fontSize: 'clamp(1.5rem, 5svw ,2rem)',
              pos: 'absolute',
              bottom: '0',
              right: '1px'
            })}
          />
        )}
        {star && (
          <StepLabelReact
            className={css({
              w: '2rem',
              maxW: '25%',
              pos: 'absolute',
              top: 0,
              left: 0
            })}
            starData={star}
          />
        )}
      </div>
      <p
        className={css({
          fontWeight: '700',
          fontSize: '.75rem',
          bgColor: '{colors.gray}',
          pd: '.125rem',
          pos: 'relative',
          zIndex: 1,
          '&::before': {
            content: '""',
            d: 'block',
            bgImage: 'url(/images/bg-pattern-dark.png)',
            opacity: '0.15',
            bgSize: 'contain',
            pos: 'absolute',
            inset: 0,
            zIndex: '-1'
          }
        })}>
        {target.label}
      </p>
    </div>
  );
}
