import type { TreasureGroupName, TreasureName } from 'src/assets/data/treasure';

type EachContentsTreasures = { [K in string]: TreasureName[] };
export type ContentsAssignEntries = {
  [K in TreasureGroupName]: EachContentsTreasures;
};
interface ContentsAssignBase {
  group: TreasureGroupName;
  treasures: TreasureName[][];
}

export default function (contentsNames: string[], exAssignBase: ContentsAssignBase[]) {
  return exAssignBase.reduce((accu, assignEntry) => {
    const { group, treasures } = assignEntry;

    const contentsTreasureEntry = contentsNames.reduce((accu, contentsName, i) => {
      const treasureNames = treasures[i];
      accu = { ...accu, [contentsName]: treasureNames };
      return accu;
    }, {} as EachContentsTreasures);

    accu[group] = contentsTreasureEntry;
    return accu;
  }, {} as ContentsAssignEntries);
}
