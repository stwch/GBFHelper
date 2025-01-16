import StepTargetLabelReact from 'src/components/contents-chart/internal/TargetTreasureLabelReact';
import type { TreasuresData } from 'src/helpers/createContentsData';
import { useCurrentElementChange } from 'src/stores/elementChangeStore';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  targets: TreasuresData;
}
export default function ({ className, targets }: Props) {
  const currentElementChange = useCurrentElementChange();
  if (!currentElementChange) return;
  const target = _findTarget(targets, currentElementChange);
  return (
    <StepTargetLabelReact
      className={className}
      target={target as TreasuresData[number]}
    />
  );
}

function _findTarget(targets: TreasuresData, elementName: string) {
  return targets.find(targets => targets.element === elementName);
}
