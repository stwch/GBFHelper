import createEntries from 'src/helpers/createEntries';
import createStarData from 'src/helpers/createStarData';
import type { LiteralUnion } from 'type-fest';

//entries
export const elementEntries = createEntries([
  ['火', 'fire'],
  ['水', 'water'],
  ['土', 'earth'],
  ['風', 'wind'],
  ['光', 'light'],
  ['闇', 'dark']
]);
export const stepEntries = createEntries([
  ['加入', 'join'],
  ['最終', 'last'],
  ['超越', 'limit'],
  ['4凸', 'totu_4'],
  ['5凸', 'totu_5'],
  ['作成', 'create'],
  ['極星アビ', 'kyokusei']
]);
export type SettingTypeName = LiteralUnion<keyof typeof settingTypeEntries, string> | undefined;
export const settingTypeEntries = createEntries([
  ['属性変更', 'element_change'],
  ['本数', 'multiply']
]);

//data
export type StarData = typeof starData;
export const starData = createStarData([
  //キャラクター
  [['加入', 'join'], 'normal-on'],
  [['最終', 'last'], 'last-on'],
  [['150', 'limit_5'], 'limit-05'],
  [['140', 'limit_4'], 'limit-04'],
  [['130', 'limit_3'], 'limit-03'],
  [['120', 'limit_2'], 'limit-02'],
  [['110', 'limit_1'], 'limit-01'],
  //武器
  [['無凸', 'totu_0'], 'normal-off'],
  [['3凸', 'totu_3'], 'normal-on'],
  [['3凸', 'totu_3_red'], 'red-on'],
  [['4凸', 'totu_4'], 'last-on'],
  [['5凸', 'totu_5'], 'last-on'],
  [['250', 'limit_totu_5'], 'limit-05'],
  [['240', 'limit_totu_4'], 'limit-04'],
  [['230', 'limit_totu_3'], 'limit-03'],
  [['220', 'limit_totu_2'], 'limit-02'],
  [['210', 'limit_totu_1'], 'limit-01'],
  [['作成', 'create'], 'last-on'],
  //共通
  [['超越', 'limit'], 'limit-05'],
  //その他
  [['極星アビ', 'kyokusei'], 'limit-01']
]);

export const juttenEntries = createEntries([
  ['ウーノ', 'uno'],
  ['ソーン', 'son'],
  ['サラーサ', 'sarasa'],
  ['カトル', 'katoru'],
  ['フュンフ', 'fyunfu'],
  ['シス', 'sisu'],
  ['シエテ', 'siete'],
  ['オクトー', 'okuto'],
  ['ニオ', 'nio'],
  ['エッセル', 'esseru']
]);
export const juttenNames = Object.keys(juttenEntries);

export const jukkenEntries = createEntries([
  ['マリア・テレサ', 'mariateresa'],
  ['カイム', 'kaimu'],
  ['ニーア', 'nia'],
  ['エスタリオラ', 'esutariora'],
  ['フラウ', 'furau'],
  ['ロベリア', 'roberia'],
  ['ガイゼンボーガ', 'gaizenboga'],
  ['ハーゼリーラ', 'hazerira'],
  ['アラナン', 'aranan'],
  ['カッツェリーラ', 'kattserira']
]);
export const jukkenNames = Object.keys(jukkenEntries);

export const syuumatuMagunaEntries = createEntries([
  ['永遠拒絶の大鎌', 'eien-kyozetu-no-oogama'],
  ['永遠拒絶の杖', 'eien-kyozetu-no-tue'],
  ['永遠拒絶の竪琴', 'eien-kyozetu-no-tategoto'],
  ['永遠拒絶の槍', 'eien-kyozetu-no-yari'],
  ['永遠拒絶の剣', 'eien-kyozetu-no-ken'],
  ['永遠拒絶の太刀', 'eien-kyozetu-no-tati']
]);
export const syuumatuMagunaNames = Object.keys(syuumatuMagunaEntries);

export const syuumatuKamiEntries = createEntries([
  ['絶対否定の大鎌', 'zettai-hitei-no-oogama'],
  ['絶対否定の杖', 'zettai-hitei-no-tue'],
  ['絶対否定の竪琴', 'zettai-hitei-no-tategoto'],
  ['絶対否定の槍', 'zettai-hitei-no-yari'],
  ['絶対否定の剣', 'zettai-hitei-no-ken'],
  ['絶対否定の太刀', 'zettai-hitei-no-tati']
]);
export const syuumatuKamiNames = Object.keys(syuumatuKamiEntries);

export const eiyuuOldClass4Entries = createEntries([
  ['ベルセルク・オクス', 'beruseruku-okusu'],
  ['スパルタン・サイフォス', 'suparutan-saifosu'],
  ['聖者の行進', 'seija-no-kousin'],
  ['デモンズシャフト', 'demonzu-syafuto'],
  ['浄瑠璃', 'joururi'],
  ['カオスクリエイター', 'kaosu-kurieita'],
  ['チャンピオンベルト', 'tyanpion-beruto'],
  ['メース', 'mesu'],
  ['シャンゼリゼ', 'syanzerize'],
  ['ヘルムヴィーゲ', 'herumuwige'],
  ['ヴァッサーシュパイアー', 'vasasyupaia']
]);
export const eiyuuOldClass4Names = Object.keys(eiyuuOldClass4Entries);

export const eiyuuEx2Entries = createEntries([
  ['マッドネスシリンジ', 'madonesu-sirinji'],
  ['無銘金重', 'mumeikanesige'],
  ['テトラストリーマ', 'tetorasutorima'],
  ['リディル', 'ridhiru'],
  ['ジョン・ドゥ', 'jon-dwu'],
  ['ルナティックブルーム', 'runathikku-burumu'],
  ['ガロット', 'garotto'],
  ['ヘルムホルツ', 'herumuhorutu'],
  ['ルドルフィーナ', 'rudorufina']
]);
export const eiyuuEx2Names = Object.keys(eiyuuEx2Entries);

export const eiyuuNewClass4Entries = createEntries([
  ['トール・テーラー', 'toru-tera'],
  ['リップヴァンウィンクル', 'rippuvan-winkuru'],
  ['ヴァンガード', 'vangado'],
  ['メジエール', 'mejieru'],
  ['修武の籠手', 'syuubu-no-kote'],
  ['金砕棒', 'kanasaibou'],
  ['シャーウッドの弓', 'syaudo-no-yumi'],
  ['プロトタイプ・リブート', 'purototaipu-ributo'],
  ['セレン', 'seren'],
  ['草薙之大刀', 'kusanagi-no-daitou'],
  ['コンバットサプレッション', 'konbato-sapuressyon']
]);
export const eiyuuNewClass4Names = Object.keys(eiyuuNewClass4Entries);

export const eiyuuClass5Entries = createEntries([
  ['ノルデン・ラブリュス', 'noruden-raburyusu'],
  ['ダイアデム・ムーリネ', 'daiademu-murine'],
  ['ロイヤル・ブリンガー', 'roiyaru-buringa']
]);
export const eiyuuClass5Names = Object.keys(eiyuuClass5Entries);
