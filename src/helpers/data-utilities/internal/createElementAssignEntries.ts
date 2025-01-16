import { elementEntries } from 'src/assets/data/common';
import type { TreasureGroupName, TreasureName } from 'src/assets/data/treasure';
import type { ElementNames } from 'src/type';

type EachElementTreasures = { [K in ElementNames['name']]: TreasureName[] };
export type ElementAssignEntries = {
  [K in TreasureGroupName]: EachElementTreasures;
};
interface ElementAssignBase {
  group: TreasureGroupName;
  treasures: TreasureName[][];
}

export default function (exAssignBase: ElementAssignBase[]) {
  const elementNames = Object.keys(elementEntries);
  return exAssignBase.reduce((accu, assignEntry) => {
    const { group, treasures } = assignEntry;

    const elementTreasureEntry = elementNames.reduce((accu, elementName, i) => {
      const treasureNames = treasures[i];
      accu = { ...accu, [elementName]: treasureNames };
      return accu;
    }, {} as EachElementTreasures);

    accu[group] = elementTreasureEntry;
    return accu;
  }, {} as ElementAssignEntries);
}
