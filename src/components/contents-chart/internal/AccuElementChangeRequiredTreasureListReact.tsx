import RequiredTreasureBtnReact from 'src/components/contents-chart/internal/RequiredTreasureBtnReact';
import type { TreasuresData, TreasureSorts } from 'src/helpers/createContentsData';
import sortTreasures from 'src/helpers/sortTreasures';
import { useCurrentElementChange } from 'src/stores/elementChangeStore';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'ul'> {
  treasures: TreasuresData;
  treasureSorts: TreasureSorts[string] | undefined;
  skeletonClassName?: string;
}
export default function ({ className, treasures, treasureSorts }: Props) {
  const currentElementChange = useCurrentElementChange();
  const accuedTreasures = _accuTreasuresByElementChange(treasures, currentElementChange);
  const sorted = sortTreasures(accuedTreasures, treasureSorts);
  return sorted.map((treasures, i) => {
    return (
      <ul
        key={i}
        className={cx(className, css({ '&+&': { mt: '1rem' } }))}>
        {treasures.map(treasure => {
          return (
            <RequiredTreasureBtnReact
              key={treasure.name}
              as="li"
              treasure={treasure}
            />
          );
        })}
      </ul>
    );
  });
}

interface AccuedTreasure {
  [key: string]: TreasuresData[number];
}
function _accuTreasuresByElementChange(treasures: TreasuresData, currentElementChange: string) {
  const accuedTreasures = treasures.reduce((accu, treasure) => {
    const { name, element, number, swapNumber, isSetting } = treasure;
    const isCurrentElement = currentElementChange === element;
    if (isSetting && !isCurrentElement && !swapNumber) return accu;
    const existingAcuu = accu[name];
    if (!existingAcuu) {
      const isSettingTarget = isSetting && isCurrentElement;
      const newNumber = isSettingTarget && swapNumber ? swapNumber : number;
      const newEntry = { ...treasure, number: newNumber };
      return { ...accu, [name]: newEntry };
    }
    const accuedNumber = existingAcuu.number + number;
    const accuedTreasure = { ...treasure, number: accuedNumber };
    return { ...accu, [name]: accuedTreasure };
  }, {} as AccuedTreasure);
  return Object.values(accuedTreasures);
}
