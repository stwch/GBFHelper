import type { TreasureGroupName } from 'src/assets/data/treasure';

export default function (group: TreasureGroupName, ...checkGroupNames: TreasureGroupName[]) {
  return checkGroupNames.some(target => target === group);
  // const joinedCheckGroupNames = checkGroupNames.join('|');
  // const groupReg = new RegExp(joinedCheckGroupNames);
  // return groupReg.test(group);
}
