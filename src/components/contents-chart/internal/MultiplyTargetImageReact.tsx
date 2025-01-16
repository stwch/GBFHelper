import NumberLabelReact from 'src/components/contents-chart/internal/NumberLabelReact';
import ImageReact from 'src/components/internal/ImageReact';
import type { TreasuresData } from 'src/helpers/createContentsData';
import { useCurrentMultiply } from 'src/stores/multiplyStore';
import { css } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'span'> {
  targets: TreasuresData;
}
export default function ({ className, targets }: Props) {
  const currentMultiply = useCurrentMultiply();
  if (!currentMultiply) return;
  const target = targets[0];
  return (
    <span className={css({ d: 'block', pos: 'relative' })}>
      <ImageReact
        className={className}
        src={`/images/thumbnail/treasure/${target?.name}.jpg`}
        alt={target?.label}
        width={280}
        height={160}
      />
      <NumberLabelReact
        number={target.number * currentMultiply.total}
        className={css({
          // fontSize: { base: '6svw', tab: '2svw' },
          fontSize: 'clamp(1.5rem, 5svw ,2rem)',
          pos: 'absolute',
          bottom: '12%',
          left: '50%'
        })}
      />
    </span>
  );
}
