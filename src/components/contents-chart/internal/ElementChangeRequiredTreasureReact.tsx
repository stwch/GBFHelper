import type { HTMLTag } from 'astro/types';
import RequiredTreasureBtnReact from 'src/components/contents-chart/internal/RequiredTreasureBtnReact';
import type { TreasuresData } from 'src/helpers/createContentsData';
import { useCurrentElementChange } from 'src/stores/elementChangeStore';

interface Props {
  className?: string;
  treasure: TreasuresData[number];
  as: HTMLTag;
}
export default function ({ className, treasure, as }: Props) {
  const { isSetting } = treasure;
  const currentElementChange = useCurrentElementChange();
  if (!currentElementChange && isSetting) return;

  const { element, swapNumber } = treasure;
  const isSettingTarget = currentElementChange === element;
  const isSwapNumber = isSettingTarget && swapNumber;
  const isView = isSettingTarget || !isSetting || swapNumber;
  return (
    isView && (
      <RequiredTreasureBtnReact
        as={as}
        treasure={isSwapNumber ? { ...treasure, number: swapNumber } : treasure}
        className={className}
      />
    )
  );
}
