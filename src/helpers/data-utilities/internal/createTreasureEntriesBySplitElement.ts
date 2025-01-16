import type { TreasureEntry } from 'src/helpers/createTreasureEntries';
import type { ReadOnlyElementNames } from 'src/type';

export interface CreatedTreasureEntry {
  contentsNames: string[];
  contentsTreasureEntries: TreasureEntry[];
  splitContentsName?: string[];
}

export default function (
  treasureEntries: TreasureEntry[],
  contentsNames: string[],
  contentsElementNames: ReadOnlyElementNames
): CreatedTreasureEntry {
  const _splitElementEntries = {
    light: ['fire', 'wind'],
    dark: ['water', 'earth']
  };

  const splitTreasureEntries = contentsElementNames.flatMap(elementName => {
    const splitElementNames = _splitElementEntries[elementName as 'light' | 'dark'] ?? undefined;
    return treasureEntries.filter(entry => {
      const entryElement = entry[2]?.[1] ?? '';
      if (splitElementNames) {
        const [element1, element2] = splitElementNames;
        return entryElement === element1 || entryElement === element2;
      }
      return entryElement === elementName;
    })!;
  });

  const [newContentsNames, splitNames] = _createSplitElementContentsNameEntry(contentsNames, contentsElementNames);

  return {
    contentsNames: newContentsNames,
    splitContentsName: splitNames,
    contentsTreasureEntries: splitTreasureEntries
  };
}

function _createSplitElementContentsNameEntry(contentsNames: string[], contentsElementNames: ReadOnlyElementNames) {
  const splitEntries = contentsElementNames.flatMap((elementName, i) => {
    const contentsName = contentsNames[i];
    const needSplit = elementName === 'light' || elementName === 'dark';
    const entry = [contentsName, elementName];
    return needSplit ? [entry, entry] : [entry];
  });
  const newContentsNames = splitEntries.map(entry => entry[0]);
  const needSplitContentsNames = splitEntries.reduce((accu, splitEntry) => {
    const [name, element] = splitEntry;
    const needSplit = element === 'light' || element === 'dark';
    if (needSplit) accu = [...accu, name];
    return accu;
  }, []);
  return [newContentsNames, needSplitContentsNames];
}
