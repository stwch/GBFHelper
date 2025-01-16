import type { HTMLTag } from 'astro/types';
import clientSideText from 'src/assets/data/clientSideText';
import StepLabelReact from 'src/components/contents-chart/internal/StepLabelReact';
import ImageReact from 'src/components/internal/ImageReact';
import type { TreasuresData } from 'src/helpers/createContentsData';
import subModalOpenHandler from 'src/helpers/subModalOpenHandler';
import { setTreasureModal } from 'src/stores/treasureModalStore';

import { css } from 'styled-system/css';

function modalOpenHandler(treasure: TreasuresData[number]) {
  setTreasureModal(treasure);
  subModalOpenHandler('treasure-modal');
}

interface Props {
  className?: string;
  treasure: TreasuresData[number];
  as: HTMLTag;
}
export default function ({ className, treasure, as: Tag }: Props) {
  if (!Tag) throw new Error(`\n必須プロパティ：as\n対象：${treasure.name}`);
  const { name, label, number } = treasure;
  return (
    <Tag className={className}>
      <button
        type="button"
        onClick={() => modalOpenHandler(treasure)}
        className={css({
          d: 'block',
          radius: '1px',
          overflow: 'hidden',
          pos: 'relative'
        })}>
        <span
          className={css({
            d: 'block',
            w: '100%',
            aspectRatio: '280/160',
            pos: 'relative'
          })}>
          <ImageReact
            src={`/images/thumbnail/treasure/${name}.jpg`}
            alt={label}
            width={280}
            height={160}
          />
          {treasure?.star && (
            <StepLabelReact
              starData={treasure.star}
              className={css({
                w: '1.25rem',
                pos: 'absolute',
                top: 0,
                left: 0
              })}
            />
          )}
        </span>
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
              opacity: '0.15',
              bgSize: 'contain',
              pos: 'absolute',
              inset: 0,
              zIndex: '-1'
            }
          })}>
          <span
            className={css({
              fontSize: '.625rem',
              fontWeight: '400',
              transform: 'scaleX(1.3)'
            })}>
            x
          </span>
          {number}
        </p>
        <span className={css({ pos: 'absolute', right: 0, top: 0, zIndex: 1 })}>
          <span
            className={css({
              d: 'grid',
              placeItems: 'center',
              w: '.875rem',
              aspectRatio: '1/1',
              fontFamily: 'notoSerifJP',
              fontSize: '.75rem',
              fontWeight: '700',
              lineHeight: 1,
              pos: 'relative',
              '&::before': {
                content: '""',
                d: 'block',
                w: '100%',
                aspectRatio: '1/1',
                bgColor: '{colors.gray}',
                radius: '100px',
                boxShadow: '1px 1px 3px {colors.bg}, 0px 0px 1px {colors.bg}',
                pos: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1
              }
            })}>
            {clientSideText.treasureBtn}
          </span>
        </span>
      </button>
    </Tag>
  );
}
