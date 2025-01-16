import { eiyuuClass5Names } from 'src/assets/data/common';
import type { TreasureName } from 'src/assets/data/treasure';
import checkSameGroup from 'src/helpers/data-utilities/internal/checkSameGroup';
import createContentsAssignEntries from 'src/helpers/data-utilities/internal/createContentsAssignEntries';
import createContentsTreasure from 'src/helpers/data-utilities/internal/createContentsTreasure';
import createTreasureEntriesByContentsAssign from 'src/helpers/data-utilities/internal/createTreasureEntriesByContentsAssign';
import type { CreatedTreasureEntry } from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import filterTreasureEntriesByGroup from 'src/helpers/data-utilities/internal/filterTreasureEntriesByGroup';
import type { TreasuresBase } from 'src/helpers/data-utilities/juttenTreasure';
import type { WhosePropExcludedTreasureOption } from 'src/helpers/data-utilities/treasure';

const class5ContentsAssignEntries = createContentsAssignEntries(eiyuuClass5Names, [
  {
    group: 'akasi_job',
    treasures: [['gouketu-no-akasi'], ['tairitusya-no-akasi'], ['seikisi-no-akasi']]
  },
  {
    group: 'ginpen',
    treasures: [['ono-no-ginpen'], ['yaiba-no-ginpen'], ['ken-no-ginpen']]
  },
  {
    group: 'hokori',
    treasures: [
      ['kenja-no-hokori'],
      ['kenja-no-hokori'],
      ['kisi-no-hokori'],
      ['kisi-no-hokori'],
      ['kenja-no-hokori'],
      ['kenja-no-hokori'],
      ['kisi-no-hokori'],
      ['kisi-no-hokori'],
      ['kenja-no-hokori'],
      ['kisi-no-hokori'],
      ['kisi-no-hokori']
    ]
  },
  {
    group: 'element_weapon',
    treasures: [['ono-no-eremento'], ['tanken-no-eremento'], ['ken-no-eremento']]
  },
  {
    group: 'yorisiro_element',
    treasures: _extractYorisiroForClass5('yorisiro_element')
  },
  {
    group: 'kutihateta',
    treasures: _extractYorisiroForClass5('kutihateta')
  }
]);

function _extractYorisiroForClass5(yorisiroType: 'yorisiro_element' | 'kutihateta'): TreasureName[][] {
  const class5WeaponTypes = ['斧', '刃', '剣'];
  const yorisiroEntries = filterTreasureEntriesByGroup(yorisiroType);
  return class5WeaponTypes.map(weaponType => {
    const weaponTypeReg = new RegExp(weaponType);
    return yorisiroEntries.reduce((accu, entry) => {
      const yorisiroLabel = entry[0][0];
      const isTarget = weaponTypeReg.test(yorisiroLabel);
      if (isTarget) {
        const yorisiroName = entry[0][1] as TreasureName;
        accu = [...accu, yorisiroName];
      }
      return accu;
    }, [] as TreasureName[]);
  });
}

export default function (
  group: //固有トレジャー
  | 'class5_weapon'
    | 'class5_weapon_element'
    //特殊
    | 'yorisiro_element'
    | 'kutihateta'
    | 'ginpen'
    | 'element_weapon'
    | 'akasi_job',
  number: number,
  option?: WhosePropExcludedTreasureOption
): TreasuresBase {
  const { ...treasureOption } = option ?? {};

  const isElementOrKakusei = checkSameGroup(group, 'class5_weapon_element');
  const isContentsAssign = checkSameGroup(
    group,
    'akasi_job',
    'ginpen',
    'element_weapon',
    'yorisiro_element',
    'kutihateta'
  );

  const filteredTreasureEntries = filterTreasureEntriesByGroup(group);
  let entry: CreatedTreasureEntry = {
    contentsNames: eiyuuClass5Names,
    contentsTreasureEntries: filteredTreasureEntries
  };
  if (isElementOrKakusei) {
    const newEiyuuNames = _loopDuplicateContentsNamesByNumber(eiyuuClass5Names, 6);
    entry = {
      contentsNames: newEiyuuNames,
      contentsTreasureEntries: filteredTreasureEntries
    };
  } else if (isContentsAssign) {
    entry = createTreasureEntriesByContentsAssign(
      filteredTreasureEntries,
      class5ContentsAssignEntries,
      group,
      eiyuuClass5Names
    );
  }

  const { contentsTreasureEntries, contentsNames, splitContentsName } = entry;
  const toOption = {
    treasureOption,
    splitNames: splitContentsName
  };
  return createContentsTreasure(contentsTreasureEntries, contentsNames, number, toOption);
}

function _loopDuplicateContentsNamesByNumber(contentsNames: string[], loopNumber: number) {
  const loopArray = Array(loopNumber).fill(null);
  return loopArray.flatMap(_ => {
    return contentsNames;
  });
}
