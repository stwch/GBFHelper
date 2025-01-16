import { treasureEntries, type TreasureGroupName } from 'src/assets/data/treasure';

export default function (group: TreasureGroupName) {
  return Object.values(treasureEntries).filter(entry => entry[1] === group);
}
