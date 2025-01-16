import { juttenNames } from 'src/assets/data/common';
import { type TreasureName } from 'src/assets/data/treasure';
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
import createElementAssignEntries from 'src/helpers/data-utilities/internal/createElementAssignEntries';
import createTreasureEntriesByContentsAssign from 'src/helpers/data-utilities/internal/createTreasureEntriesByContentsAssign';
import createTreasureEntriesByElement from 'src/helpers/data-utilities/internal/createTreasureEntriesByElement';
import createTreasureEntriesByElementAssign from 'src/helpers/data-utilities/internal/createTreasureEntriesByElementAssign';
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

// const juttenNames = Object.keys(juttenEntries);
const juttenElementNames = [
  'water',
  'light',
  'earth',
  'water',
  'light',
  'dark',
  'wind',
  'earth',
  'wind',
  'fire'
] as const;
const siroMagunaAnima: TreasureName[] = [
  'furamu-gurasu-no-maguna-anima',
  'nataku-no-maguna-anima',
  'aporon-no-maguna-anima'
];
const kuroMagunaAnima: TreasureName[] = [
  'makyura-mariusu-no-maguna-anima',
  'medwusa-no-maguna-anima',
  'orivie-no-maguna-anima'
];
const juttenElementAssignEntries = createElementAssignEntries([
  {
    group: 'sirokuro_tamasii',
    treasures: [
      ['siroki-tamasii'],
      ['kuroki-tamasii'],
      ['kuroki-tamasii'],
      ['siroki-tamasii'],
      ['siroki-tamasii'],
      ['kuroki-tamasii']
    ]
  },
  {
    group: 'ouryuu_kokukirin',
    treasures: [
      ['ouryuu-no-maguna-anima'],
      ['kokukirin-no-maguna-anima'],
      ['kokukirin-no-maguna-anima'],
      ['ouryuu-no-maguna-anima'],
      ['ouryuu-no-maguna-anima'],
      ['kokukirin-no-maguna-anima']
    ]
  },
  {
    group: 'old_primary_maguna_anima',
    treasures: [siroMagunaAnima, kuroMagunaAnima, kuroMagunaAnima, siroMagunaAnima, siroMagunaAnima, kuroMagunaAnima]
  }
]);

const juutenContentsAssignEntries = createContentsAssignEntries(juttenNames, [
  {
    group: 'akasi_job',
    treasures: [
      ['syugokisi-no-akasi'],
      ['syasyu-no-akasi'],
      ['kentousi-no-akasi'],
      ['makensi-no-akasi'],
      ['seisyokusya-no-akasi'],
      ['kakutousi-no-akasi'],
      ['kensei-no-akasi'],
      ['samurai-no-akasi'],
      ['ginyuusijin-no-akasi'],
      ['touzoku-no-akasi']
    ]
  }
]);

export default function (
  group: //固有トレジャー
  | `tenseiki${'' | '_sin' | '_element' | '_kakusei'}`
    | 'kutihateta'
    | `yorisiro_${'element' | 'gin' | 'ougon'}`
    | 'element_weapon'
    | 'tensei_no_kakera'
    | 'akasi_job'
    | 'junzen_tamasii'
    | 'ginpen'
    | 'jutten_limit_treasure'
    | 'jutten_last'
    | 'jutten_limit'
    //属性トレジャー
    | 'sinnaru_anima'
    | 'pusyuke'
    | 'rokuryuu_treasure'
    | 'houju_low'
    | 'jin'
    | 'maguna2_maguna_anima'
    | 'maguna2_maguna_anima'
    | 'rokuryuu_ryuuju'
    | 'element_zokusei'
    //属性トレジャー（分割）
    | 'coop_syo'
    | 'tenji_kourin'
    | 'buraito'
    //特殊
    | 'sirokuro_tamasii'
    | 'ouryuu_kokukirin'
    | 'old_primary_maguna_anima',
  number: number,
  option?: Merge<WhosePropExcludedTreasureOption, { fnOption?: { staticWeaponElement?: boolean } }>
): TreasuresBase {
  const { fnOption, ...treasureOption } = option ?? {};
  const { staticWeaponElement } = fnOption ?? {};

  const isElementOrKakusei = checkSameGroup(group, 'tenseiki_element', 'tenseiki_kakusei', 'yorisiro_element');
  const isSplitElement = checkSameGroup(group, 'coop_syo', 'tenji_kourin', 'buraito');
  const isElementAssign = checkSameGroup(group, 'sirokuro_tamasii', 'ouryuu_kokukirin', 'old_primary_maguna_anima');
  const isContentsAssign = checkSameGroup(group, 'akasi_job');
  const isJuttenElement = checkSameGroup(
    group,
    'sinnaru_anima',
    'pusyuke',
    'rokuryuu_treasure',
    'houju_low',
    'jin',
    'maguna2_maguna_anima',
    'rokuryuu_ryuuju',
    'element_zokusei'
  );

  const filteredreasureEntries = filterTreasureEntriesByGroup(group);

  let entry: CreatedTreasureEntry = {
    contentsNames: juttenNames,
    contentsTreasureEntries: filteredreasureEntries
  };
  if (isElementOrKakusei && !staticWeaponElement) {
    const newJuttenNames = _loopDuplicateContentsNamesByNumber(juttenNames, 6);
    entry = {
      contentsNames: newJuttenNames,
      contentsTreasureEntries: filteredreasureEntries
    };
  } else if (staticWeaponElement) {
    entry = _createTreasureEntriesByStaticWeapon(filteredreasureEntries, juttenNames, juttenElementNames);
  } else if (isSplitElement) {
    entry = createTreasureEntriesBySplitElement(filteredreasureEntries, juttenNames, juttenElementNames);
  } else if (isElementAssign) {
    entry = createTreasureEntriesByElementAssign(
      filteredreasureEntries,
      juttenElementAssignEntries,
      group,
      juttenNames,
      juttenElementNames
    );
  } else if (isContentsAssign) {
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

function _loopDuplicateContentsNamesByNumber(contentsNames: string[], loopNumber: number) {
  const loopArray = Array(loopNumber).fill(null);
  return loopArray.flatMap(_ => {
    return contentsNames;
  });
}

function _createTreasureEntriesByStaticWeapon(
  treasureEntries: TreasureEntry[],
  contentsNames: string[],
  contentsElementNames: ReadOnlyElementNames
): CreatedTreasureEntry {
  const _yorisiroNames = ['槍', '弓', '斧', '刃', '杖', '手甲', '剣', '太刀', '竪琴', '銃'];

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
