import { elementEntries, stepEntries, syuumatuKamiEntries, syuumatuMagunaEntries } from 'src/assets/data/common';
import { treasureEntries } from 'src/assets/data/treasure';
import createContentsData, {
  type RequiredTreasuresEntry,
  type StepBase,
  type TreasureSorts
} from 'src/helpers/createContentsData';
import createEntries from 'src/helpers/createEntries';
import switchSyuumatuTreasuresFn from 'src/helpers/data-utilities/switchSyuumatuTreasuresFn';
import type { LabelAndName } from 'src/type';

const { totu_4, totu_5, limit } = stepEntries;
const asCategory: LabelAndName = ['終末の神機', 'syuumatu'];
const steps: StepBase[] = [
  { names: totu_4, notAddToPath: true },
  { names: totu_5, notAddToPath: true },
  { names: limit }
];
const treasureSorts: TreasureSorts = {
  limit: [
    {
      groups: ['maguna2_maguna_anima', 'rokuryuu_ryuuju', 'tenji_kourin']
    },
    {
      groups: ['revansu_treasure']
    },
    {
      groups: ['akasi_multi']
    },
    {
      groups: ['element_weapon', 'element_zokusei']
    },
    {
      groups: ['buraito']
    },
    {
      groups: ['rusifa_hl', 'beruzebabu', 'beriaru']
    },
    {
      groups: ['supa_aruthimetto_bahamuto', 'tengen']
    },
    {
      groups: ['ontyou_limit', 'rusifa_zero']
    },
    {
      groups: ['rare']
    }
  ]
};
const magunaRequiredTreasureEntry = _createSyuumatuData('maguna');
const kamiRequiredTreasureEntry = _createSyuumatuData('kami');

function _createSyuumatuData(syuumatuType: 'maguna' | 'kami'): RequiredTreasuresEntry {
  const syuumatuTreasures = switchSyuumatuTreasuresFn(syuumatuType);
  const syuumatuName = syuumatuType === 'maguna' ? 'syuumatu_maguna' : 'syuumatu_kami';
  return {
    totu_4: [
      {
        process: {
          label: '終末の神機｜交換',
          textDirectInfo: '交換時点で3凸の状態'
        },
        targets: syuumatuTreasures(syuumatuName, 1, {
          star: 'totu_3',
          labelAddToEnd: '｜3凸',
          thumbnailPathRoot: 'syuumatu'
        }),
        treasures: [
          ...syuumatuTreasures('element_zokusei', 500),
          ...syuumatuTreasures('element_weapon', 255),
          [treasureEntries['dakunesu-materiaru'], 5]
        ]
      },
      {
        process: {
          label: '終末の神機｜4凸'
        },
        targets: syuumatuTreasures(syuumatuName, 1, {
          star: 'totu_4',
          labelAddToEnd: '｜4凸',
          thumbnailPathRoot: 'syuumatu'
        }),
        treasures: [
          [treasureEntries['dakunesu-materiaru'], 5],
          [treasureEntries['ginten-no-kagayaki'], 5],
          [treasureEntries['hasya-no-akasi'], 100],
          [treasureEntries['kukyou-no-akasi'], 10],
          ...syuumatuTreasures('pusyuke', 30),
          ...syuumatuTreasures('maguna2_maguna_anima', 10)
        ]
      },
      {
        process: {
          label: '4凸すると、ペンデュラムを消費し第2スキルが変更可能になる',
          infoOnly: true
        }
      },
      {
        process: {
          label: '任意 - ペンデュラムを交換（在庫無制限）',
          textDirectInfo: 'スキルは何度でも変更可能だが、毎回ペンデュラムを消費する'
        },
        tags: ['pendhuramu1'],
        targets: [[treasureEntries['pendhuramu1'], 1]],
        treasures: [[treasureEntries['dakunesu-materiaru'], 5, { noAccu: true, tagAccu: true }]]
      }
    ],
    totu_5: [
      {
        process: {
          label: '終末の神機｜5凸'
        },
        targets: syuumatuTreasures(syuumatuName, 1, {
          star: 'totu_5',
          labelAddToEnd: '｜5凸',
          thumbnailPathRoot: 'syuumatu'
        }),
        treasures: [
          ...syuumatuTreasures('ontyou', 1),
          [treasureEntries['syuumatu-no-ansyou'], 5],
          [treasureEntries['hihiirokane'], 1],
          [treasureEntries['bahamuto-no-sidenkaku'], 50],
          [treasureEntries['uturonaru-kagi'], 50],
          [treasureEntries['omega-yunitto'], 50],
          [treasureEntries['asutaroto-no-anima'], 30]
        ]
      },
      {
        process: {
          label: '5凸すると、ペンデュラムかチェインを消費し、第3スキルが変更可能になる',
          infoOnly: true
        }
      },
      {
        process: {
          label: '任意 - ペンデュラムを交換（在庫無制限）',
          textDirectInfo: 'スキルは何度でも変更可能だが、毎回ペンデュラムを消費する'
        },
        tags: ['pendhuramu2'],
        targets: [[treasureEntries['pendhuramu2'], 1]],
        treasures: [
          [treasureEntries['syuumatu-no-ansyou'], 5, { noAccu: true, tagAccu: true }],
          [treasureEntries['jenesisu-furagumento'], 30, { noAccu: true, tagAccu: true }]
        ]
      },
      {
        process: {
          label: '任意 - チェインを交換（在庫無制限）',
          textDirectInfo: 'スキルは何度でも変更可能だが、毎回チェインを消費する'
        },
        tags: ['chein'],
        targets: [[treasureEntries['chein'], 1]],
        treasures: [
          [treasureEntries['kouti-no-makaku'], 5, { noAccu: true, tagAccu: true }],
          [treasureEntries['jenesisu-furagumento'], 30, { noAccu: true, tagAccu: true }]
        ]
      }
    ],
    limit: [
      {
        process: {
          label: '限界超越｜210'
        },
        targets: syuumatuTreasures(`${syuumatuName}_limit01`, 1, {
          star: 'limit_totu_1',
          thumbnailPathRoot: 'syuumatu'
        }),
        treasures: [
          [treasureEntries['syuumatu-no-ansyou'], 60],
          [treasureEntries['sikkoku-no-togehane'], 60],
          [treasureEntries['kouti-no-makaku'], 60],
          [treasureEntries['damasukasu-gaisyou'], 20],
          [treasureEntries['kukyou-no-akasi'], 80]
        ]
      },
      {
        process: {
          label: '限界超越｜220'
        },
        targets: syuumatuTreasures(`${syuumatuName}_limit01`, 1, {
          star: 'limit_totu_2',
          thumbnailPathRoot: 'syuumatu'
        }),
        treasures: [
          [treasureEntries['nyu-warudo-kuxotu'], 20],
          ...syuumatuTreasures('maguna2_maguna_anima', 80),
          ...syuumatuTreasures('rokuryuu_ryuuju', 240),
          ...syuumatuTreasures('element_weapon', 1200),
          ...syuumatuTreasures('element_zokusei', 1200)
        ]
      },
      {
        process: {
          label: '限界超越｜230',
          textDirectInfo: 'この段階から、高難易度コンテンツ【ダーク・ラプチャー・ゼロ】の素材が必要'
        },
        targets: syuumatuTreasures(`${syuumatuName}_limit`, 1, { star: 'limit_totu_3', thumbnailPathRoot: 'syuumatu' }),
        treasures: [
          [treasureEntries['syuumatu-wo-motarasu-kurobane'], 10],
          ...syuumatuTreasures('revansu_treasure', 80),
          ...syuumatuTreasures('buraito', 20)
        ]
      },
      {
        process: {
          label: '任意 - ペンデュラムを交換（在庫無制限）',
          textDirectInfo: 'スキルは何度でも変更可能だが、毎回ペンデュラムを消費する'
        },
        tags: ['penduramu_limit'],
        targets: [[treasureEntries['pendhuramu-limit'], 1]],
        treasures: [
          [treasureEntries['syuumatu-wo-motarasu-kurobane'], 5, { noAccu: true, tagAccu: true }],
          [treasureEntries['marisu-furagumento'], 30, { noAccu: true, tagAccu: true }]
        ]
      },
      {
        process: {
          label: '限界超越｜240'
        },
        targets: syuumatuTreasures(`${syuumatuName}_limit`, 1, { star: 'limit_totu_4', thumbnailPathRoot: 'syuumatu' }),
        treasures: [
          [treasureEntries['syuumatu-wo-motarasu-kurobane'], 15],
          ...syuumatuTreasures('ontyou_limit', 1),
          ...syuumatuTreasures('element_weapon', 1200),
          ...syuumatuTreasures('element_zokusei', 1200),
          ...syuumatuTreasures('tenji_kourin', 120)
        ]
      },
      {
        process: {
          label: '限界超越｜250'
        },
        targets: syuumatuTreasures(`${syuumatuName}_limit`, 1, { star: 'limit_totu_5', thumbnailPathRoot: 'syuumatu' }),
        treasures: [
          [treasureEntries['syuumatu-wo-motarasu-kurobane'], 15],
          [treasureEntries['toki-no-ryuusa'], 1],
          [treasureEntries['hihiirokane'], 1],
          [treasureEntries['arutema-memori'], 15],
          [treasureEntries['kyokuri-no-kessyou'], 15]
        ]
      }
    ]
  };
}

function _addElementToContetnsEntries(dataEntries: ReturnType<typeof createEntries>) {
  const contetns = Object.values(dataEntries);
  const elements = Object.values(elementEntries);
  return contetns.map((entry, i) => {
    const element = elements[i];
    return [entry, element];
  });
}

export const syuumatuMagunaData = createContentsData({
  category: {
    names: ['終末の神機/マグナ', 'syuumatu-maguna'],
    asCategory
  },
  contents: _addElementToContetnsEntries(syuumatuMagunaEntries),
  steps,
  treasureSorts,
  requiredTreasures: magunaRequiredTreasureEntry
});

export const syuumatuKamiData = createContentsData({
  category: {
    names: ['終末の神機/神石', 'syuumatu-kami'],
    asCategory
  },
  contents: _addElementToContetnsEntries(syuumatuKamiEntries),
  steps,
  treasureSorts,
  requiredTreasures: kamiRequiredTreasureEntry
});
