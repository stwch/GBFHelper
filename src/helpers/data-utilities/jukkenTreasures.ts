import { jukkenNames } from 'src/assets/data/common';
import checkSameGroup from 'src/helpers/data-utilities/internal/checkSameGroup';
import createContentsAssignEntries from 'src/helpers/data-utilities/internal/createContentsAssignEntries';
import createContentsTreasure from 'src/helpers/data-utilities/internal/createContentsTreasure';
import createElementAssignEntries from 'src/helpers/data-utilities/internal/createElementAssignEntries';
import createTreasureEntriesByContentsAssign from 'src/helpers/data-utilities/internal/createTreasureEntriesByContentsAssign';
import createTreasureEntriesByElement from 'src/helpers/data-utilities/internal/createTreasureEntriesByElement';
import createTreasureEntriesByElementAssign from 'src/helpers/data-utilities/internal/createTreasureEntriesByElementAssign';
import type { CreatedTreasureEntry } from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import createTreasureEntriesBySplitElement from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import filterTreasureEntriesByGroup from 'src/helpers/data-utilities/internal/filterTreasureEntriesByGroup';
import type { TreasuresBase } from 'src/helpers/data-utilities/juttenTreasure';
import type { WhosePropExcludedTreasureOption } from 'src/helpers/data-utilities/treasure';
import type { Merge } from 'type-fest';

// const jukkenNames = Object.keys(jukkenEntries);
const jukkenElementNames = [
  'water',
  'earth',
  'dark',
  'wind',
  'fire',
  'earth',
  'light',
  'water',
  'fire',
  'wind'
] as const;
const jukkenElementAssignEntries = createElementAssignEntries([
  {
    group: 'heizu',
    treasures: [
      ['orora-heizu'],
      ['kaothikku-heizu'],
      ['kaothikku-heizu'],
      ['orora-heizu'],
      ['orora-heizu'],
      ['kaothikku-heizu']
    ]
  }
]);
const jukkenContentsAssignEntries = createContentsAssignEntries(jukkenNames, [
  {
    group: 'akarumu_furagumento',
    treasures: [
      ['beratoru-furagumento'],
      ['akuira-furagumento'],
      ['kerusasu-furagumento'],
      ['kerusasu-furagumento'],
      ['akuira-furagumento'],
      ['kerusasu-furagumento'],
      ['kerusasu-furagumento'],
      ['beratoru-furagumento'],
      ['akuira-furagumento'],
      ['beratoru-furagumento']
    ]
  }
]);

export default function (
  group: //固有トレジャー
  | 'idea'
    | 'akarumu_summon_sr'
    | 'akarumu_summon_ssr'
    | 'naru_gurande'
    | 'jukken_card'
    | 'jukken_join'
    | 'isizue_weapon'
    | 'weritasu'
    | 'jukken_last'
    //属性トレジャー
    | 'asutora'
    | 'sima_maguna_anima'
    | 'old_primary_anima'
    | 'new_primary_anima'
    | 'maguna2_maguna_anima'
    | 'element_zokusei'
    | 'coop_toumetu_treasure'
    | 'ryuu_rin'
    | 'rokuryuu_ryuuju'
    | 'rokuryuu_treasure'
    | 'pusyuke'
    //属性トレジャー（分割）
    | 'verumu'
    | 'tenji_anima'
    | 'sekihen'
    | 'buraito'
    | 'gosuperu'
    //特殊
    | 'heizu'
    | 'akarumu_furagumento',
  number: number,
  option?: Merge<WhosePropExcludedTreasureOption, {}>
): TreasuresBase {
  const { ...treasureOption } = option ?? {};

  const isSplitElement = checkSameGroup(group, 'verumu', 'tenji_anima', 'sekihen', 'buraito', 'gosuperu');
  const isElementAssign = checkSameGroup(group, 'heizu');
  const isContentsAssign = checkSameGroup(group, 'akarumu_furagumento');
  const isJukkenElement = checkSameGroup(
    group,
    'asutora',
    'sima_maguna_anima',
    'old_primary_anima',
    'new_primary_anima',
    'maguna2_maguna_anima',
    'element_zokusei',
    'coop_toumetu_treasure',
    'ryuu_rin',
    'rokuryuu_ryuuju',
    'rokuryuu_treasure',
    'pusyuke'
  );

  const filteredreasureEntries = filterTreasureEntriesByGroup(group);

  let entry: CreatedTreasureEntry = {
    contentsNames: jukkenNames,
    contentsTreasureEntries: filteredreasureEntries
  };
  if (isSplitElement) {
    entry = createTreasureEntriesBySplitElement(filteredreasureEntries, jukkenNames, jukkenElementNames);
  } else if (isElementAssign) {
    entry = createTreasureEntriesByElementAssign(
      filteredreasureEntries,
      jukkenElementAssignEntries,
      group,
      jukkenNames,
      jukkenElementNames
    );
  } else if (isContentsAssign) {
    entry = createTreasureEntriesByContentsAssign(
      filteredreasureEntries,
      jukkenContentsAssignEntries,
      group,
      jukkenNames
    );
  } else if (isJukkenElement) {
    entry = createTreasureEntriesByElement(filteredreasureEntries, jukkenNames, jukkenElementNames);
  }

  const { contentsTreasureEntries, contentsNames, splitContentsName } = entry;
  const toOption = {
    treasureOption,
    splitNames: splitContentsName
  };
  return createContentsTreasure(contentsTreasureEntries, contentsNames, number, toOption);
}

//十賢者でも使うかも
// function _loopDuplicateContentsNamesByNumber(contentsNames: string[], loopNumber: number) {
//   const loopArray = Array(loopNumber).fill(null);
//   return loopArray.flatMap(_ => {
//     return contentsNames;
//   });
// }

// function _createTreasureEntriesByStaticWeapon(
//   treasureEntries: TreasureEntry[],
//   contentsNames: string[],
//   contentsElementNames: ReadOnlyElementNames
// ): CreatedTreasureEntry {
//   const _yorisiroNames = ['槍', '弓', '斧', '刃', '杖', '手甲', '剣', '太刀', '竪琴', '銃'];

//   const staticWeaponTreasureEntries = _yorisiroNames.map((weaponName, i) => {
//     const contentsElement = contentsElementNames[i];
//     const weaponNameReg = new RegExp(weaponName);

//     return treasureEntries.find(treasureEntry => {
//       const treasureName = treasureEntry[0][0];
//       const treasureElement = treasureEntry[2]?.[1] ?? '';
//       return weaponNameReg.test(treasureName) && treasureElement === contentsElement;
//     })!;
//   });

//   return {
//     contentsNames,
//     contentsTreasureEntries: staticWeaponTreasureEntries
//   };
// }
