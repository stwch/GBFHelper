import {
  eiyuuClass5Entries,
  eiyuuEx2Entries,
  eiyuuNewClass4Entries,
  eiyuuOldClass4Entries,
  settingTypeEntries,
  stepEntries
} from 'src/assets/data/common';
import EiyuuKyoukaDirectInfo from 'src/assets/data/process-info/eiyuu-new/EiyuuKyoukaDirectInfo';
import EiyuuOldRepurikaGetDirectInfo from 'src/assets/data/process-info/eiyuu/EiyuuOldRepurikaGetDirectInfo';
import RibirudoDirectInfo from 'src/assets/data/process-info/eiyuu/RibirudoDirectInfo';
import ZokuseHenkouDirectInfo from 'src/assets/data/process-info/eiyuu/ZokuseHenkouDirectInfo';
import { treasureEntries, type TreasureGroupName } from 'src/assets/data/treasure';
import createContentsData, {
  type RequiredTag,
  type RequiredTreasuresBase,
  type RequiredTreasuresEntry
} from 'src/helpers/createContentsData';
import type createEntries from 'src/helpers/createEntries';
import eiyuuClass5Treasures from 'src/helpers/data-utilities/eiyuuClass5Treasures';
import eiyuuNewTreasures from 'src/helpers/data-utilities/eiyuuNewTreasures';
import switchEiyuuOldTreasures from 'src/helpers/data-utilities/switchEiyuuOldTreasures';
import treasure from 'src/helpers/data-utilities/treasure';
import type { LabelAndName } from 'src/type';

const { create } = stepEntries;
const { element_change } = settingTypeEntries;

const eiyuuAsCategory: LabelAndName = ['英雄武器', 'eiyuu'];
const eiyuuSteps = [{ names: create, setting: element_change, notAddToPath: true }];

const enburemuOption = { noAccu: true, tagAccu: true };
const enburemuCommonTreasures: RequiredTreasuresBase = [
  [treasureEntries['asutaroto-no-anima'], 10, enburemuOption],
  [treasureEntries['kakuriyo-no-kokusijin'], 3, enburemuOption]
];
const enburemuProceses: NonNullable<RequiredTreasuresEntry['create']> = [
  {
    process: {
      label: 'エンブレムを消費し、スキルを1つ付与可能になる',
      infoOnly: true
    }
  },
  {
    process: {
      label: '任意 - 英勇のエンブレム交換',
    },
    tags: ['eiyuu_enburemu'],
    targets: [[treasureEntries['eiyuu-no-enburemu'], 1]],
    treasures: [...enburemuCommonTreasures, [treasureEntries['kisi-no-hokori'], 10, enburemuOption]]
  },
  {
    process: {
      label: '任意 - 天聖のエンブレム交換'
    },
    tags: ['tensei_enburemu'],
    targets: [[treasureEntries['tensei-no-enburemu'], 1]],
    treasures: [...enburemuCommonTreasures, [treasureEntries['kenja-no-hokori'], 10, enburemuOption]]
  },
  {
    process: {
      label: '任意 - 魔煉のエンブレム交換'
    },
    tags: ['magoku_enburemu'],
    targets: [[treasureEntries['magoku-no-enburemu'], 1]],
    treasures: [
      ...enburemuCommonTreasures,
      [treasureEntries['kisi-no-hokori'], 5, enburemuOption],
      [treasureEntries['kenja-no-hokori'], 5, enburemuOption]
    ]
  }
];

export const eiyuuOldClass4Data = _createEiyuuOldData('class4');
export const eiyuuEx2Data = _createEiyuuOldData('ex2');
export const eiyuuNewClass4Data = createContentsData({
  category: {
    names: ['英雄武器 Class.Ⅳ/新', 'new_class4'],
    asCategory: eiyuuAsCategory
  },
  contents: _createContetnsEntries(eiyuuNewClass4Entries),
  steps: eiyuuSteps,
  treasureSorts: {
    create: [
      {
        groups: ['kutihateta', 'houju_low', 'jin', 'seisyou']
      },
      {
        groups: ['kagayaki']
      },
      {
        groups: ['rare_multi']
      },
      {
        groups: ['ginpen', 'element_weapon']
      },
      {
        groups: ['akasi_job', 'hokori', 'asutaroto', 'kakuriyo']
      }
    ]
  },
  requiredTreasures: {
    create: [
      {
        process: {
          label: '朽ち果てた武器を3凸し、強化',
          textDirectInfo: 'Lv75 に強化'
        },
        targets: eiyuuNewTreasures('kutihateta', 1, { star: 'totu_3' }),
        treasures: [
          ...eiyuuNewTreasures('kutihateta', 4, { star: 'totu_0' })
        ]
      },
      {
        process: {
          label: '属性の依代を作成',
          textDirectInfo: 'ショップの『特殊武器強化』で作成'
        },
        //属性の依代
        targets: eiyuuNewTreasures('yorisiro_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          ...eiyuuNewTreasures('kutihateta', 1, { star: 'totu_3', noAccu: true }),
          ...treasure('houju_low', 250, { isSetting: true }),
          ...treasure('jin', 250, { isSetting: true }),
          [treasureEntries['seisyou-no-kakera'], 250]
        ]
      },
      // {
      //   process: {
      //     label: 'targetを作成'
      //   },
      //   targets: eiyuuNewTreasures('yorisiro_element', 1, { isSetting: true }),
      //   treasures: [
      //     ...eiyuuNewTreasures('kutihateta', 4, { star: 'totu_0' }),
      //     ...treasure('houju_low', 250, { isSetting: true }),
      //     ...treasure('jin', 250, { isSetting: true }),
      //     [treasureEntries['seisyou-no-kakera'], 250]
      //   ]
      // },
      {
        process: {
          label: '英雄武器に強化',
          DirectInfo: EiyuuKyoukaDirectInfo
        },
        targets: eiyuuNewTreasures('new_class4_weapon_element', 1, { isSetting: true }),
        treasures: [
          ...eiyuuNewTreasures('yorisiro_element', 1, { star: 'totu_3_red', isSetting: true, noAccu: true }),
          ...eiyuuNewTreasures('ginpen', 15),
          ...eiyuuNewTreasures('akasi_job', 40),
          ...eiyuuNewTreasures('hokori', 20),
          ...eiyuuNewTreasures('element_weapon', 650),
          [treasureEntries['asutaroto-no-anima'], 10],
          [treasureEntries['kakuriyo-no-kokusijin'], 10],
          ...treasure('kagayaki', 40, { isSetting: true }),
          [treasureEntries['ginten-no-kagayaki'], 6],
          [treasureEntries['hekikuu-no-kessyou'], 60]
        ]
      }
    ]
  }
});
export const eiyuuClass5Data = createContentsData({
  category: {
    names: ['英雄武器 Class.Ⅴ', 'class5'],
    asCategory: eiyuuAsCategory
  },
  contents: _createContetnsEntries(eiyuuClass5Entries),
  steps: eiyuuSteps,
  treasureSorts: {
    create: [
      {
        groups: ['kutihateta', 'houju_low', 'jin', 'seisyou']
      },
      {
        groups: ['akasi_multi', 'rare_multi']
      },
      {
        groups: ['ginpen', 'element_weapon']
      },
      {
        groups: ['akasi_job', 'class5_syo']
      },
      {
        groups: ['rare']
      }
    ]
  },
  requiredTreasures: {
    create: [
      {
        process: {
          label: 'targetを作成'
        },
        targets: eiyuuClass5Treasures('yorisiro_element', 1, { isSetting: true }),
        treasures: [
          ...eiyuuClass5Treasures('kutihateta', 4, { star: 'totu_0' }),
          ...treasure('houju_low', 250, { isSetting: true }),
          ...treasure('jin', 250, { isSetting: true }),
          [treasureEntries['seisyou-no-kakera'], 250]
        ]
      },
      {
        process: {
          label: '英雄武器に強化'
        },
        targets: eiyuuClass5Treasures('class5_weapon_element', 1, { isSetting: true }),
        treasures: [
          ...eiyuuClass5Treasures('yorisiro_element', 1, { star: 'totu_3_red', noAccu: true, isSetting: true }),
          [treasureEntries['bukyoku-no-hijutusyo'], 10],
          ...eiyuuClass5Treasures('akasi_job', 5),
          [treasureEntries['damasukasu-gaisyou'], 15],
          ...eiyuuClass5Treasures('element_weapon', 1500),
          ...eiyuuClass5Treasures('ginpen', 60),
          [treasureEntries['ginten-no-kagayaki'], 10],
          [treasureEntries['kukyou-no-akasi'], 10],
          [treasureEntries['hekikuu-no-kessyou'], 50]
        ]
      },
      {
        process: {
          label: '5凸',
          textDirectInfo: '作成後は、素材無しで任意の属性に何度でも変更できる'
        },
        targets: eiyuuClass5Treasures('class5_weapon_element', 1, { isSetting: true }),
        treasures: [
          [treasureEntries['bukyoku-no-hijutusyo'], 15],
          ...eiyuuClass5Treasures('akasi_job', 10),
          [treasureEntries['damasukasu-gaisyou'], 15],
          ...eiyuuClass5Treasures('element_weapon', 1500),
          [treasureEntries['ginten-no-kagayaki'], 20],
          [treasureEntries['kukyou-no-akasi'], 15],
          [treasureEntries['hekikuu-no-kessyou'], 100],
          [treasureEntries['toki-no-ryuusa'], 1]
        ]
      }
    ]
  }
});

function _createContetnsEntries(dataEntries: ReturnType<typeof createEntries>) {
  const contetns = Object.values(dataEntries);
  return contetns.map(entry => [entry]);
}

function _createEiyuuOldData(jobType: 'class4' | 'ex2') {
  const isClass4 = jobType === 'class4';
  const repurikaName: TreasureGroupName = isClass4 ? 'class3_repurika' : 'ex_repurika'; //レプリカ
  const lowEiyuuName: TreasureGroupName = isClass4 ? 'class3_weapon' : 'ex_weapon'; //下位ジョブ武器
  const ribirudoName: TreasureGroupName = isClass4 ? 'class3_weapon_rebuild' : 'ex_weapon_rebuild'; //リビルド
  const lowElementName: TreasureGroupName = isClass4 ? 'class3_weapon_element' : 'ex_weapon_element'; //下位ジョブ属性変更
  const hightElementName: TreasureGroupName = isClass4 ? 'old_class4_weapon_element' : 'ex2_weapon_element'; //上位ジョブ属性変更

  const elementChangeTags: RequiredTag[] = isClass4 ? ['eiyuu_element_change_class4'] : ['eiyuu_element_change_ex2']; //属性変更までのタグ

  const eiyuuEntries = isClass4 ? eiyuuOldClass4Entries : eiyuuEx2Entries;
  const categoryNames: LabelAndName = isClass4 ? ['英雄武器 Class.Ⅳ/旧', 'old_class4'] : ['英雄武器 EX.Ⅱ', 'EX2'];

  const eiyuuOldTreasures = switchEiyuuOldTreasures(jobType);

  return createContentsData({
    category: {
      names: categoryNames,
      asCategory: eiyuuAsCategory
    },
    contents: _createContetnsEntries(eiyuuEntries),
    steps: eiyuuSteps,
    treasureSorts: {
      create: [
        {
          groups: [repurikaName, 'akasi_job']
        },
        {
          groups: ['syo', 'seisyou', 'world']
        },
        {
          groups: ['kagayaki', 'tenji_anima', 'toumetu-anima']
        },
        {
          groups: ['akasi_multi', 'rare_multi']
        },
        {
          groups: ['bahamuto_hl']
        },
        {
          groups: ['element_weapon', 'element_zokusei']
        },
        {
          groups: ['coop_syo', 'coop_toumetu_treasure', 'sinnen', 'hokori']
        },
        {
          groups: ['asutaroto', 'kakuriyo']
        },
        {
          groups: ['other']
        }
      ]
    },
    requiredTreasures: {
      create: [
        {
          process: {
            label: 'レプリカの交換について',
            infoOnly: true,
            DirectInfo: EiyuuOldRepurikaGetDirectInfo
          }
        },
        {
          process: {
            label: 'targetを交換｜トレジャー',
            textDirectInfo: '在庫【3本】※補充されない'
          },
          targets: eiyuuOldTreasures(repurikaName, 1),
          treasures: [
            [treasureEntries['kukyou-no-akasi'], 1, { noAccu: true }],
            ...eiyuuOldTreasures('sinnen', 1, { noAccu: true }),
            ...eiyuuOldTreasures('akasi_job', 1, { noAccu: true })
          ]
        },
        {
          process: {
            label: 'targetを交換｜武勲の輝き',
            textDirectInfo: '在庫【4本/月】'
          },
          targets: eiyuuOldTreasures(repurikaName, 1, { star: 'totu_0' }),
          treasures: [[treasureEntries['bukun-no-kagayaki'], 500, { noAccu: true }]]
        },
        {
          process: {
            label: 'レプリカを3凸し、強化',
            textDirectInfo: 'Lv75 に強化'
          },
          targets: eiyuuOldTreasures(repurikaName, 1, { star: 'totu_3' }),
          treasures: [
            ...eiyuuOldTreasures(repurikaName, 4, { star: 'totu_0' }),
          ]
        },
        {
          process: {
            label: 'レプリカを英雄武器に強化',
            textDirectInfo: 'ここからの強化は全てショップの『特殊武器強化』で行う'
          },
          targets: eiyuuOldTreasures(lowEiyuuName, 1),
          tags: elementChangeTags,
          treasures: [
            ...eiyuuOldTreasures(repurikaName, 1, { star: 'totu_3', noAccu: true }),
            ...eiyuuOldTreasures('coop_toumetu_treasure', 50),
            ...eiyuuOldTreasures('sinnen', 10),
            ...eiyuuOldTreasures('syo', 70),
            [treasureEntries['seisyou-no-hahen'], 50],
            [treasureEntries['kodainuno'], 20],
            [treasureEntries['hekikuu-no-kessyou'], 5]
          ]
        },
        {
          process: {
            label: 'リビルド/再誕に強化',
            DirectInfo: RibirudoDirectInfo
          },
          targets: eiyuuOldTreasures(ribirudoName, 1),
          tags: elementChangeTags,
          treasures: [
            ...eiyuuOldTreasures(lowEiyuuName, 1, { star: 'totu_3_red', noAccu: true }),
            ...eiyuuOldTreasures('akasi_job', 10),
            ...eiyuuOldTreasures('element_weapon', 256),
            ...eiyuuOldTreasures('element_zokusei', 50),
            ...eiyuuOldTreasures('sinnen', 25, {
              fnOption: {
                swapTreasures: [
                  {
                    contentsName: 'tetorasutorima',
                    treasureName: 'madousi-no-sinnen',
                    swapTreasureName: 'sensi-no-sinnen'
                  }
                ]
              }
            }),
            [treasureEntries['eikou-no-akasi'], 30],
            [treasureEntries['seisyou-no-hahen'], 120],
            [treasureEntries['gyokukou'], 2],
            [treasureEntries['hekikuu-no-kessyou'], 5]
          ]
        },
        {
          process: {
            label: '属性変更',
            DirectInfo: ZokuseHenkouDirectInfo
          },
          targets: eiyuuOldTreasures(lowElementName, 1, { isSetting: true }),
          tags: elementChangeTags,
          treasures: [
            ...eiyuuOldTreasures(ribirudoName, 1, { star: 'totu_3_red', noAccu: true }),
            ...eiyuuOldTreasures('akasi_job', 30),
            ...eiyuuOldTreasures('element_weapon', 512),
            ...treasure('toumetu-anima', 100, { isSetting: true }),
            ...treasure('kagayaki', 30, { isSetting: true }),
            ...treasure('coop_syo', 30, { splitElement: true, isSetting: true }),
            [treasureEntries['ginten-no-kagayaki'], 3],
            [treasureEntries['hekikuu-no-kessyou'], 15]
          ]
        },
        {
          process: {
            label: 'targetに強化'
          },
          targets: eiyuuOldTreasures(hightElementName, 1, { isSetting: true }),
          treasures: [
            ...eiyuuOldTreasures(lowElementName, 1, { star: 'totu_3_red', noAccu: true, isSetting: true }),
            ...eiyuuOldTreasures('element_weapon', 255, {
              fnOption: {
                swapTreasures: [
                  {
                    contentsName: 'madonesu-sirinji',
                    treasureName: 'tanken-no-eremento',
                    swapTreasureName: 'juu-no-eremento'
                  },
                  {
                    contentsName: 'kaosu-kurieita',
                    treasureName: 'tanken-no-eremento',
                    swapTreasureName: 'ken-no-eremento'
                  }
                ]
              }
            }),
            ...eiyuuOldTreasures('hokori', 10),
            ...treasure('kagayaki', 30, { isSetting: true }),
            ...treasure('tenji_anima', 6, { isSetting: true, splitElement: true }),
            [treasureEntries['bahamuto-no-sidenkaku'], 1],
            [treasureEntries['ginten-no-kagayaki'], 3],
            [treasureEntries['hekikuu-no-kessyou'], 20],
            [treasureEntries['kakuriyo-no-kokusijin'], 3]
          ]
        },
        ...enburemuProceses
      ]
    }
  });
}
