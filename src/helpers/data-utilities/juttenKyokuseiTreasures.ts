import type { TreasureName } from 'src/assets/data/treasure';
import type {
  RequiredTargetOption,
  RequiredTargetsBase,
  RequiredTreasureOption,
  RequiredTreasuresBase
} from 'src/helpers/createContentsData';
import type { TreasureEntry } from 'src/helpers/createTreasureEntries';
import checkSameGroup from 'src/helpers/data-utilities/internal/checkSameGroup';
import createContentsAssignEntries from 'src/helpers/data-utilities/internal/createContentsAssignEntries';
import createContentsTreasure from 'src/helpers/data-utilities/internal/createContentsTreasure';
import createTreasureEntriesByContentsAssign from 'src/helpers/data-utilities/internal/createTreasureEntriesByContentsAssign';
import createTreasureEntriesByElement from 'src/helpers/data-utilities/internal/createTreasureEntriesByElement';
import type { CreatedTreasureEntry } from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import createTreasureEntriesBySplitElement from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import filterTreasureEntriesByGroup from 'src/helpers/data-utilities/internal/filterTreasureEntriesByGroup';
import type { ReadOnlyElementNames } from 'src/type';
import type { Merge } from 'type-fest';

export interface WhosePropExcludedTreasureOption
  extends Omit<Merge<RequiredTargetOption, RequiredTreasureOption>, 'whose'> {}
export interface TreasureOption
  extends Omit<Merge<RequiredTargetOption, RequiredTreasureOption>, 'whose' | 'swapNumber'> {
  number: number;
}
export type TreasuresBase = RequiredTreasuresBase | RequiredTargetsBase;

const juttenNames = ['uno', 'katoru'];
const juttenElementNames = [
  'water',
  // 'light',
  // 'earth',
  'water'
  // 'light',
  // 'dark',
  // 'wind',
  // 'earth',
  // 'wind',
  // 'fire'
] as const;
// const juttenElementAssignEntries = createElementAssignEntries([
//   {
//     group: 'ouryuu_kokukirin',
//     treasures: [
//       ['ouryuu-no-maguna-anima'],
//       ['kokukirin-no-maguna-anima'],
//       ['kokukirin-no-maguna-anima'],
//       ['ouryuu-no-maguna-anima'],
//       ['ouryuu-no-maguna-anima'],
//       ['kokukirin-no-maguna-anima']
//     ]
//   }
// ]);

const _extractYorisiroNames = _switchExtractElementChangedWeaponNamesFn('yorisiro');
const _extractTenseikiNames = _switchExtractElementChangedWeaponNamesFn('tenseiki');
const juutenContentsAssignEntries = createContentsAssignEntries(juttenNames, [
  {
    group: 'ginpen',
    treasures: [['yari-no-ginpen'], ['yaiba-no-ginpen']]
  },
  {
    group: 'kutihateta',
    treasures: [['kutihateta-yari'], ['kutihateta-yaiba']]
  },
  {
    group: 'tenseiki',
    treasures: [['itibatusou'], ['sitenjin']]
  },
  {
    group: 'tenseiki_sin',
    treasures: [['itibatusou-sin'], ['sitenjin-sin']]
  },
  {
    group: 'tensei_no_kakera',
    treasures: [['itibantensei-no-kakera'], ['yonbantensei-no-kakera']]
  },
  {
    group: 'element_weapon',
    treasures: [['yari-no-eremento'], ['tanken-no-eremento']]
  },
  {
    group: 'jutten_limit',
    treasures: [['uno-limit'], ['katoru-limit']]
  },
  {
    group: 'yorisiro_element',
    treasures: [_extractYorisiroNames('yari'), _extractYorisiroNames('yaiba')]
  },
  {
    group: 'tenseiki_element',
    treasures: [_extractTenseikiNames('itibatusou'), _extractTenseikiNames('sitenjin')]
  }
]);

function _switchExtractElementChangedWeaponNamesFn(type: 'yorisiro' | 'tenseiki') {
  const groupName = type === 'yorisiro' ? 'yorisiro_element' : 'tenseiki_element';
  const weaponEntries = filterTreasureEntriesByGroup(groupName);
  return function (weaponBaseName: string | TreasureName): TreasureName[] {
    const filteredWeaponEntries = weaponEntries.filter(entry => entry[0][1].match(weaponBaseName));
    return filteredWeaponEntries.map(entry => entry[0][1] as TreasureName);
  };
}

export default function (
  group: //固有トレジャー
  | `tenseiki${'' | '_sin' | '_element'}`
    | 'kutihateta'
    | `yorisiro_element`
    | 'element_weapon'
    | 'tensei_no_kakera'
    | 'ginpen'
    | 'jutten_limit'
    //属性トレジャー
    | 'sinnaru_anima'
    | 'pusyuke'
    | 'rokuryuu_treasure'
    | 'houju_low'
    | 'jin'
    | 'maguna2_maguna_anima'
    | 'maguna3_maguna_anima'
    | 'eniado_maguna_anima'
    | 'rokuryuu_ryuuju'
    | 'element_zokusei'
    //属性トレジャー（分割）
    | 'sekihen'
    | 'tenji_kourin'
    | 'buraito',
  number: number,
  option?: Merge<WhosePropExcludedTreasureOption, { fnOption?: { staticWeaponElement?: boolean } }>
): TreasuresBase {
  const { fnOption, ...treasureOption } = option ?? {};
  const { staticWeaponElement } = fnOption ?? {};

  // const isElementOrKakusei = checkSameGroup(group, 'tenseiki_element', 'yorisiro_element');
  const isSplitElement = checkSameGroup(group, 'sekihen', 'tenji_kourin', 'buraito');
  // const isElementAssign = checkSameGroup(group, 'ouryuu_kokukirin');
  const isContentsAssign = checkSameGroup(
    group,
    'ginpen',
    'kutihateta',
    'tenseiki',
    'tensei_no_kakera',
    'element_weapon',
    'jutten_limit',
    'tenseiki_sin',
    'yorisiro_element',
    'tenseiki_element'
  );
  const isJuttenElement = checkSameGroup(
    group,
    'sinnaru_anima',
    'pusyuke',
    'rokuryuu_treasure',
    'houju_low',
    'jin',
    'maguna2_maguna_anima',
    'maguna3_maguna_anima',
    'eniado_maguna_anima',
    'rokuryuu_ryuuju',
    'element_zokusei'
  );

  const filteredreasureEntries = filterTreasureEntriesByGroup(group);

  let entry: CreatedTreasureEntry = {
    contentsNames: juttenNames,
    contentsTreasureEntries: filteredreasureEntries
  };
  // if (isElementOrKakusei && !staticWeaponElement) {
  //   const newJuttenNames = _loopDuplicateContentsNamesByNumber(juttenNames, 6);
  //   entry = {
  //     contentsNames: newJuttenNames,
  //     contentsTreasureEntries: filteredreasureEntries
  //   };
  // }
  if (staticWeaponElement) {
    entry = _createTreasureEntriesByStaticWeapon(filteredreasureEntries, juttenNames, juttenElementNames);
  } else if (isSplitElement) {
    entry = createTreasureEntriesBySplitElement(filteredreasureEntries, juttenNames, juttenElementNames);
  }
  // else if (isElementAssign) {
  //   entry = createTreasureEntriesByElementAssign(
  //     filteredreasureEntries,
  //     juttenElementAssignEntries,
  //     group,
  //     juttenNames,
  //     juttenElementNames
  //   );
  // }
  else if (isContentsAssign) {
    entry = createTreasureEntriesByContentsAssign(
      filteredreasureEntries,
      juutenContentsAssignEntries,
      group,
      juttenNames
    );
  } else if (isJuttenElement) {
    entry = createTreasureEntriesByElement(filteredreasureEntries, juttenNames, juttenElementNames);
  }

  const { contentsTreasureEntries, contentsNames, splitContentsName } = entry;
  const toOption = {
    treasureOption,
    splitNames: splitContentsName
  };
  return createContentsTreasure(contentsTreasureEntries, contentsNames, number, toOption);
}

// function _loopDuplicateContentsNamesByNumber(contentsNames: string[], loopNumber: number) {
//   const loopArray = Array(loopNumber).fill(null);
//   return loopArray.flatMap(_ => {
//     return contentsNames;
//   });
// }

function _createTreasureEntriesByStaticWeapon(
  treasureEntries: TreasureEntry[],
  contentsNames: string[],
  contentsElementNames: ReadOnlyElementNames
): CreatedTreasureEntry {
  // const _yorisiroNames = ['槍', '弓', '斧', '刃', '杖', '手甲', '剣', '太刀', '竪琴', '銃'];
  const _yorisiroNames = ['槍', '刃'];

  const staticWeaponTreasureEntries = _yorisiroNames.map((weaponName, i) => {
    const contentsElement = contentsElementNames[i];
    const weaponNameReg = new RegExp(weaponName);

    return treasureEntries.find(treasureEntry => {
      const treasureName = treasureEntry[0][0];
      const treasureElement = treasureEntry[2]?.[1] ?? '';
      return weaponNameReg.test(treasureName) && treasureElement === contentsElement;
    })!;
  });

  return {
    contentsNames,
    contentsTreasureEntries: staticWeaponTreasureEntries
  };
}
