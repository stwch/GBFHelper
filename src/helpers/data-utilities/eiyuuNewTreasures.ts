import { eiyuuNewClass4Names } from 'src/assets/data/common';
import type { TreasureName } from 'src/assets/data/treasure';
import checkSameGroup from 'src/helpers/data-utilities/internal/checkSameGroup';
import createContentsAssignEntries from 'src/helpers/data-utilities/internal/createContentsAssignEntries';
import createContentsTreasure from 'src/helpers/data-utilities/internal/createContentsTreasure';
import createTreasureEntriesByContentsAssign from 'src/helpers/data-utilities/internal/createTreasureEntriesByContentsAssign';
import type { CreatedTreasureEntry } from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import filterTreasureEntriesByGroup from 'src/helpers/data-utilities/internal/filterTreasureEntriesByGroup';
import type { TreasuresBase } from 'src/helpers/data-utilities/juttenTreasure';
import type { WhosePropExcludedTreasureOption } from 'src/helpers/data-utilities/treasure';

const newClass4ContentsAssignEntries = createContentsAssignEntries(eiyuuNewClass4Names, [
  {
    group: 'akasi_job',
    treasures: [
      ['moribito-no-akasi'],
      ['moribito-no-akasi'],
      ['juuryuukihei-no-akasi'],
      ['juuryuukihei-no-akasi'],
      ['souhei-no-akasi'],
      ['souhei-no-akasi'],
      ['gikyuu-no-akasi'],
      ['keiyakusya-no-akasi'],
      ['keiyakusya-no-akasi'],
      ['sonmei-no-akasi'],
      ['tatekisi-no-akasi']
    ]
  },
  {
    group: 'ginpen',
    treasures: [
      ['ono-no-ginpen'],
      ['tategoto-no-ginpen'],
      ['yari-no-ginpen'],
      ['juu-no-ginpen'],
      ['tekkou-no-ginpen'],
      ['tue-no-ginpen'],
      ['yumi-no-ginpen'],
      ['ken-no-ginpen'],
      ['juu-no-ginpen'],
      ['tati-no-ginpen'],
      ['ono-no-ginpen']
    ]
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
    treasures: [
      ['ono-no-eremento'],
      ['gakki-no-eremento'],
      ['yari-no-eremento'],
      ['juu-no-eremento'],
      ['kakutou-no-eremento'],
      ['tue-no-eremento'],
      ['yumi-no-eremento'],
      ['ken-no-eremento'],
      ['juu-no-eremento'],
      ['katana-no-eremento'],
      ['ono-no-eremento']
    ]
  },
  {
    group: 'yorisiro_element',
    treasures: _extractYorisiroForNewClass4('yorisiro_element')
  },
  {
    group: 'kutihateta',
    treasures: _extractYorisiroForNewClass4('kutihateta')
  }
]);

function _extractYorisiroForNewClass4(yorisiroType: 'yorisiro_element' | 'kutihateta'): TreasureName[][] {
  const newClass4WeaponTypes = ['斧', '竪琴', '槍', '銃', '手甲', '杖', '弓', '剣', '銃', '太刀', '斧'];
  const yorisiroEntries = filterTreasureEntriesByGroup(yorisiroType);
  return newClass4WeaponTypes.map(weaponType => {
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
  | 'new_class4_weapon'
    | 'new_class4_weapon_element'
    //特殊
    | 'yorisiro_element'
    | 'kutihateta'
    | 'ginpen'
    | 'element_weapon'
    | 'hokori'
    | 'akasi_job',
  number: number,
  option?: WhosePropExcludedTreasureOption
): TreasuresBase {
  const { ...treasureOption } = option ?? {};

  const isElementOrKakusei = checkSameGroup(group, 'new_class4_weapon_element');
  const isContentsAssign = checkSameGroup(
    group,
    'akasi_job',
    'ginpen',
    'element_weapon',
    'hokori',
    'yorisiro_element',
    'kutihateta'
  );

  const filteredTreasureEntries = filterTreasureEntriesByGroup(group);
  let entry: CreatedTreasureEntry = {
    contentsNames: eiyuuNewClass4Names,
    contentsTreasureEntries: filteredTreasureEntries
  };
  if (isElementOrKakusei) {
    const newEiyuuNames = _loopDuplicateContentsNamesByNumber(eiyuuNewClass4Names, 6);
    entry = {
      contentsNames: newEiyuuNames,
      contentsTreasureEntries: filteredTreasureEntries
    };
  } else if (isContentsAssign) {
    entry = createTreasureEntriesByContentsAssign(
      filteredTreasureEntries,
      newClass4ContentsAssignEntries,
      group,
      eiyuuNewClass4Names
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
