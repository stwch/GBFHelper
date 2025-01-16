import { elementEntries, juttenEntries, settingTypeEntries, stepEntries } from 'src/assets/data/common';
import KyokuseiAbiConditions from 'src/assets/data/process-info/jutten-kyokusei/KyokuseiAbiConditions';
import { treasureEntries } from 'src/assets/data/treasure';
import createContentsData from 'src/helpers/createContentsData';
import createMultiplyOption from 'src/helpers/createMultiplyOption';
import juttenKyokuseiTreasures from 'src/helpers/data-utilities/juttenKyokuseiTreasures';
import treasure from 'src/helpers/data-utilities/treasure';

//コンテンツが追加されしだいコメントアウトを消して調整

const {
  // fire,
  water
  // earth,
  // wind,
  // light,
  // dark
} = elementEntries;
const { kyokusei } = stepEntries;
const { multiply } = settingTypeEntries;
const {
  uno,
  // son,
  // sarasa,
  katoru
  // fyunfu,
  // sisu,
  // siete,
  // okuto,
  // nio,
  // esseru
} = juttenEntries;

export const juttenKyokuseiInitialMultiply = createMultiplyOption(2, 0, 0, 0, 0, 2);
export const juttenKyokuseiData = createContentsData({
  category: { names: ['十天衆/極星アビ', 'jutten-kyokusei'] },
  contents: [
    [uno, water],
    // [son, light],
    // [sarasa, earth],
    [katoru, water]
    // [fyunfu, light],
    // [sisu, dark],
    // [siete, wind],
    // [okuto, earth],
    // [nio, wind],
    // [esseru, fire]
  ],
  steps: [
    {
      names: kyokusei,
      setting: multiply,
      staticRootPath: 'jutten',
      staticStepPath: 'limit'
    }
  ],
  treasureSorts: {
    kyokusei: [
      { groups: ['kutihateta', 'tenseiki'] },
      { groups: ['houju_low', 'jin'], },
      { groups: ['houju_hight', 'maki', 'ryuu_rin'] },
      { groups: ['sekihen', 'seisyou'] },
      { groups: ['maguna2_maguna_anima', 'eniado_maguna_anima', 'maguna3_maguna_anima'] },
      { groups: ['tenji_kourin', 'rokuryuu_ryuuju', 'rokuryuu_treasure'] },
      { groups: ['pusyuke', 'sinnaru_anima'] },
      { groups: ['multi_furagumento'] },
      { groups: ['rindvurumu'] },
      { groups: ['akasi_multi'] },
      { groups: ['ginpen', 'element_weapon', 'element_zokusei'] },
      { groups: ['buraito'] },
      { groups: ['tensei_no_kakera'] },
      { groups: ['rare'] },


    ]
  },
  requiredTreasures: {
    kyokusei: [
      {
        process: {
          label: '極星アビリティの習得条件',
          infoOnly: true,
          DirectInfo: KyokuseiAbiConditions
        }
      },
      {
        process: {
          label: '極星ボーナスLv1'
        },
        targets: juttenKyokuseiTreasures('jutten_limit', 1, { thumbnailPathRoot: 'jutten' }),
        treasures: [
          ...juttenKyokuseiTreasures('sekihen', 50),
          ...juttenKyokuseiTreasures('maguna2_maguna_anima', 50),
          ...juttenKyokuseiTreasures('eniado_maguna_anima', 40),
          [treasureEntries['jenesisu-furagumento'], 100],
          [treasureEntries['eikou-no-akasi'], 50]
        ]
      },
      {
        process: {
          label: '極星ボーナスLv2'
        },
        targets: juttenKyokuseiTreasures('jutten_limit', 1, { thumbnailPathRoot: 'jutten' }),
        treasures: [
          ...juttenKyokuseiTreasures('pusyuke', 150),
          ...juttenKyokuseiTreasures('maguna3_maguna_anima', 25),
          ...juttenKyokuseiTreasures('tenji_kourin', 15),
          [treasureEntries['imotaru-furagumento'], 70],
          [treasureEntries['sinryuu-no-kinrin'], 30],
          [treasureEntries['hasya-no-akasi'], 25]
        ]
      },
      {
        process: {
          label: '極星ボーナスLv3'
        },
        targets: juttenKyokuseiTreasures('jutten_limit', 1, { thumbnailPathRoot: 'jutten' }),
        treasures: [
          ...juttenKyokuseiTreasures('rokuryuu_treasure', 30),
          ...juttenKyokuseiTreasures('rokuryuu_ryuuju', 100),
          ...juttenKyokuseiTreasures('ginpen', 60),
          ...juttenKyokuseiTreasures('buraito', 20),
          [treasureEntries['kukyou-no-akasi'], 10]
        ]
      },
      {
        process: {
          label: '朽ち果てた武器を3凸し、強化',
          textDirectInfo: '全てLv75 に強化'
        },
        targets: juttenKyokuseiTreasures('kutihateta', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          ...juttenKyokuseiTreasures('kutihateta', 4, { star: 'totu_0', isSetting: true })
        ]
      },
      {
        process: {
          label: '属性の依代を作成'
        },
        tags: ['tensei_no_kakera'],
        targetsAsLabel: [[[['属性の依代', 'yorisiro-target'], 'label'], 1, { isSetting: true }]],
        //属性の依代
        targets: juttenKyokuseiTreasures('yorisiro_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          ...juttenKyokuseiTreasures('kutihateta', 1, { star: 'totu_3', isSetting: true, noAccu: true }),
          ...treasure('houju_low', 250, { isSetting: true }),
          ...treasure('jin', 250, { isSetting: true }),
          [treasureEntries['seisyou-no-kakera'], 250, { isSetting: true }]
        ]
      },
      {
        process: {
          label: '天星器を3凸し、強化',
          textDirectInfo: '全てLv100・Slv10 に強化'
        },
        targets: juttenKyokuseiTreasures('tenseiki', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          ...juttenKyokuseiTreasures('tenseiki', 4, { star: 'totu_0', isSetting: true })
        ]
      },
      {
        process: {
          label: '天星器を真化'
        },
        tags: ['tensei_no_kakera'],
        targets: juttenKyokuseiTreasures('tenseiki_sin', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          ...juttenKyokuseiTreasures('tenseiki', 1, { star: 'totu_3', isSetting: true, noAccu: true }),
          [treasureEntries['koukou-no-houju'], 50, { isSetting: true, ignoreElement: true }],
          [treasureEntries['tenkou-no-maki'], 50, { isSetting: true, ignoreElement: true }],
          [treasureEntries['hori-jin'], 50, { isSetting: true, ignoreElement: true }],
          [treasureEntries['hakuryuu-rin'], 50, { isSetting: true, ignoreElement: true }],
          [treasureEntries['eikou-no-akasi'], 50, { isSetting: true }],
          [treasureEntries['housyouseki'], 100, { isSetting: true }]
        ]
      },
      {
        process: { label: '真化した天星器を属性変更' },
        tags: ['tensei_no_kakera'],
        targetsAsLabel: [[[['天星器（属性変更）', 'tenseiki-target'], 'label'], 1, { isSetting: true }]],
        targets: juttenKyokuseiTreasures('tenseiki_element', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          ...juttenKyokuseiTreasures('tenseiki_sin', 1, { star: 'totu_3', isSetting: true, noAccu: true }),
          ...juttenKyokuseiTreasures('yorisiro_element', 1, { star: 'totu_3_red', isSetting: true, noAccu: true }),
          ...treasure('sinnaru_anima', 3, { isSetting: true })
        ]
      },
      {
        process: { label: '属性変更した天星器をエレメント化' },
        targets: juttenKyokuseiTreasures('tensei_no_kakera', 5, { isSetting: true }),
        treasures: [
          ...juttenKyokuseiTreasures('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true, noAccu: true })
        ]
      },
      {
        process: {
          label: '極星ボーナスLv4'
        },
        targets: juttenKyokuseiTreasures('jutten_limit', 1, { thumbnailPathRoot: 'jutten' }),
        treasures: [
          ...juttenKyokuseiTreasures('tensei_no_kakera', 20),
          ...juttenKyokuseiTreasures('element_weapon', 500),
          ...juttenKyokuseiTreasures('element_zokusei', 500),
          [treasureEntries['damasukasu-gaisyou'], 10]
        ]
      },
      {
        process: {
          label: '極星ボーナスLv5',
          textDirectInfo: '極星アビリティ習得！'
        },
        targets: juttenKyokuseiTreasures('jutten_limit', 1, { thumbnailPathRoot: 'jutten' }),
        treasures: [[treasureEntries['tera-adamanto'], 1]]
      }
    ]
  }
});
