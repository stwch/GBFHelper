import { eiyuuEx2Names, eiyuuOldClass4Names } from 'src/assets/data/common';
import type { TreasureGroupName, TreasureName } from 'src/assets/data/treasure';
import checkSameGroup from 'src/helpers/data-utilities/internal/checkSameGroup';
import createContentsAssignEntries, {
  type ContentsAssignEntries
} from 'src/helpers/data-utilities/internal/createContentsAssignEntries';
import createContentsTreasure from 'src/helpers/data-utilities/internal/createContentsTreasure';
import createTreasureEntriesByContentsAssign from 'src/helpers/data-utilities/internal/createTreasureEntriesByContentsAssign';
import createTreasureEntriesByElement from 'src/helpers/data-utilities/internal/createTreasureEntriesByElement';
import type { CreatedTreasureEntry } from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import createTreasureEntriesBySplitElement from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import filterTreasureEntriesByGroup from 'src/helpers/data-utilities/internal/filterTreasureEntriesByGroup';
import type { TreasuresBase } from 'src/helpers/data-utilities/juttenTreasure';
import type { WhosePropExcludedTreasureOption } from 'src/helpers/data-utilities/treasure';
import type { Merge } from 'type-fest';

const oldClass4ElementNames = [
  'fire',
  'water',
  'light',
  'earth',
  'wind',
  'dark',
  'fire',
  'wind',
  'water',
  'light',
  'wind'
] as const;

const ex2ElementNames = ['earth', 'light', 'dark', 'fire', 'dark', 'water', 'wind', 'earth', 'water'] as const;

const oldClass4ContentsAssignEntries = createContentsAssignEntries(eiyuuOldClass4Names, [
  {
    group: 'akasi_job',
    treasures: [
      ['kentousi-no-akasi'],
      ['syugokisi-no-akasi'],
      ['seisyokusya-no-akasi'],
      ['madousi-no-akasi'],
      ['touzoku-no-akasi'],
      ['makensi-no-akasi'],
      ['kakutousi-no-akasi'],
      ['syasyu-no-akasi'],
      ['ginyuusijin-no-akasi'],
      ['soukihei-no-akasi'],
      ['soukensi-no-akasi']
    ]
  },
  {
    group: 'sinnen',
    treasures: [
      ['sensi-no-sinnen'],
      ['sensi-no-sinnen'],
      ['madousi-no-sinnen'],
      ['madousi-no-sinnen'],
      ['sensi-no-sinnen'],
      ['madousi-no-sinnen'],
      ['sensi-no-sinnen'],
      ['sensi-no-sinnen'],
      ['madousi-no-sinnen'],
      ['sensi-no-sinnen'],
      ['sensi-no-sinnen']
    ]
  },
  {
    group: 'hokori',
    treasures: [
      ['kisi-no-hokori'],
      ['kisi-no-hokori'],
      ['kenja-no-hokori'],
      ['kenja-no-hokori'],
      ['kisi-no-hokori'],
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
      ['ken-no-eremento'],
      ['tue-no-eremento'],
      ['tue-no-eremento'],
      ['juu-no-eremento'],
      ['tanken-no-eremento'],
      ['kakutou-no-eremento'],
      ['yumi-no-eremento'],
      ['gakki-no-eremento'],
      ['yari-no-eremento'],
      ['ken-no-eremento']
    ]
  }
]);

const ex2ContentsAssignEntries = createContentsAssignEntries(eiyuuEx2Names, [
  {
    group: 'akasi_job',
    treasures: [
      ['renkinjutusi-no-akasi'],
      ['samurai-no-akasi'],
      ['sinobi-no-akasi'],
      ['kensei-no-akasi'],
      ['gekisyu-no-akasi'],
      ['kenja-no-akasi'],
      ['ansatusya-no-akasi'],
      ['gakusi-no-akasi'],
      ['odorisi-no-akasi']
    ]
  },
  {
    group: 'sinnen',
    treasures: [
      ['madousi-no-sinnen'],
      ['sensi-no-sinnen'],
      ['madousi-no-sinnen'],
      ['sensi-no-sinnen'],
      ['madousi-no-sinnen'],
      ['madousi-no-sinnen'],
      ['sensi-no-sinnen'],
      ['madousi-no-sinnen'],
      ['madousi-no-sinnen']
    ]
  },
  {
    group: 'hokori',
    treasures: [
      ['kenja-no-hokori'],
      ['kisi-no-hokori'],
      ['kenja-no-hokori'],
      ['kisi-no-hokori'],
      ['kenja-no-hokori'],
      ['kenja-no-hokori'],
      ['kisi-no-hokori'],
      ['kenja-no-hokori'],
      ['kenja-no-hokori']
    ]
  },
  {
    group: 'element_weapon',
    treasures: [
      ['tanken-no-eremento'],
      ['katana-no-eremento'],
      ['katana-no-eremento'],
      ['ken-no-eremento'],
      ['juu-no-eremento'],
      ['tue-no-eremento'],
      ['tanken-no-eremento'],
      ['gakki-no-eremento'],
      ['tanken-no-eremento']
    ]
  }
]);

type FnOption = {
  fnOption?: {
    swapTreasures?: {
      contentsName: TreasureName;
      treasureName: TreasureName;
      swapTreasureName: TreasureName;
    }[];
  };
};
export default function (jobType: 'class4' | 'ex2') {
  const isClass4 = jobType === 'class4';
  const eiyuuNames = isClass4 ? eiyuuOldClass4Names : eiyuuEx2Names;

  const eiyuuElementNames = isClass4 ? oldClass4ElementNames : ex2ElementNames;
  const eiyuuContentsAssignEntries = isClass4 ? oldClass4ContentsAssignEntries : ex2ContentsAssignEntries;
  return function (
    group: //固有トレジャー
    | `${'class3' | 'old_class4' | 'ex' | 'ex2'}_weapon`
      | `${'class3' | 'ex'}_repurika`
      | `${'class3' | 'ex'}_weapon_rebuild`
      | `${'class3' | 'old_class4' | 'ex' | 'ex2'}_weapon_element`
      //属性トレジャー
      | 'kagayaki'
      | 'toumetu-anima'
      | 'element_zokusei'
      | 'coop_toumetu_treasure'
      | 'syo'
      //属性トレジャー（分割）
      | 'coop_syo'
      | 'tenji_anima'
      //特殊
      | 'element_weapon'
      | 'hokori'
      | 'sinnen'
      | 'akasi_job',
    number: number,
    option?: Merge<WhosePropExcludedTreasureOption, FnOption>
  ): TreasuresBase {
    const { fnOption, ...treasureOption } = option ?? {};

    const isElementOrKakusei = checkSameGroup(
      group,
      'class3_weapon_element',
      'old_class4_weapon_element',
      'ex_weapon_element',
      'ex2_weapon_element'
    );
    const isSplitElement = checkSameGroup(group, 'coop_syo', 'tenji_anima');
    const isContentsAssign = checkSameGroup(group, 'akasi_job', 'sinnen', 'element_weapon', 'hokori');
    const isElement = checkSameGroup(group, 'coop_toumetu_treasure', 'element_zokusei', 'kagayaki', 'toumetu-anima');

    const filteredTreasureEntries = filterTreasureEntriesByGroup(group);
    let entry: CreatedTreasureEntry = {
      contentsNames: eiyuuNames,
      contentsTreasureEntries: filteredTreasureEntries
    };
    if (isElementOrKakusei) {
      const newEiyuuNames = _loopDuplicateContentsNamesByNumber(eiyuuNames, 6);
      entry = {
        contentsNames: newEiyuuNames,
        contentsTreasureEntries: filteredTreasureEntries
      };
    } else if (isSplitElement) {
      entry = createTreasureEntriesBySplitElement(filteredTreasureEntries, eiyuuNames, eiyuuElementNames);
    } else if (isElement) {
      entry = createTreasureEntriesByElement(filteredTreasureEntries, eiyuuNames, eiyuuElementNames);
    } else if (isContentsAssign) {
      const swapTreasures = fnOption?.swapTreasures;
      const newEiyuuContentsAssignEntries = swapTreasures
        ? _swapTreasures(swapTreasures, eiyuuContentsAssignEntries, group, eiyuuNames)
        : eiyuuContentsAssignEntries;

      entry = createTreasureEntriesByContentsAssign(
        filteredTreasureEntries,
        newEiyuuContentsAssignEntries,
        group,
        eiyuuNames
      );
    }

    const { contentsTreasureEntries, contentsNames, splitContentsName } = entry;
    const toOption = {
      treasureOption,
      splitNames: splitContentsName
    };
    return createContentsTreasure(contentsTreasureEntries, contentsNames, number, toOption);
  };

  function _loopDuplicateContentsNamesByNumber(contentsNames: string[], loopNumber: number) {
    const loopArray = Array(loopNumber).fill(null);
    return loopArray.flatMap(_ => {
      return contentsNames;
    });
  }

  function _swapTreasures(
    swapTreasures: NonNullable<FnOption['fnOption']>['swapTreasures'],
    contentsAssignEntries: ContentsAssignEntries,
    group: TreasureGroupName,
    contentsNames: string[]
  ) {
    if (!swapTreasures) throw new Error('swapTreasures is not exist');
    const newContentsAssignEntries = JSON.parse(JSON.stringify(contentsAssignEntries)) as ContentsAssignEntries;
    const targetEntries = newContentsAssignEntries[group];
    swapTreasures.forEach(swapTreasure => {
      const { contentsName, treasureName, swapTreasureName } = swapTreasure;
      const contentsIndex = contentsNames.indexOf(contentsName);
      const existContents = contentsIndex !== -1;
      if (existContents) {
        const treasures = targetEntries[contentsName];
        const swapedTreasures = treasures.map(originTreasure => {
          const isSwap = originTreasure === treasureName;
          return isSwap ? swapTreasureName : originTreasure;
        });
        newContentsAssignEntries[group][contentsName] = swapedTreasures;
      }
    });
    return newContentsAssignEntries;
  }
}
