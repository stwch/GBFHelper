import { elementEntries, jukkenEntries, stepEntries } from 'src/assets/data/common';
import { treasureEntries } from 'src/assets/data/treasure';
import createContentsData from 'src/helpers/createContentsData';
import * as dataUtilities from 'src/helpers/data-utilities/dataUtilities';

const { fire, water, earth, wind, light, dark } = elementEntries;
const { join, last } = stepEntries;
const { mariateresa, kaimu, nia, esutariora, furau, roberia, gaizenboga, hazerira, aranan, kattserira } = jukkenEntries;
const { jukkenTreasures } = dataUtilities;

export const jukkenData = createContentsData({
  category: { names: ['十賢者', 'jukken'] },
  contents: [
    [mariateresa, water],
    [kaimu, earth],
    [nia, dark],
    [esutariora, wind],
    [furau, fire],
    [roberia, earth],
    [gaizenboga, light],
    [hazerira, water],
    [aranan, fire],
    [kattserira, wind]
  ],
  // steps: [[join], [last]],
  steps: [{ names: join }, { names: last }],
  treasureSorts: {
    join: [
      {
        groups: ['verumu', 'asutora', 'idea', 'heizu', 'akarumu_furagumento', 'sefira']
      },
      {
        groups: ['ryuu_rin', 'sekihen', 'seisyou']
      },
      {
        groups: ['sima_maguna_anima', 'maguna2_maguna_anima', 'old_primary_anima', 'new_primary_anima', 'tenji_anima']
      },
      {
        groups: ['multi_furagumento', 'bahamuto_hl']
      },
      {
        groups: ['akasi_multi', 'rare_multi']
      },
      {
        groups: ['element_zokusei', 'coop_toumetu_treasure']
      },
      {
        groups: ['naru_gurande']
      },
      {
        groups: ['rare']
      }
    ],
    last: [
      {
        groups: ['verumu', 'asutora', 'idea', 'heizu', 'akarumu_furagumento', 'sefira']
      },
      {
        groups: ['buraito', 'weritasu', 'gosuperu']
      },
      {
        groups: ['pusyuke', 'maguna2_maguna_anima', 'rokuryuu_ryuuju', 'rokuryuu_treasure']
      },
      {
        groups: ['gurande_hl']
      },
      {
        groups: ['multi_furagumento']
      },
      {
        groups: ['rare']
      }
    ]
  },
  requiredTreasures: {
    join: [
      {
        process: {
          label: 'SR召喚石を交換'
        },
        tags: ['akarumu_summon_5totu'],
        targets: jukkenTreasures('akarumu_summon_sr', 1, { star: 'totu_0' }),
        treasures: [
          [treasureEntries['sefira-suton'], 2],
          ...jukkenTreasures('asutora', 3),
          ...jukkenTreasures('idea', 2),
          ...jukkenTreasures('verumu', 6),
          ...jukkenTreasures('heizu', 1),
          ...jukkenTreasures('sima_maguna_anima', 30),
          [treasureEntries['seisyoukai'], 100]
        ]
      },
      {
        process: {
          label: '上限解放｜1凸'
        },
        tags: ['akarumu_summon_5totu'],
        targets: jukkenTreasures('akarumu_summon_sr', 1),
        treasures: [
          [treasureEntries['sefira-suton'], 5],
          ...jukkenTreasures('asutora', 5),
          ...jukkenTreasures('idea', 3),
          ...jukkenTreasures('verumu', 16),
          ...jukkenTreasures('heizu', 3),
          ...jukkenTreasures('element_zokusei', 100),
          [treasureEntries['niji-seisyou'], 100]
        ]
      },
      {
        process: {
          label: '上限解放｜2凸'
        },
        tags: ['akarumu_summon_5totu'],
        targets: jukkenTreasures('akarumu_summon_sr', 1),
        treasures: [
          [treasureEntries['sefira-suton'], 10],
          ...jukkenTreasures('asutora', 10),
          ...jukkenTreasures('idea', 5),
          ...jukkenTreasures('verumu', 30),
          ...jukkenTreasures('heizu', 7),
          ...jukkenTreasures('old_primary_anima', 30)
        ]
      },
      {
        process: {
          label: '上限解放｜3凸'
        },
        tags: ['akarumu_summon_5totu'],
        targets: jukkenTreasures('akarumu_summon_sr', 1, { star: 'totu_3' }),
        treasures: [
          [treasureEntries['sefira-suton'], 15],
          ...jukkenTreasures('asutora', 15),
          ...jukkenTreasures('idea', 7),
          ...jukkenTreasures('verumu', 50),
          ...jukkenTreasures('heizu', 16),
          ...jukkenTreasures('new_primary_anima', 30),
          [treasureEntries['kukyou-no-akasi'], 3]
        ]
      },
      {
        process: {
          label: 'SSR化'
        },
        tags: ['akarumu_summon_5totu'],
        targets: jukkenTreasures('akarumu_summon_ssr', 1, { star: 'totu_3' }),
        treasures: [
          [treasureEntries['sefira-suton'], 30],
          ...jukkenTreasures('asutora', 30),
          ...jukkenTreasures('idea', 15),
          ...jukkenTreasures('verumu', 80),
          ...jukkenTreasures('heizu', 24),
          ...jukkenTreasures('tenji_anima', 20),
          [treasureEntries['ginten-no-kagayaki'], 5],
          [treasureEntries['kongousyou'], 1]
        ]
      },
      {
        process: {
          label: '上限解放｜4凸'
        },
        tags: ['akarumu_summon_5totu'],
        targets: jukkenTreasures('akarumu_summon_ssr', 1, { star: 'totu_4' }),
        treasures: [
          [treasureEntries['sefira-suton'], 45],
          ...jukkenTreasures('asutora', 45),
          ...jukkenTreasures('idea', 25),
          ...jukkenTreasures('verumu', 120),
          ...jukkenTreasures('heizu', 32),
          ...jukkenTreasures('akarumu_furagumento', 10),
          ...jukkenTreasures('maguna2_maguna_anima', 10)
        ]
      },
      {
        process: {
          label: '上限解放｜5凸'
        },
        tags: ['akarumu_summon_5totu'],
        targets: jukkenTreasures('akarumu_summon_ssr', 1, { star: 'totu_4' }),
        treasures: [
          ...jukkenTreasures('coop_toumetu_treasure', 100),
          ...jukkenTreasures('sekihen', 50),
          [treasureEntries['jenesisu-furagumento'], 80],
          [treasureEntries['bahamuto-no-sidenkaku'], 10],
          ...jukkenTreasures('naru_gurande', 50),
          ...jukkenTreasures('verumu', 250),
          ...jukkenTreasures('akarumu_furagumento', 20)
        ]
      },
      {
        process: {
          label: '発生したフェイトエピソードをクリアすると、カードが交換可能になる',
          infoOnly: true
        }
      },
      {
        process: {
          label: 'targetを交換'
        },
        targets: jukkenTreasures('jukken_card', 1),
        treasures: [
          [treasureEntries['sefira-suton'], 30],
          ...jukkenTreasures('asutora', 200),
          ...jukkenTreasures('idea', 20),
          [treasureEntries['sefira-gyokuzui'], 1]
        ]
      },
      {
        process: {
          label: 'カードを消費してフェイトエピソードをクリアすると加入！',
          infoOnly: true
        }
      },
      {
        process: {
          label: '上限解放（★4）'
        },
        tags: ['jukken_totu_4'],
        targets: jukkenTreasures('jukken_join', 1, { star: 'totu_3', thumbnailPathRoot: 'jukken' }),
        treasures: [
          ...jukkenTreasures('asutora', 6, { noAccu: true, tagAccu: true }),
          ...jukkenTreasures('idea', 2, { noAccu: true, tagAccu: true }),
          ...jukkenTreasures('verumu', 20, { noAccu: true, tagAccu: true }),
          ...jukkenTreasures('heizu', 3, { noAccu: true, tagAccu: true }),
          ...jukkenTreasures('ryuu_rin', 1, { noAccu: true, tagAccu: true }),
          [treasureEntries['seisyoukai'], 15, { noAccu: true, tagAccu: true }],
          [treasureEntries['niji-seisyou'], 3, { noAccu: true, tagAccu: true }],
          [treasureEntries['hasya-no-akasi'], 20, { noAccu: true, tagAccu: true }]
        ]
      }
    ],
    last: [
      {
        process: {
          label: '礎武器を交換'
        },
        tags: ['isizue_weapon_5totu'],
        targets: jukkenTreasures('isizue_weapon', 1, { star: 'totu_0' }),
        treasures: [
          [treasureEntries['nyu-warudo-kuxotu'], 5],
          ...jukkenTreasures('buraito', 5, { staticSplitNumber: 3 }),
          ...jukkenTreasures('weritasu', 20)
        ]
      },
      {
        process: {
          label: '礎武器｜1凸'
        },
        tags: ['isizue_weapon_5totu'],
        targets: jukkenTreasures('isizue_weapon', 1, { star: 'totu_3' }),
        treasures: [
          [treasureEntries['nyu-warudo-kuxotu'], 5],
          ...jukkenTreasures('buraito', 15, { staticSplitNumber: 7 }),
          ...jukkenTreasures('weritasu', 70),
          [treasureEntries['marisu-furagumento'], 30],
          ...jukkenTreasures('verumu', 100),
          ...jukkenTreasures('asutora', 30)
        ]
      },
      {
        process: {
          label: '礎武器｜2凸'
        },
        tags: ['isizue_weapon_5totu'],
        targets: jukkenTreasures('isizue_weapon', 1, { star: 'totu_3' }),
        treasures: [
          [treasureEntries['nyu-warudo-kuxotu'], 10],
          ...jukkenTreasures('buraito', 30),
          ...jukkenTreasures('weritasu', 100),
          [treasureEntries['sousui-no-kessyou'], 20],
          ...jukkenTreasures('verumu', 150),
          ...jukkenTreasures('asutora', 50),
          ...jukkenTreasures('idea', 30)
        ]
      },
      {
        process: {
          label: '礎武器｜3凸'
        },
        tags: ['isizue_weapon_5totu'],
        targets: jukkenTreasures('isizue_weapon', 1, { star: 'totu_3' }),
        treasures: [
          [treasureEntries['nyu-warudo-kuxotu'], 20],
          ...jukkenTreasures('buraito', 50),
          ...jukkenTreasures('weritasu', 130),
          ...jukkenTreasures('rokuryuu_ryuuju', 20),
          ...jukkenTreasures('verumu', 200),
          ...jukkenTreasures('asutora', 100),
          ...jukkenTreasures('idea', 70)
        ]
      },
      {
        process: {
          label: '礎武器｜4凸',
          textDirectInfo: 'この段階から編成に入る可能性が出てくる'
        },
        tags: ['isizue_weapon_5totu'],
        targets: jukkenTreasures('isizue_weapon', 1, { star: 'totu_4' }),
        treasures: [
          [treasureEntries['nyu-warudo-kuxotu'], 20],
          ...jukkenTreasures('buraito', 60),
          ...jukkenTreasures('weritasu', 150),
          ...jukkenTreasures('rokuryuu_ryuuju', 30),
          ...jukkenTreasures('verumu', 250),
          ...jukkenTreasures('asutora', 120),
          ...jukkenTreasures('idea', 100)
        ]
      },
      {
        process: {
          label: '礎武器｜5凸',
          textDirectInfo: 'ダメージ上限の追加により、編成する機会が増える'
        },
        tags: ['isizue_weapon_5totu'],
        targets: jukkenTreasures('isizue_weapon', 1, { star: 'totu_4' }),
        treasures: [
          [treasureEntries['nyu-warudo-kuxotu'], 30],
          ...jukkenTreasures('buraito', 70),
          ...jukkenTreasures('weritasu', 170),
          ...jukkenTreasures('rokuryuu_treasure', 30),
          ...jukkenTreasures('akarumu_furagumento', 30),
          [treasureEntries['toki-no-ryuusa'], 3],
          ...jukkenTreasures('asutora', 140),
          ...jukkenTreasures('idea', 130)
        ]
      },
      {
        process: {
          label: '至賢の領域｜Lv1/4'
        },
        tags: ['siken_ryouiki'],
        targets: jukkenTreasures('jukken_join', 1, { star: 'join', thumbnailPathRoot: 'jukken' }),
        treasures: [
          [treasureEntries['jenesisu-furagumento'], 30],
          ...jukkenTreasures('verumu', 120),
          ...jukkenTreasures('heizu', 20),
          [treasureEntries['sefira-suton'], 5]
        ]
      },
      {
        process: {
          label: '至賢の領域｜Lv2/4'
        },
        tags: ['siken_ryouiki'],
        targets: jukkenTreasures('jukken_join', 1, { star: 'join', thumbnailPathRoot: 'jukken' }),
        treasures: [
          ...jukkenTreasures('pusyuke', 30),
          ...jukkenTreasures('verumu', 240),
          ...jukkenTreasures('asutora', 30),
          ...jukkenTreasures('heizu', 30),
          [treasureEntries['sefira-suton'], 10]
        ]
      },
      {
        process: {
          label: '至賢の領域｜Lv3/4'
        },
        tags: ['siken_ryouiki'],
        targets: jukkenTreasures('jukken_join', 1, { star: 'join', thumbnailPathRoot: 'jukken' }),
        treasures: [
          ...jukkenTreasures('maguna2_maguna_anima', 10),
          ...jukkenTreasures('weritasu', 30),
          ...jukkenTreasures('asutora', 40),
          ...jukkenTreasures('idea', 40),
          ...jukkenTreasures('akarumu_furagumento', 10),
          [treasureEntries['sefira-suton'], 15]
        ]
      },
      {
        process: {
          label: '至賢の領域｜Lv4/4',
          textDirectInfo: 'サポートアビリティが解放される'
        },
        tags: ['siken_ryouiki'],
        targets: jukkenTreasures('jukken_join', 1, { star: 'join', thumbnailPathRoot: 'jukken' }),
        treasures: [
          ...jukkenTreasures('rokuryuu_treasure', 30),
          ...jukkenTreasures('buraito', 20),
          ...jukkenTreasures('weritasu', 50),
          ...jukkenTreasures('asutora', 40),
          ...jukkenTreasures('idea', 70),
          ...jukkenTreasures('akarumu_furagumento', 20),
          [treasureEntries['sefira-suton'], 20]
        ]
      },
      {
        process: {
          label: '発生したフェイトエピソードをクリア（エリアムンドゥスのワールドの解放が必要）',
          infoOnly: true
        }
      },
      {
        process: {
          label: '最終上限解放'
        },
        targets: jukkenTreasures('jukken_last', 1, { star: 'last', thumbnailPathRoot: 'jukken' }),
        treasures: [
          [treasureEntries['sefira-suton'], 200],
          ...jukkenTreasures('gosuperu', 50),
          ...jukkenTreasures('buraito', 50),
          [treasureEntries['sefira-gyokuzui'], 1]
        ]
      }
    ]
  }
});
