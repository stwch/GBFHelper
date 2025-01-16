import { writeFileSync } from 'node:fs';
import clientSideText from 'src/assets/data/clientSideText';
import { treasureEntries } from 'src/assets/data/treasure';

export default function () {
  const treasureText = _concatTreasureLabel();
  const clientText = _concatClientText();
  const text = treasureText + clientText + 'x0123456789';
  const toFile = _createNoDuplicatesText(text);
  writeFileSync('subset.txt', toFile);
}

function _concatTreasureLabel() {
  return Object.values(treasureEntries).reduce((accu, entry) => {
    const [labelAndName] = entry;
    const label = labelAndName[0];
    accu += label;
    return accu;
  }, '');
}

function _concatClientText() {
  return Object.values(clientSideText).reduce((accu, text) => {
    accu += text;
    return accu;
  }, '');
}

function _createNoDuplicatesText(text: string) {
  const set = new Set<string>();
  const splitedText = text.split('');
  splitedText.forEach(oneString => set.add(oneString));
  return Array.from(set).join('');
}
