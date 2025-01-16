import { treasureEntries, type TreasureGroupName } from 'src/assets/data/treasure';
import type { RequiredTargetOption, RequiredTreasureOption } from 'src/helpers/createContentsData';
import type { TreasuresBase } from 'src/helpers/data-utilities/juttenTreasure';
import type { Merge } from 'type-fest';

export interface WhosePropExcludedTreasureOption
  extends Omit<Merge<RequiredTargetOption, RequiredTreasureOption>, 'whose'> {}
export default function (
  group: TreasureGroupName,
  number: number,
  option?: WhosePropExcludedTreasureOption
): TreasuresBase {
  const filterd = Object.values(treasureEntries).filter(treasureEntry => {
    const treasureGroup = treasureEntry[1];
    return treasureGroup === group;
  });
  return filterd.map(treasureEntry => {
    return option ? [treasureEntry, number, option] : [treasureEntry, number];
  });
}
