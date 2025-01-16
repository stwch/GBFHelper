import StepLabelReact from 'src/components/contents-chart/internal/StepLabelReact';
import ImageReact from 'src/components/internal/ImageReact';
import type { TreasuresData } from 'src/helpers/createContentsData';
import { thumbnailSkeletonCVA } from 'src/styles/thumbnailSkeletonCVA';

import { css, cx } from 'styled-system/css';

interface Props {
  className?: string;
  treasure: TreasuresData[number];
  as?: 'div' | 'li';
}
export default function ({ className, treasure, as: Tag = 'div' }: Props) {
  const { name, label, number } = treasure;
  return (
    <Tag className={cx(className, css({ radius: '1px', overflow: 'hidden', pos: 'relative' }))}>
      <ImageReact
        className={thumbnailSkeletonCVA({ thumbnail: 'treasureList' })}
        src={`/images/thumbnail/treasure/${name}.jpg`}
        alt={label}
        width={280}
        height={160}
      />
      <p
        className={css({
          d: 'grid',
          gridTemplateColumns: 'auto auto',
          alignItems: 'end',
          justifyContent: 'start',
          columnGap: '1px',
          fontWeight: '700',
          fontSize: '.75rem',
          lineHeight: 1,
          bgColor: '{colors.gray}',
          pd: '.125rem .25rem',
          pos: 'relative',
          zIndex: 1,
          '&::before': {
            content: '""',
            d: 'block',
            bgImage: 'url(/images/bg-pattern-dark.png)',
            opacity: '0.2',
            bgSize: 'contain',
            pos: 'absolute',
            inset: 0,
            zIndex: '-1'
          }
        })}>
        <span className={css({ fontSize: '.625rem', lineHeight: 1 })}>x</span>
        {number}
      </p>
      {treasure?.star && (
        <StepLabelReact
          starData={treasure.star}
          className={css({
            w: '1.5rem',
            pos: 'absolute',
            top: 0,
            left: 0
          })}
        />
      )}
    </Tag>
  );
}
