import RequiredTreasureBtnReact from 'src/components/contents-chart/internal/RequiredTreasureBtnReact';
import type { TreasuresData, TreasureSorts } from 'src/helpers/createContentsData';
import sortTreasures from 'src/helpers/sortTreasures';
import { css, cx } from 'styled-system/css';

interface Props extends React.ComponentPropsWithoutRef<'ul'> {
  treasures: TreasuresData;
  treasureSorts: TreasureSorts[string] | undefined;
}
export default function ({ className, treasures, treasureSorts }: Props) {
  const sorted = sortTreasures(treasures, treasureSorts);
  return sorted.map((treasures, i) => {
    return (
      <ul
        key={i}
        className={cx(className, css({ '&+&': { mt: '1rem' } }))}>
        {treasures.map(treasure => {
          return (
            <RequiredTreasureBtnReact
              key={treasure.name}
              treasure={treasure}
              as="li"
            />
          );
        })}
      </ul>
    );
  });
}
