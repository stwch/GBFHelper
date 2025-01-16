import type { TreasureGroupName } from 'src/assets/data/treasure';
import type { TreasureEntry } from 'src/helpers/createTreasureEntries';
import type { ContentsAssignEntries } from 'src/helpers/data-utilities/internal/createContentsAssignEntries';
import type { CreatedTreasureEntry } from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';

export default function (
  treasureEntries: TreasureEntry[],
  contentsAssignEntries: ContentsAssignEntries,
  group: TreasureGroupName,
  contentsNames: string[]
): CreatedTreasureEntry {
  const contentsAssignEntry = contentsAssignEntries[group];
  const contentsAssignTreasureEntries = contentsNames.flatMap(contentsName => {
    const contentsTreasureNames = contentsAssignEntry[contentsName];
    return contentsTreasureNames.map(contentsTreasureName => {
      return treasureEntries.find(treasureEntry => {
        // const exReg = new RegExp(contentsTreasureName);
        // const treasureName = treasureEntry[0][1];
        // return exReg.test(treasureName);
        const treasureName = treasureEntry[0][1];
        return contentsTreasureName === treasureName;
      })!;
    });
  });

  const firstKey = contentsNames[0];
  const treasureLength = contentsAssignEntry[firstKey].length as number; //気にしなくてOK のエラー
  const exAssignContentsNames = _eachDuplicateContentsNamesByNumber(contentsNames, treasureLength);

  return {
    contentsNames: exAssignContentsNames,
    contentsTreasureEntries: contentsAssignTreasureEntries
  };
}

function _eachDuplicateContentsNamesByNumber(contentsNames: string[], duplicateNumber: number) {
  const duplicateArray = Array(duplicateNumber).fill(null);
  return contentsNames.flatMap(contentsName => {
    return duplicateArray.map(_ => contentsName);
  });
}
