import { elementEntries, syuumatuKamiNames, syuumatuMagunaNames } from 'src/assets/data/common';
import checkSameGroup from 'src/helpers/data-utilities/internal/checkSameGroup';
import createContentsAssignEntries from 'src/helpers/data-utilities/internal/createContentsAssignEntries';
import createContentsTreasure from 'src/helpers/data-utilities/internal/createContentsTreasure';
import createTreasureEntriesByContentsAssign from 'src/helpers/data-utilities/internal/createTreasureEntriesByContentsAssign';
import createTreasureEntriesByElement from 'src/helpers/data-utilities/internal/createTreasureEntriesByElement';
import type { CreatedTreasureEntry } from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import createTreasureEntriesBySplitElement from 'src/helpers/data-utilities/internal/createTreasureEntriesBySplitElement';
import filterTreasureEntriesByGroup from 'src/helpers/data-utilities/internal/filterTreasureEntriesByGroup';
import type { TreasuresBase } from 'src/helpers/data-utilities/juttenTreasure';
import type { WhosePropExcludedTreasureOption } from 'src/helpers/data-utilities/treasure';
import type { ReadOnlyElementNames } from 'src/type';
import type { Merge } from 'type-fest';

export default function (syuumatuType: 'maguna' | 'kami') {
  const isMaguna = syuumatuType === 'maguna';
  const syuumatuNames = isMaguna ? syuumatuMagunaNames : syuumatuKamiNames;

  const syuumatuElementNames = Object.keys(elementEntries) as ReadOnlyElementNames;
  const syuumatuContentsAssignEntries = createContentsAssignEntries(syuumatuNames, [
    {
      group: 'element_weapon',
      treasures: [
        ['ono-no-eremento'],
        ['tue-no-eremento'],
        ['gakki-no-eremento'],
        ['yari-no-eremento'],
        ['ken-no-eremento'],
        ['katana-no-eremento']
      ]
    }
  ]);

  return function (
    group: //固有のトレジャー
    | 'syuumatu_maguna'
      | 'syuumatu_maguna_limit01'
      | 'syuumatu_maguna_limit'
      | 'syuumatu_kami'
      | 'syuumatu_kami_limit01'
      | 'syuumatu_kami_limit'
      //属性トレジャー
      | 'element_zokusei'
      | 'pusyuke'
      | 'maguna2_maguna_anima'
      | 'ontyou'
      | 'rokuryuu_ryuuju'
      | 'revansu_treasure'
      | 'ontyou_limit'
      //属性トレジャー（分割）
      | 'buraito'
      | 'tenji_kourin'
      //特殊
      | 'element_weapon',
    number: number,
    option?: Merge<WhosePropExcludedTreasureOption, {}>
  ): TreasuresBase {
    const { ...treasureOption } = option ?? {};

    const isContentsAssign = checkSameGroup(group, 'element_weapon');
    const isSplitElement = checkSameGroup(group, 'buraito', 'tenji_kourin');
    const isSyuumatuElement = checkSameGroup(
      group,
      'pusyuke',
      'element_zokusei',
      'maguna2_maguna_anima',
      'ontyou',
      'rokuryuu_ryuuju',
      'revansu_treasure',
      'ontyou_limit'
    );

    const filteredreasureEntries = filterTreasureEntriesByGroup(group);

    let entry: CreatedTreasureEntry = {
      contentsNames: syuumatuNames,
      contentsTreasureEntries: filteredreasureEntries
    };
    if (isContentsAssign) {
      entry = createTreasureEntriesByContentsAssign(
        filteredreasureEntries,
        syuumatuContentsAssignEntries,
        group,
        syuumatuNames
      );
    } else if (isSplitElement) {
      entry = createTreasureEntriesBySplitElement(filteredreasureEntries, syuumatuNames, syuumatuElementNames);
    } else if (isSyuumatuElement) {
      entry = createTreasureEntriesByElement(filteredreasureEntries, syuumatuNames, syuumatuElementNames);
    }

    const { contentsTreasureEntries, contentsNames, splitContentsName } = entry;
    const toOption = {
      treasureOption,
      splitNames: splitContentsName
    };
    return createContentsTreasure(contentsTreasureEntries, contentsNames, number, toOption);
  };
}
