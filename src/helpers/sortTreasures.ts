import type { TreasuresData, TreasureSorts } from 'src/helpers/createContentsData';

const elementNames = ['fire', 'water', 'earth', 'wind', 'light', 'dark'];
export default function (treasures: TreasuresData, treasureSorts: TreasureSorts[string] | undefined) {
  if (!treasureSorts) return [treasures];
  return treasureSorts.reduce((accu, sorts) => {
    const { groups, largestSort, elementSort } = sorts;
    const extracted = groups.reduce(
      (accu, group) => {
        const targets = treasures.filter(treasure => treasure.group === group);
        if (targets.length) return [...accu, ...targets];
        return accu;
      },
      [] as TreasuresData | []
    );
    if (!extracted.length) return accu;
    let newAccu: TreasuresData = [];
    if (elementSort) {
      const elementSorted = elementNames.reduce((accu, elementName) => {
        const filtered = extracted.filter(treasure => treasure.element === elementName);
        return filtered.length ? [...accu, ...filtered] : accu;
      }, [] as TreasuresData);
      const existsNoHaveElementTreasure = extracted.length !== elementSorted.length;
      if (existsNoHaveElementTreasure) {
        const noHaveElementTreasures = extracted.filter(treasure => !treasure.element);
        newAccu.push(...elementSorted, ...noHaveElementTreasures);
      } else {
        newAccu.push(...elementSorted);
      }
    }
    if (largestSort) {
      const sortTarget = newAccu.length ? newAccu : extracted;
      newAccu = sortTarget.sort((a, b) => b.number - a.number); //大きい順
    }
    return newAccu.length ? [...accu, newAccu] : [...accu, extracted];
  }, [] as TreasuresData[]);
}
