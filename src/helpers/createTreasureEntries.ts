import { elementEntries } from 'src/assets/data/common';
import type { TreasureGroupName } from 'src/assets/data/treasure';
import type { ElementNames, LabelAndName } from 'src/type';
import type { LastArrayElement } from 'type-fest';

type TreasureEntryBase = {
  names: LabelAndName[];
  group: TreasureGroupName;
  haveElement?: boolean;
  staticElement?: ElementNames['name'];
};
// type TreasureEntry<T extends TreasureEntryBase[]> =
//   | [T[number]['names'][number], T[number]['group']][]
//   | [T[number]['names'][number], T[number]['group'], LabelAndName][];
export type TreasureEntry = [LabelAndName, TreasureGroupName] | [LabelAndName, TreasureGroupName, LabelAndName];
type TreasureEntries<T extends TreasureEntryBase[]> = {
  [K in LastArrayElement<T[number]['names'][number]>]: TreasureEntry;
};
export default function <const T extends TreasureEntryBase[]>(treasureEntriesBase: T) {
  return treasureEntriesBase.reduce((accu, entryBase) => {
    const entry = _createEntry(entryBase);
    return { ...accu, ...entry };
  }, {} as TreasureEntries<T>);
}

function _createEntry<T extends TreasureEntryBase>(entryBase: T) {
  const { names, group, haveElement, staticElement } = entryBase;
  return names.reduce(
    (accu, labelAndName, labelAndName_i) => {
      if (haveElement) {
        const element = Object.values(elementEntries)[labelAndName_i];
        return { ...accu, [labelAndName[1]]: [labelAndName, group, element] };
      }
      if (staticElement) {
        const element = elementEntries[staticElement];
        return { ...accu, [labelAndName[1]]: [labelAndName, group, element] };
      }
      return { ...accu, [labelAndName[1]]: [labelAndName, group] };
    },
    {} as TreasureEntries<T[]>
  );
}

// type TreasureEntries<T extends LabelAndName[][]> = {
//   [K in TupleToUnion<T>[0][1]]: LabelAndName[];
// };
// export default function <T extends LabelAndName[][]>(labelAndNamesWithElement: T): TreasureEntries<T> {
//   return labelAndNamesWithElement.reduce((accu, labelAndNameWithElement) => {
//     const [treasure, groupName, element] = labelAndNameWithElement;
//     const treasureName = treasure[1];
//     const newValue = [treasure];
//     newValue.push(groupName);
//     if (element) newValue.push(element);
//     accu = { ...accu, [treasureName]: newValue };
//     return accu;
//   }, {} as TreasureEntries<T>);
// }
