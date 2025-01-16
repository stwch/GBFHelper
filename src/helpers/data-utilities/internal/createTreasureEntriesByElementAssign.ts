import type { TreasureGroupName } from 'src/assets/data/treasure';
import type { TreasureEntry } from 'src/helpers/createTreasureEntries';
import type { ElementAssignEntries } from 'src/helpers/data-utilities/internal/createElementAssignEntries';
import type { CreatedTreasureEntry } from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import type { ReadOnlyElementNames } from 'src/type';

export default function (
  treasureEntries: TreasureEntry[],
  elementAssignEntries: ElementAssignEntries,
  group: TreasureGroupName,
  contentsNames: string[],
  contentsElementNames: ReadOnlyElementNames
): CreatedTreasureEntry {
  const elementAssignEntry = elementAssignEntries[group];

  const elementAssignTreasureEntries = contentsElementNames.flatMap(elementName => {
    const elementTreasureNames = elementAssignEntry[elementName];
    return elementTreasureNames.map(exTreasureName => {
      return treasureEntries.find(treasureEntry => {
        const exReg = new RegExp(exTreasureName);
        const treasureName = treasureEntry[0][1];
        return exReg.test(treasureName);
      })!;
    });
  });

  const treasureLength = elementAssignEntries[group].fire.length;
  const exAssignContentsNames = _eachDuplicateContentsNamesByNumber(contentsNames, treasureLength);

  return {
    contentsNames: exAssignContentsNames,
    contentsTreasureEntries: elementAssignTreasureEntries
  };
}

function _eachDuplicateContentsNamesByNumber(contentsNames: string[], duplicateNumber: number) {
  const duplicateArray = Array(duplicateNumber).fill(null);
  return contentsNames.flatMap(contentsName => {
    return duplicateArray.map(_ => contentsName);
  });
}
