import RequiredTreasureBtnReact from 'src/components/contents-chart/internal/RequiredTreasureBtnReact';
import type { TreasuresData, TreasureSorts } from 'src/helpers/createContentsData';
import sortTreasures from 'src/helpers/sortTreasures';
import { useCurrentMultiply, type MultiplyEntry } from 'src/stores/multiplyStore';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'ul'> {
  treasures: TreasuresData;
  treasureSorts: TreasureSorts[string] | undefined;
}
export default function ({ className, treasures, treasureSorts }: Props) {
  const currentMultiply = useCurrentMultiply();
  if (!currentMultiply) return;
  const accuedTreasures = _accuTreasuresByMultiply(treasures, currentMultiply);
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
function _accuTreasuresByMultiply(treasures: TreasuresData, currentMultiply: MultiplyEntry['multiplyEntry']) {
  const accuedTreasures = treasures.reduce((accu, treasure) => {
    const { name, element, number, isSetting, ignoreElement } = treasure;
    const isElement = element && !ignoreElement;
    const multiplyKey = isElement ? element : 'total';
    const multiplyNumber = currentMultiply[multiplyKey];
    if (isSetting && !multiplyNumber) return accu;
    const existingAcuu = accu[name];
    if (!existingAcuu) {
      const newNumber = isSetting ? multiplyNumber * number : number;
      const newEntry = { ...treasure, number: newNumber };
      return { ...accu, [name]: newEntry };
    }
    const accuedNumber = isSetting ? existingAcuu.number + multiplyNumber * number : existingAcuu.number + number;
    const accuedTreasure = { ...treasure, number: accuedNumber };
    return { ...accu, [name]: accuedTreasure };
  }, {} as AccuedTreasure);
  return Object.values(accuedTreasures);
}
