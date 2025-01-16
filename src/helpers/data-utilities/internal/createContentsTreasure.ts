import type { TreasureEntry } from 'src/helpers/createTreasureEntries';
import type { TreasuresBase } from 'src/helpers/data-utilities/juttenTreasure';
import type { WhosePropExcludedTreasureOption } from 'src/helpers/data-utilities/treasure';

export default function (
  treasureEntries: TreasureEntry[],
  contentsNames: string[],
  number: number,
  fnOption: {
    treasureOption?: WhosePropExcludedTreasureOption;
    splitNames?: string[];
  }
): TreasuresBase {
  const { treasureOption, splitNames } = fnOption;

  return treasureEntries.map((entry, i) => {
    const contentsName = contentsNames[i];
    const newOption = { ...treasureOption, whose: contentsName };

    let calcedNumer = number;
    if (splitNames) {
      const { staticSplitNumber } = treasureOption ?? {};
      const needSplit = splitNames.some(splitName => splitName === contentsName);

      if (needSplit) {
        const splitedNumber = staticSplitNumber ? staticSplitNumber : number / 2;
        calcedNumer = splitedNumber;
      }
    }

    return [entry, calcedNumer, newOption];
  });
}
