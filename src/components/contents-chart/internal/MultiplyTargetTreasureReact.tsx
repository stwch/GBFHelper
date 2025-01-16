import StepTargetLabelReact from 'src/components/contents-chart/internal/TargetTreasureLabelReact';
import type { RequiredTreasureData } from 'src/helpers/createContentsData';
import { useCurrentMultiply } from 'src/stores/multiplyStore';
import { css } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  targets: RequiredTreasureData['targets'];
}
export default function ({ className, targets }: Props) {
  const currentMultiply = useCurrentMultiply();
  if (!currentMultiply) return;
  const isOnly = targets?.length === 1;
  return (
    <ul
      className={css(
        isOnly
          ? {
            w: 'min(280px,66.6%)',
          }
          : {
            d: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '.25rem'
          }
      )}>
      {targets?.map(target => {
        const { name, element, ignoreElement, number } = target;
        const isElement = element && !ignoreElement;
        const multiplyKey = isElement ? element : 'total';
        const multiplyNumber = currentMultiply[multiplyKey];
        const isView = multiplyNumber > 0;
        return (
          isView && (
            <li key={name}>
              <StepTargetLabelReact
                className={className}
                number={number * multiplyNumber}
                target={target as NonNullable<RequiredTreasureData['targets']>[number]}
              />
            </li>
          )
        );
      })}
    </ul>
  );
}
