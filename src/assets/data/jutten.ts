import { elementEntries, juttenEntries, settingTypeEntries, stepEntries } from 'src/assets/data/common';
import SetubikakujuuDirectInfo from 'src/assets/data/process-info/jutten/join/SetubikakujuuDirectInfo';
import FateClearDirectInfo from 'src/assets/data/process-info/jutten/last/FateClearDirectInfo';
import KakuseiElementDirectInfo from 'src/assets/data/process-info/jutten/last/KakuseiElementDirectInfo';
import Lv110Conditions from 'src/assets/data/process-info/jutten/limt/Lv110Conditions';
import Lv120Conditions from 'src/assets/data/process-info/jutten/limt/Lv120Conditions';
import Lv130Conditions from 'src/assets/data/process-info/jutten/limt/Lv130Conditions';
import Lv140Conditions from 'src/assets/data/process-info/jutten/limt/Lv140Conditions';
import Lv150Conditions from 'src/assets/data/process-info/jutten/limt/Lv150Conditions';
import { treasureEntries } from 'src/assets/data/treasure';
import createContentsData from 'src/helpers/createContentsData';
import createMultiplyOption from 'src/helpers/createMultiplyOption';
import * as dataUtilities from 'src/helpers/data-utilities/dataUtilities';

const { fire, water, earth, wind, light, dark } = elementEntries;
const { join, last, limit } = stepEntries;
const { element_change, multiply } = settingTypeEntries;
const { uno, son, sarasa, katoru, fyunfu, sisu, siete, okuto, nio, esseru } = juttenEntries;
const { treasure, juttenTreasure } = dataUtilities;

export const juttenInitialMultiply = createMultiplyOption(2, 2, 2, 2, 0, 2);

export const juttenData = createContentsData({
  category: { names: ['十天衆', 'jutten'] },
  contents: [
    [uno, water],
    [son, light],
    [sarasa, earth],
    [katoru, water],
    [fyunfu, light],
    [sisu, dark],
    [siete, wind],
    [okuto, earth],
    [nio, wind],
    [esseru, fire]
  ],
  steps: [
    {
      names: join,
      setting: element_change
    },
    {
      names: last,
      setting: multiply
    },
    {
      names: limit,
      setting: multiply
    }
  ],
  // steps: [
  //   [join, element_change],
  //   [last, multiply],
  //   [limit, multiply]
  // ],
  treasureSorts: {
    join: [
      {
        groups: ['tenseiki', 'kutihateta']
      },
      {
        groups: ['houju_low', 'houju_hight', 'syo', 'maki', 'jin', 'ryuu_rin'],
        elementSort: true
      },
      { groups: ['seisyou'] },
      { groups: ['sinnaru_anima'] },
      { groups: ['akasi_multi', 'rare_multi'] },
      { groups: ['sima_anima'] },
      {
        groups: ['sima_treasure'],
        largestSort: true
      },
      {
        groups: ['world'],
        largestSort: true
      },
      { groups: ['rare'] }
    ],
    last: [
      { groups: ['tenseiki', 'kutihateta', 'yorisiro_gin'] },
      {
        groups: ['houju_low', 'jin'],
        elementSort: true
      },
      {
        groups: ['houju_hight', 'maki', 'ryuu_rin'],
        elementSort: true
      },
      { groups: ['seisyou'] },
      { groups: ['sinnaru_anima'] },
      { groups: ['pusyuke'] },
      { groups: ['akasi_multi', 'rare_multi'] },
      { groups: ['old_primary_maguna_anima'] },
      { groups: ['element_zokusei'] },
      { groups: ['element_weapon'] },
      { groups: ['coop_syo', 'akasi_job'] },
      { groups: ['rare'] }
    ],
    limit: [
      { groups: ['tenseiki', 'kutihateta'] },
      {
        groups: ['houju_low', 'jin'],
        elementSort: true
      },
      { groups: ['houju_hight', 'maki', 'ryuu_rin'], elementSort: true },
      { groups: ['seisyou'] },
      { groups: ['sinnaru_anima'] },
      { groups: ['pusyuke'] },
      { groups: ['akasi_multi'] },
      { groups: ['maguna2_maguna_anima', 'rokuryuu_ryuuju', 'rokuryuu_treasure', 'tenji_kourin'] },
      { groups: ['ouryuu_kokukirin', 'rindvurumu', 'bahamuto_hl'] },
      { groups: ['rusifa_hl', 'beruzebabu', 'beriaru'] },
      { groups: ['ginpen', 'element_zokusei', 'element_weapon'] },
      { groups: ['buraito'] },
      { groups: ['point'] },
      { groups: ['rare'] }
    ]
  },
  requiredTreasures: {
    join: [
      {
        process: {
          label: '天星器を3凸し、強化',
          textDirectInfo: 'Lv100・Slv10 に強化'
        },
        targets: juttenTreasure('tenseiki', 1, { star: 'totu_3' }),
        treasures: [
          ...juttenTreasure('tenseiki', 4, { star: 'totu_0' })
        ]
      },
      {
        process: {
          label: '天星器を真化',
          textDirectInfo: 'ショップの『特殊武器強化』から実行'
        },
        //天星器・真
        targets: juttenTreasure('tenseiki_sin', 1, { star: 'totu_3' }),
        treasures: [
          //天星器
          ...juttenTreasure('tenseiki', 1, { star: 'totu_3', noAccu: true }),
          //共通
          [treasureEntries['koukou-no-houju'], 50],
          [treasureEntries['tenkou-no-maki'], 50],
          [treasureEntries['hori-jin'], 50],
          [treasureEntries['hakuryuu-rin'], 50],
          [treasureEntries['eikou-no-akasi'], 50],
          [treasureEntries['housyouseki'], 100]
        ]
      },
      {
        process: {
          label: '朽ち果てた武器を3凸し、強化',
          textDirectInfo: 'Lv75 に強化'
        },
        targets: juttenTreasure('kutihateta', 1, { star: 'totu_3' }),
        treasures: [
          ...juttenTreasure('kutihateta', 4, { star: 'totu_0' })
        ]
      },
      {
        process: {
          label: '属性の依代を作成',
          textDirectInfo: 'ショップの『特殊武器強化』で作成'
        },
        //属性の依代
        targets: juttenTreasure('yorisiro_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //朽ち果てた武器
          ...juttenTreasure('kutihateta', 1, { star: 'totu_3', noAccu: true }),
          //下位宝珠
          ...treasure('houju_low', 250, { isSetting: true }),
          //ジーン
          ...treasure('jin', 250, { isSetting: true }),
          //共通
          [treasureEntries['seisyou-no-kakera'], 250]
        ]
      },
      {
        process: {
          label: '真化した天星器を属性変更',
          textDirectInfo: 'ショップの『特殊武器強化』から実行'
        },
        //天星器（属性変更）
        targets: juttenTreasure('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //天星器・真
          ...juttenTreasure('tenseiki_sin', 1, { star: 'totu_3', noAccu: true }),
          //朽ち果てた武器
          ...juttenTreasure('yorisiro_element', 1, { star: 'totu_3_red', noAccu: true, isSetting: true }),
          //真なる属性のアニマ
          ...treasure('sinnaru_anima', 3, { isSetting: true })
        ]
      },
      {
        process: {
          label: '設備拡充',
          DirectInfo: SetubikakujuuDirectInfo
        },
        //シェロ
        targets: [[treasureEntries['syero-setubi'], 0]],
        treasures: [
          //共通
          ...treasure('setubi_kakujuu', 1, { noAccu: true, star: 'totu_0' }),
          [treasureEntries['misura-no-anima'], 5, { noAccu: true }],
          [treasureEntries['rupi'], 200_000, { noAccu: true }]
        ]
      },
      {
        process: {
          label: '特殊強化｜1/5',
          textDirectInfo: 'ここからの強化は全てショップの『特殊武器強化』で行う'
        },
        //天星器（属性変更）
        targets: juttenTreasure('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //下位宝珠
          ...treasure('houju_low', 100, { isSetting: true }),
          //書
          ...treasure('syo', 100, { isSetting: true }),
          //巻
          ...treasure('maki', 150, { isSetting: true }),
          //ジーン
          ...treasure('jin', 100, { isSetting: true }),
          //共通
          [treasureEntries['yawarakai-hane'], 300],
          [treasureEntries['gensyo-no-suna'], 100],
          [treasureEntries['kataituti'], 100],
          [treasureEntries['hasya-no-akasi'], 10],
          [treasureEntries['hekikuu-no-kessyou'], 3],
          [treasureEntries['housyouseki'], 100]
        ]
      },
      {
        process: { label: '特殊強化｜2/5' },
        //天星器（属性変更）
        targets: juttenTreasure('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //下位宝珠
          ...treasure('houju_low', 150, { isSetting: true }),
          //書
          ...treasure('syo', 150, { isSetting: true }),
          //ジーン
          ...treasure('jin', 150, { isSetting: true }),
          //竜鱗
          ...treasure('ryuu_rin', 30, { isSetting: true }),
          //真なる属性のアニマ
          ...treasure('sinnaru_anima', 3, { isSetting: true }),
          //共通
          [treasureEntries['kiyorakana-mizu'], 100],
          [treasureEntries['beniouseki'], 100],
          [treasureEntries['uturonaru-tamasii'], 100],
          [treasureEntries['hasya-no-akasi'], 10],
          [treasureEntries['niji-seisyou'], 50],
          [treasureEntries['hekikuu-no-kessyou'], 5],
          [treasureEntries['housyouseki'], 200]
        ]
      },
      {
        process: { label: '特殊強化｜3/5' },
        //天星器（属性変更）
        targets: juttenTreasure('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //下位宝珠
          ...treasure('houju_low', 200, { isSetting: true }),
          //上位宝珠
          ...treasure('houju_hight', 100, { isSetting: true }),
          //ジーン
          ...treasure('jin', 100, { isSetting: true }),
          //島ボスのアニマ
          ...treasure('sima_anima', 100, { isSetting: true }),
          //共通
          [treasureEntries['fuuhaku-no-hane'], 300],
          [treasureEntries['taka-no-hane'], 100],
          [treasureEntries['yoken-no-futaba'], 80],
          [treasureEntries['hasya-no-akasi'], 10],
          [treasureEntries['hekikuu-no-kessyou'], 7],
          [treasureEntries['housyouseki'], 300]
        ]
      },
      {
        process: { label: '特殊強化｜4/5' },
        //天星器（属性変更）
        targets: juttenTreasure('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //下位宝珠
          ...treasure('houju_low', 250, { isSetting: true }),
          //ジーン
          ...treasure('jin', 250, { isSetting: true }),
          //竜鱗
          ...treasure('ryuu_rin', 50, { isSetting: true }),
          //真なる属性のアニマ
          ...treasure('sinnaru_anima', 3, { isSetting: true }),
          //共通
          [treasureEntries['uzukohaku'], 100],
          [treasureEntries['rakurimosa'], 100],
          [treasureEntries['orudhine-syutain'], 80],
          [treasureEntries['niji-seisyou'], 150],
          [treasureEntries['hekikuu-no-kessyou'], 10],
          [treasureEntries['housyouseki'], 400]
        ]
      },
      {
        process: { label: '特殊強化｜5/5' },
        //天星器（属性変更）
        targets: juttenTreasure('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //島ボストレジャー
          ...treasure('sima_treasure', 20, { swapNumber: 80, isSetting: true }),
          //共通
          [treasureEntries['kodainuno'], 100],
          [treasureEntries['hasya-no-akasi'], 10],
          [treasureEntries['hekikuu-no-kessyou'], 15],
          [treasureEntries['housyouseki'], 500]
        ]
      },
      {
        process: {
          label: '覚醒',
          textDirectInfo: 'テラアダマントの使用は非推奨'
        },
        //天星器（属性変更）
        targets: juttenTreasure('tenseiki_kakusei', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //共通
          ...treasure('sinnaru_anima', 3),
          [treasureEntries['niji-seisyou'], 250],
          [treasureEntries['hekikuu-no-kessyou'], 30],
          [treasureEntries['hihiirokane'], 1],
          [treasureEntries['housyouseki'], 500]
        ]
      },
      {
        process: {
          label: '覚醒後、出現するフェイトエピソードをクリアすると加入！',
          infoOnly: true
        }
      }
    ],
    last: [
      {
        process: {
          label: 'フェイトエピソードをクリア',
          DirectInfo: FateClearDirectInfo,
          infoOnly: true
        }
      },
      {
        process: {
          label: '銀の依代を4凸し、強化',
          textDirectInfo: 'Lv150 に強化'
        },
        //銀の依代
        targets: juttenTreasure('yorisiro_gin', 1, { star: 'totu_4' }),
        treasures: [
          //銀の依代
          ...juttenTreasure('yorisiro_gin', 4, { star: 'totu_0' }),
          //武器のエレメント
          ...juttenTreasure('element_weapon', 300),
          //共通
          ...treasure('element_zokusei', 300)
        ]
      },
      {
        process: {
          label: '朽ち果てた武器を3凸し、強化',
          textDirectInfo: '全てLv75 に強化'
        },
        targets: juttenTreasure('kutihateta', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          ...juttenTreasure('kutihateta', 4, { star: 'totu_0', isSetting: true })
        ]
      },
      {
        process: { label: '属性の依代を作成' },
        tags: ['tensei_no_kakera'],
        targetsAsLabel: [[[['属性の依代', 'yorisiro-target'], 'label'], 1, { isSetting: true }]],
        //属性の依代
        targets: juttenTreasure('yorisiro_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //朽ち果てた
          ...juttenTreasure('kutihateta', 1, { star: 'totu_3', isSetting: true, noAccu: true }),
          //下位宝珠
          ...treasure('houju_low', 250, { isSetting: true }),
          //ジーン
          ...treasure('jin', 250, { isSetting: true }),
          //共通
          [treasureEntries['seisyou-no-kakera'], 250, { isSetting: true }]
        ]
      },
      {
        process: {
          label: '天星器を3凸し、強化',
          textDirectInfo: '全てLv100・Slv10 に強化'
        },
        targets: juttenTreasure('tenseiki', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          ...juttenTreasure('tenseiki', 4, { star: 'totu_0', isSetting: true })
        ]
      },
      {
        process: { label: '天星器を真化' },
        tags: ['tensei_no_kakera'],
        //天星器・真
        targets: juttenTreasure('tenseiki_sin', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          //天星器
          ...juttenTreasure('tenseiki', 1, { star: 'totu_3', isSetting: true, noAccu: true }),
          //共通
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
        //天星器（属性変更）
        targets: juttenTreasure('tenseiki_element', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          //天星器・真
          ...juttenTreasure('tenseiki_sin', 1, { star: 'totu_3', isSetting: true, noAccu: true }),
          //属性の依代
          ...juttenTreasure('yorisiro_element', 1, { star: 'totu_3_red', isSetting: true, noAccu: true }),
          //真なる属性のアニマ
          ...treasure('sinnaru_anima', 3, { isSetting: true })
        ]
      },
      {
        process: { label: '属性変更した天星器をエレメント化' },
        //天星の欠片
        targets: juttenTreasure('tensei_no_kakera', 5, { isSetting: true }),
        treasures: [
          //天星器・真
          ...juttenTreasure('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true, noAccu: true })
        ]
      },
      {
        process: {
          label: '加入時に覚醒した【target】をエレメント化',
          infoOnly: true,
          DirectInfo: KakuseiElementDirectInfo
        },
        targets: juttenTreasure('tenseiki', 1)
      },
      {
        process: {
          label: '朽ち果てた武器を3凸し、強化',
          textDirectInfo: '全てLv75 に強化'
        },
        targets: juttenTreasure('kutihateta', 6, { star: 'totu_3' }),
        treasures: [
          ...juttenTreasure('kutihateta', 24, { star: 'totu_0' })
        ]
      },
      {
        process: { label: '各属性の依代を1本作成' },
        targetsAsLabel: [[[['属性の依代', 'yorisiro-target'], 'label'], 6]],
        //属性の依代
        targets: juttenTreasure('yorisiro_element', 1, { star: 'totu_3_red', isStatic: true }),
        treasures: [
          //朽ち果てた
          ...juttenTreasure('kutihateta', 6, { star: 'totu_3', noAccu: true }),
          //下位宝珠
          ...treasure('houju_low', 250),
          //ジーン
          ...treasure('jin', 250),
          //共通
          [treasureEntries['seisyou-no-kakera'], 250 * 6]
        ]
      },
      {
        process: {
          label: '銀の依代を黄金の依代に強化',
          textDirectInfo: 'テラアダマントの使用は非推奨'
        },
        //黄金の依代
        targets: juttenTreasure('yorisiro_ougon', 1, { star: 'totu_3_red' }),
        treasures: [
          //銀の依代
          ...juttenTreasure('yorisiro_gin', 1, { star: 'totu_4', noAccu: true }),
          //属性の依代
          ...juttenTreasure('yorisiro_element', 1, { star: 'totu_3_red', noAccu: true }),
          //天星の欠片
          ...juttenTreasure('tensei_no_kakera', 100, { noAccu: true }),
          //ジョブの証
          ...juttenTreasure('akasi_job', 30),
          //共通
          [treasureEntries['kukyou-no-akasi'], 5],
          [treasureEntries['ginten-no-kagayaki'], 10],
          [treasureEntries['damasukasu-gaisyou'], 10],
          [treasureEntries['hihiirokane'], 1]
        ]
      },
      {
        process: {
          label: '黄金の依代をエレメント化',
        },
        //天星の欠片
        targets: juttenTreasure('junzen_tamasii', 1),
        treasures: [
          //黄金の依代
          ...juttenTreasure('yorisiro_ougon', 1, { star: 'totu_3_red', noAccu: true })
        ]
      },
      {
        process: {
          label: '純然たる魂を消費し、フェイトエピソードをクリアすると最終上限解放が可能になる！',
          infoOnly: true
        }
      },
      {
        process: {
          label: '魂を交換',
          textDirectInfo: '※2個持っているなら交換の必要なし'
        },
        targets: juttenTreasure('sirokuro_tamasii', 2),
        treasures: [...juttenTreasure('old_primary_maguna_anima', 2)]
      },
      {
        process: { label: '最終上限解放' },
        //十天衆
        targets: juttenTreasure('jutten_last', 1, { star: 'last', thumbnailPathRoot: 'jutten' }),
        treasures: [
          //真なる属性のアニマ
          ...juttenTreasure('sinnaru_anima', 30),
          // プシュケー
          ...juttenTreasure('pusyuke', 10),
          //共闘の書
          ...juttenTreasure('coop_syo', 30),
          //白黒の魂
          ...juttenTreasure('sirokuro_tamasii', 2, { noAccu: true }),
          //共通
          [treasureEntries['niji-seisyou'], 100]
        ]
      }
    ],
    limit: [
      {
        process: {
          label: 'Lv110 になる条件を達成しているか確認',
          infoOnly: true,
          DirectInfo: Lv110Conditions
        }
      },
      {
        process: {
          label: '朽ち果てた武器を3凸し、強化',
          textDirectInfo: '全てLv75 に強化'
        },
        targets: juttenTreasure('kutihateta', 30, { star: 'totu_3' }),
        treasures: [
          ...juttenTreasure('kutihateta', 120, { star: 'totu_0' })
        ]
      },
      {
        process: { label: '属性の依代を30本作成' },
        targets: juttenTreasure('yorisiro_element', 30, {
          star: 'totu_3_red',
          fnOption: { staticWeaponElement: true }
        }),
        treasures: [
          ...juttenTreasure('kutihateta', 30, { star: 'totu_3', noAccu: true }),
          ...juttenTreasure('houju_low', 7500),
          ...juttenTreasure('jin', 7500),
          //共通
          [treasureEntries['seisyou-no-kakera'], 7500]
        ]
      },
      {
        process: { label: '専用素材を交換' },
        targets: juttenTreasure('jutten_limit_treasure', 1),
        treasures: [
          ...juttenTreasure('yorisiro_element', 30, {
            star: 'totu_3_red',
            noAccu: true,
            fnOption: { staticWeaponElement: true }
          }),
          ...juttenTreasure('rokuryuu_treasure', 50),
          ...juttenTreasure('tenji_kourin', 80),
          ...juttenTreasure('ginpen', 200),
          //共通
          [treasureEntries['damasukasu-gaisyou'], 20],
          [treasureEntries['hihiirokane'], 1]
        ]
      },
      {
        process: { label: '限界超越｜110' },
        targets: juttenTreasure('jutten_limit', 1, { star: 'limit_1', thumbnailPathRoot: 'jutten' }),
        treasures: [...juttenTreasure('jutten_limit_treasure', 1, { noAccu: true }), [treasureEntries['rupi'], 100_000]]
      },
      {
        process: {
          label: 'Lv120 になる条件を達成しているか確認',
          infoOnly: true,
          DirectInfo: Lv120Conditions
        }
      },
      {
        process: {
          label: '天星器を3凸し、強化',
          textDirectInfo: '全てLv100・Slv10 に強化'
        },
        targets: juttenTreasure('tenseiki', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          ...juttenTreasure('tenseiki', 4, { star: 'totu_0', isSetting: true })
        ]
      },
      {
        process: { label: '天星器を真化' },
        targets: juttenTreasure('tenseiki_sin', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          ...juttenTreasure('tenseiki', 1, { star: 'totu_3', isSetting: true, noAccu: true }),
          //共通
          [treasureEntries['koukou-no-houju'], 50, { isSetting: true, ignoreElement: true }],
          [treasureEntries['tenkou-no-maki'], 50, { isSetting: true, ignoreElement: true }],
          [treasureEntries['hori-jin'], 50, { isSetting: true, ignoreElement: true }],
          [treasureEntries['hakuryuu-rin'], 50, { isSetting: true, ignoreElement: true }],
          [treasureEntries['eikou-no-akasi'], 50, { isSetting: true }],
          [treasureEntries['housyouseki'], 100, { isSetting: true }]
        ]
      },
      {
        process: {
          label: '朽ち果てた武器を3凸し、強化',
          textDirectInfo: '全てLv75 に強化'
        },
        targets: juttenTreasure('kutihateta', 1, { star: 'totu_3', isSetting: true }),
        treasures: [
          ...juttenTreasure('kutihateta', 4, { star: 'totu_0', isSetting: true })
        ]
      },
      {
        process: { label: '属性の依代を作成' },
        targetsAsLabel: [[[['属性の依代', 'yorisiro-target'], 'label'], 1, { isSetting: true }]],
        targets: juttenTreasure('yorisiro_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          ...juttenTreasure('kutihateta', 1, { star: 'totu_3', isSetting: true, noAccu: true }),
          ...treasure('houju_low', 250, { isSetting: true }),
          ...treasure('jin', 250, { isSetting: true }),
          //共通
          [treasureEntries['seisyou-no-kakera'], 250, { isSetting: true }]
        ]
      },
      {
        process: { label: '真化した天星器を属性変更' },
        targetsAsLabel: [[[['天星器（属性変更）', 'tenseiki-target'], 'label'], 1, { isSetting: true }]],
        //天星器（属性変更）
        targets: juttenTreasure('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true }),
        treasures: [
          //天星器・真
          ...juttenTreasure('tenseiki_sin', 1, { star: 'totu_3', isSetting: true, noAccu: true }),
          //属性の依代
          ...juttenTreasure('yorisiro_element', 1, { star: 'totu_3_red', isSetting: true, noAccu: true }),
          //真なる属性のアニマ
          ...treasure('sinnaru_anima', 3, { isSetting: true })
        ]
      },
      {
        process: { label: '属性変更した天星器をエレメント化' },
        //天星の欠片
        targets: juttenTreasure('tensei_no_kakera', 5, { isSetting: true }),
        treasures: [
          //天星器・真
          ...juttenTreasure('tenseiki_element', 1, { star: 'totu_3_red', isSetting: true, noAccu: true })
        ]
      },
      {
        process: { label: '蒼天の魂を交換' },
        targets: [[treasureEntries['souten-no-tamasii'], 1]],
        treasures: [[treasureEntries['jp'], 20000]]
      },
      {
        process: { label: '限界超越｜120' },
        targets: juttenTreasure('jutten_limit', 1, { star: 'limit_2', thumbnailPathRoot: 'jutten' }),
        treasures: [
          ...juttenTreasure('maguna2_maguna_anima', 50),
          ...juttenTreasure('pusyuke', 300),
          [treasureEntries['bahamuto-no-sidenkaku'], 100],
          [treasureEntries['kukyou-no-akasi'], 100],
          ...juttenTreasure('tensei_no_kakera', 50, { noAccu: true }),
          [treasureEntries['souten-no-tamasii'], 1, { noAccu: true }],
          [treasureEntries['rupi'], 5_000_000]
        ]
      },
      {
        process: {
          label: 'Lv130 になる条件を達成しているか確認',
          infoOnly: true,
          DirectInfo: Lv130Conditions
        }
      },
      {
        process: { label: '碧麗の証を交換' },
        targets: [[treasureEntries['hekirei-no-akasi'], 1]],
        treasures: [[treasureEntries['kunsyou'], 300]]
      },
      {
        process: { label: '限界超越｜130' },
        targets: juttenTreasure('jutten_limit', 1, { star: 'limit_3', thumbnailPathRoot: 'jutten' }),
        treasures: [[treasureEntries['hekirei-no-akasi'], 1, { noAccu: true }]]
      },
      {
        process: {
          label: 'Lv140 になる条件を達成しているか確認',
          infoOnly: true,
          DirectInfo: Lv140Conditions
        }
      },
      {
        process: { label: '限界超越｜140' },
        targets: juttenTreasure('jutten_limit', 1, { star: 'limit_4', thumbnailPathRoot: 'jutten' }),
        treasures: [
          [treasureEntries['sinryuu-no-kinrin'], 50],
          ...juttenTreasure('rokuryuu_ryuuju', 300),
          ...juttenTreasure('ouryuu_kokukirin', 30),
          ...juttenTreasure('element_weapon', 2000),
          ...juttenTreasure('element_zokusei', 2000),
          ...juttenTreasure('buraito', 30),
          [treasureEntries['rupi'], 5_000_000]
        ]
      },
      {
        process: {
          label: 'Lv150 になる条件を達成しているか確認',
          infoOnly: true,
          DirectInfo: Lv150Conditions
        }
      },
      {
        process: { label: '碧麗の証を交換' },
        targets: [[treasureEntries['hekirei-no-akasi'], 1]],
        treasures: [[treasureEntries['kunsyou'], 300]]
      },
      {
        process: { label: '雄偉者たちの矜持を交換' },
        targets: [[treasureEntries['yuuisyatati-no-kyouji'], 1]],
        treasures: [
          [treasureEntries['syuumatu-no-ansyou'], 30],
          [treasureEntries['sikkoku-no-togehane'], 30],
          [treasureEntries['kouti-no-makaku'], 30],
          [treasureEntries['hekirei-no-akasi'], 1, { noAccu: true }]
        ]
      },
      {
        process: {
          label: '雄偉者たちの矜持を消費し、フェイトエピソードをクリアするとLv150 に限界超越する！',
          infoOnly: true
        }
      }
    ]
  }
});
