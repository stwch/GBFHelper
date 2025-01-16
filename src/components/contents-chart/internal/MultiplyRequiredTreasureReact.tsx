import type { HTMLTag } from 'astro/types';
import RequiredTreasureBtnReact from 'src/components/contents-chart/internal/RequiredTreasureBtnReact';
import type { TreasuresData } from 'src/helpers/createContentsData';
import { useCurrentMultiply } from 'src/stores/multiplyStore';

interface Props {
  className?: string;
  treasure: TreasuresData[number];
  as: HTMLTag;
}
export default function ({ className, treasure, as }: Props) {
  const { isSetting } = treasure;
  const currentMultiply = useCurrentMultiply();
  if (!currentMultiply && isSetting) return;

  const { element, number, ignoreElement } = treasure;
  const isElement = element && !ignoreElement;
  const multiplyKey = isElement ? element : 'total';
  const multiplyNumber = currentMultiply[multiplyKey];
  const finalNumber = number * multiplyNumber;
  const isView = finalNumber > 0;
  return (
    isView && (
      <RequiredTreasureBtnReact
        as={as}
        treasure={{ ...treasure, number: finalNumber }}
        className={className}
      />
    )
  );
}
