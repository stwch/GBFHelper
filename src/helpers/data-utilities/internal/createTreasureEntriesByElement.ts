import type { TreasureEntry } from 'src/helpers/createTreasureEntries';
import type { CreatedTreasureEntry } from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import type { ReadOnlyElementNames } from 'src/type';

export default function (
  treasureEntries: TreasureEntry[],
  contentsNames: string[],
  contentsElementNames: ReadOnlyElementNames
): CreatedTreasureEntry {
  const elementTreasureEntries = contentsElementNames.map(elementName => {
    const target = treasureEntries.find(entry => {
      const entryElement = entry[2]?.[1] ?? '';
      return entryElement === elementName;
    });

    if (!target) throw new Error(`${treasureEntries[0][1]} グループに${elementName} 属性のトレジャーがありません`);

    return target;
  });
  return {
    contentsNames,
    contentsTreasureEntries: elementTreasureEntries
  };
}
