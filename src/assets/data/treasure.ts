import createNames from 'src/helpers/createNames';
import createTreasureEntries from 'src/helpers/createTreasureEntries';

export type TreasureGroupName = keyof typeof treasureGroupNames;
const treasureGroupNames = createNames([
  //エクストラ
  'houju_low',
  'houju_hight',
  'syo',
  'maki',
  'jin',
  'ryuu_rin',
  'seisyou',
  'sekihen',

  //恒常
  'toumetu-anima',

  //マルチバトル
  'akasi_multi',
  'sinnaru_anima',
  'kagayaki',
  'pusyuke',
  'rare_multi',
  'multi_furagumento',

  //ボス
  'misura',
  'sima_anima',
  'sima_maguna_anima',
  'sima_treasure',
  'maguna2_maguna_anima',
  'maguna3_maguna_anima',
  'eniado_maguna_anima',
  'old_primary_anima',
  'old_primary_maguna_anima',
  'new_primary_anima',
  'rokuryuu_ryuuju',
  'rokuryuu_treasure',
  'rindvurumu',
  'rusifa_n',
  'rusifa_hl',
  'rusifa_zero',
  'tengen',
  'beruzebabu',
  'beriaru',
  'tenji_anima',
  'tenji_kourin',
  'ginpen',
  'gurande_hl',
  'bahamuto_hl',
  'aruthimetto_bahamuto',
  'supa_aruthimetto_bahamuto',
  'akasya',
  'revansu_treasure',
  'ouryuu_kokukirin',

  //エレメント
  'element_zokusei',
  'element_weapon',

  //財貨・貴重
  'point',
  'rare',

  //共闘
  'coop_syo',
  'akasi_job',
  'sinnen',
  'hokori',
  'coop_toumetu_treasure',
  'kakuriyo',
  'asutaroto',

  //アーカルム
  'sefira',
  'asutora',
  'idea',
  'verumu',
  'heizu',
  'akarumu_furagumento',

  //サンドボックス
  'buraito',
  'weritasu',
  'gosuperu',

  //交換で入手
  'sirokuro_tamasii',
  'souten_tamasii',
  'yuuisyatati-no-kyouji',
  'hekirei_akasi',
  'penduramu1',

  //英雄武器
  'class3_repurika',
  'class3_weapon',
  'class3_weapon_rebuild',
  'class3_weapon_element',
  'old_class4_weapon',
  'old_class4_weapon_element',
  'new_class4_weapon',
  'new_class4_weapon_element',
  'ex_weapon',
  'ex_repurika',
  'ex_weapon_rebuild',
  'ex_weapon_element',
  'ex2_weapon',
  'ex2_weapon_element',
  'eiyuu_enburemu',
  'class5_weapon',
  'class5_weapon_element',
  'class5_syo',

  //専用素材
  'tensei_no_kakera',
  'junzen_tamasii',
  'jutten_limit_treasure',
  'jukken_card',
  'za_wold_card',
  'ontyou',
  'ontyou_limit',

  //武器
  'isizue_weapon',
  'tenseiki',
  'tenseiki_sin',
  'tenseiki_element',
  'tenseiki_kakusei',
  'kutihateta',
  'yorisiro_element',
  'yorisiro_gin',
  'yorisiro_ougon',
  'setubi_kakujuu',

  //その他
  'world',
  'naru_gurande',
  'other',

  //ラベルとして使用
  'label',
  'jutten_last',
  'jutten_limit',
  'akarumu_summon_sr',
  'akarumu_summon_ssr',
  'jukken_join',
  'jukken_last',
  'syuumatu_maguna',
  'syuumatu_maguna_limit01',
  'syuumatu_maguna_limit',
  'syuumatu_kami',
  'syuumatu_kami_limit01',
  'syuumatu_kami_limit',
  'penduramu1_label',
  'penduramu2_label',
  'chein_label',
  'penduramu_limit_label'
]);

export type TreasureName = keyof typeof treasureEntries;
export const treasureEntries = createTreasureEntries([
  /*エクストラ *****************************************************/
  {
    //下位宝珠
    names: [
      ['炎の宝珠', 'honoo-no-houju'],
      ['水の宝珠', 'mizu-no-houju'],
      ['土の宝珠', 'tuti-no-houju'],
      ['風の宝珠', 'kaze-no-houju'],
      ['光の宝珠', 'hikari-no-houju'],
      ['闇の宝珠', 'yami-no-houju']
    ],
    group: 'houju_low',
    haveElement: true
  },
  {
    //上位宝珠
    names: [
      ['紅蓮の宝珠', 'guren-no-houju'],
      ['霧氷の宝珠', 'muhyou-no-houju'],
      ['大地の宝珠', 'daiti-no-houju'],
      ['裂空の宝珠', 'rekkuu-no-houju'],
      ['煌光の宝珠', 'koukou-no-houju'],
      ['奈落の宝珠', 'naraku-no-houju']
    ],
    group: 'houju_hight',
    haveElement: true
  },
  {
    //書
    names: [
      ['赤の書', 'aka-no-syo'],
      ['青の書', 'ao-no-syo'],
      ['橙の書', 'daidai-no-syo'],
      ['緑の書', 'midori-no-syo'],
      ['白の書', 'siro-no-syo'],
      ['黒の書', 'kuro-no-syo']
    ],
    group: 'syo',
    haveElement: true
  },
  {
    //巻
    names: [
      ['業火の巻', 'gouka-no-maki'],
      ['濁流の巻', 'dakuryuu-no-maki'],
      ['地裂の巻', 'jiretu-no-maki'],
      ['疾風の巻', 'sippuu-no-maki'],
      ['天光の巻', 'tenkou-no-maki'],
      ['深淵の巻', 'sinen-no-maki']
    ],
    group: 'maki',
    haveElement: true
  },
  {
    //ジーン
    names: [
      ['ファイヤー・ジーン', 'faiya-jin'],
      ['ウォーター・ジーン', 'whota-jin'],
      ['アース・ジーン', 'asu-jin'],
      ['ウィンド・ジーン', 'windo-jin'],
      ['ホーリー・ジーン', 'hori-jin'],
      ['ダーク・ジーン', 'daku-jin']
    ],
    group: 'jin',
    haveElement: true
  },
  {
    //竜鱗
    names: [
      ['赤竜鱗', 'sekiryuu-rin'],
      ['青竜鱗', 'seiryuu-rin'],
      ['地竜鱗', 'jiryuu-rin'],
      ['風竜鱗', 'fuuryuu-rin'],
      ['白竜鱗', 'hakuryuu-rin'],
      ['黒竜鱗', 'kokuryuu-rin']
    ],
    group: 'ryuu_rin',
    haveElement: true
  },
  {
    //星晶
    names: [
      ['星晶の破片', 'seisyou-no-hahen'],
      ['星晶の欠片', 'seisyou-no-kakera'],
      ['星晶塊', 'seisyoukai'],
      ['虹星晶', 'niji-seisyou']
    ],
    group: 'seisyou'
  },
  {
    names: [
      ['業火の石片', 'gouka-no-sekihen'],
      ['玉水の石片', 'gyokusui-no-sekihen'],
      ['荒土の石片', 'koudo-no-sekihen'],
      ['狂風の石片', 'kyoufuu-no-sekihen']
    ],
    group: 'sekihen',
    haveElement: true
  },
  /*討滅戦 *****************************************************/
  {
    names: [
      ['イフリートのアニマ', 'ifurito-no-anima'],
      ['コキュートスのアニマ', 'kokyutosu-no-anima'],
      ['ウォフマナフのアニマ', 'whofumanafu-no-anima'],
      ['サジタリウスのアニマ', 'sajitariusu-no-anima'],
      ['コロゥのアニマ', 'koroxu-no-anima'],
      ['ディアボロスのアニマ', 'dhiaborosu-no-anima']
    ],
    haveElement: true,
    group: 'toumetu-anima'
  },
  /*属性 *****************************************************/
  {
    //真なる属性のアニマ
    names: [
      ['真なる火のアニマ', 'sinnaru-hi-no-anima'],
      ['真なる水のアニマ', 'sinnaru-mizu-no-anima'],
      ['真なる土のアニマ', 'sinnaru-tuti-no-anima'],
      ['真なる風のアニマ', 'sinnaru-kaze-no-anima'],
      ['真なる光のアニマ', 'sinnaru-hikari-no-anima'],
      ['真なる闇のアニマ', 'sinnaru-yami-no-anima']
    ],
    group: 'sinnaru_anima',
    haveElement: true
  },
  {
    names: [
      ['赤星の輝き', 'akabosi-no-kagayaki'],
      ['青星の輝き', 'aobosi-no-kagayaki'],
      ['黄星の輝き', 'kibosi-no-kagayaki'],
      ['緑星の輝き', 'midoribosi-no-kagayaki'],
      ['白星の輝き', 'sirobosi-no-kagayaki'],
      ['黒星の輝き', 'kurobosi-no-kagayaki']
    ],
    haveElement: true,
    group: 'kagayaki'
  },
  {
    //プシュケー
    names: [
      ['火のプシュケー', 'hi-no-pusyuke'],
      ['水のプシュケー', 'mizu-no-pusyuke'],
      ['土のプシュケー', 'tuti-no-pusyuke'],
      ['風のプシュケー', 'kaze-no-pusyuke'],
      ['光のプシュケー', 'hikari-no-pusyuke'],
      ['闇のプシュケー', 'yami-no-pusyuke']
    ],
    group: 'pusyuke',
    haveElement: true
  },
  /*マルチバトル *****************************************************/
  {
    //証（マルチバトル）
    names: [
      ['栄光の証', 'eikou-no-akasi'],
      ['覇者の証', 'hasya-no-akasi'],
      ['究竟の証', 'kukyou-no-akasi']
    ],
    group: 'akasi_multi'
  },
  {
    names: [
      ['ジェネシス・フラグメント', 'jenesisu-furagumento'],
      ['マリス・フラグメント', 'marisu-furagumento'],
      ['イモータル・フラグメント', 'imotaru-furagumento']
    ],
    group: 'multi_furagumento'
  },
  {
    //レア（マルチバトル）
    names: [
      ['碧空の結晶', 'hekikuu-no-kessyou'],
      ['銀天の輝き', 'ginten-no-kagayaki']
    ],
    group: 'rare_multi'
  },
  /*ボス *****************************************************/
  {
    //島ボスのアニマ
    names: [
      ['コロッサスのアニマ', 'korossasu-no-anima'],
      ['リヴァイアサンのアニマ', 'rivaiasan-no-anima'],
      ['ユグドラシルのアニマ', 'yugudorasiru-no-anima'],
      ['ティアマトのアニマ', 'thiamato-no-anima'],
      ['シュヴァリエのアニマ', 'syuvarie-no-anima'],
      ['セレストのアニマ', 'seresuto-no-anima']
    ],
    group: 'sima_anima',
    haveElement: true
  },
  {
    //島ボスのマグナアニマ
    names: [
      ['コロッサスのマグナアニマ', 'korossasu-no-maguna-anima'],
      ['リヴァイアサンのマグナアニマ', 'rivaiasan-no-maguna-anima'],
      ['ユグドラシルのマグナアニマ', 'yugudorasiru-no-maguna-anima'],
      ['ティアマトのマグナアニマ', 'thiamato-no-maguna-anima'],
      ['シュヴァリエのマグナアニマ', 'syuvarie-no-maguna-anima'],
      ['セレストのマグナアニマ', 'seresuto-no-maguna-anima']
    ],
    group: 'sima_maguna_anima',
    haveElement: true
  },
  {
    //マグナ２のマグナアニマ
    names: [
      ['シヴァのマグナアニマ', 'siva-no-maguna-anima'],
      ['エウロペのマグナアニマ', 'europe-no-maguna-anima'],
      ['ブローディアのマグナアニマ', 'burodhia-no-maguna-anima'],
      ['グリームニルのマグナアニマ', 'gurimuniru-no-maguna-anima'],
      ['メタトロンのマグナアニマ', 'metatoron-no-maguna-anima'],
      ['アバターのマグナアニマ', 'abata-no-maguna-anima']
    ],
    group: 'maguna2_maguna_anima',
    haveElement: true
  },
  {
    //マグナ3のマグナアニマ
    names: [
      ['イラ・マグナアニマ', 'ira-maguna-anima'],
      ['マレ・マグナアニマ', 'mare-maguna-anima'],
      ['アルボス・マグナアニマ', 'arubosu-maguna-anima'],
      ['アウラ・マグナアニマ', 'aura-maguna-anima'],
      ['クレド・マグナアニマ', 'kuredo-maguna-anima'],
      ['アーテル・マグナアニマ', 'ateru-maguna-anima']
    ],
    group: 'maguna3_maguna_anima',
    haveElement: true
  },
  {
    //エニアドのマグナアニマ
    names: [
      ['アトゥムのマグナアニマ', 'atwumu-no-maguna-anima'],
      ['テフヌトのマグナアニマ', 'tefunuto-no-maguna-anima'],
      ['ベンヌのマグナアニマ', 'bennu-no-maguna-anima'],
      ['ラーのマグナアニマ', 'ra-no-maguna-anima'],
      ['ホルスのマグナアニマ', 'horusu-no-maguna-anima'],
      ['オシリスのマグナアニマ', 'osirisu-no-maguna-anima']
    ],
    group: 'eniado_maguna_anima',
    haveElement: true
  },
  {
    //オールドプライマルのアニマ
    names: [
      ['フラム=グラスのアニマ', 'furamu-gurasu-no-anima'],
      ['マキュラ・マリウスのアニマ', 'makyura-mariusu-no-anima'],
      ['メドゥーサのアニマ', 'medwusa-no-anima'],
      ['ナタクのアニマ', 'nataku-no-anima'],
      ['アポロンのアニマ', 'aporon-no-anima'],
      ['オリヴィエのアニマ', 'orivie-no-anima']
    ],
    group: 'old_primary_anima',
    haveElement: true
  },
  {
    //オールドプライマルのマグナアニマ
    names: [
      ['フラム=グラスのマグナアニマ', 'furamu-gurasu-no-maguna-anima'],
      ['マキュラ・マリウスのマグナアニマ', 'makyura-mariusu-no-maguna-anima'],
      ['メドゥーサのマグナアニマ', 'medwusa-no-maguna-anima'],
      ['ナタクのマグナアニマ', 'nataku-no-maguna-anima'],
      ['アポロンのマグナアニマ', 'aporon-no-maguna-anima'],
      ['オリヴィエのマグナアニマ', 'orivie-no-maguna-anima']
    ],
    group: 'old_primary_maguna_anima',
    haveElement: true
  },
  {
    //プライマルのアニマ
    names: [
      ['アテナのアニマ', 'atena-no-anima'],
      ['グラニのアニマ', 'gurani-no-anima'],
      ['バアルのアニマ', 'baaru-no-anima'],
      ['ガルーダのアニマ', 'garuda-no-anima'],
      ['オーディンのアニマ', 'odhin-no-anima'],
      ['リッチのアニマ', 'ritti-no-anima']
    ],
    group: 'new_primary_anima',
    haveElement: true
  },
  {
    //黄龍・黒麒麟のマグナアニマ
    names: [
      ['黄龍のマグナアニマ', 'ouryuu-no-maguna-anima'],
      ['黒麒麟のマグナアニマ', 'kokukirin-no-maguna-anima']
    ],
    group: 'ouryuu_kokukirin'
  },
  {
    //島ボストレジャー
    names: [
      ['プロミネンスリアクター', 'purominensu-riakuta'],
      ['海神の扇尾', 'kaisin-no-ougio'],
      ['創樹の花蕾', 'souju-no-karai'],
      ['嵐竜の琥珀眼', 'ranryuu-no-kohakugan'],
      ['プライマルビット', 'puraimaru-bitto'],
      ['黒霧の結晶', 'kokumu-no-kessyou']
    ],
    group: 'sima_treasure',
    haveElement: true
  },
  {
    //六竜の竜珠
    names: [
      ['ウィルナスの竜珠', 'whirunasu-no-ryuuju'],
      ['ワムデュスの竜珠', 'wamudhusu-no-ryuuju'],
      ['ガレヲンの竜珠', 'garewon-no-ryuuju'],
      ['イーウィヤの竜珠', 'iwhiya-no-ryuuju'],
      ['ル・オーの竜珠', 'ruo-no-ryuuju'],
      ['フェディエルの竜珠', 'fedhieru-no-ryuuju']
    ],
    group: 'rokuryuu_ryuuju',
    haveElement: true
  },
  {
    //六竜トレジャー
    names: [
      ['イグナイトラブル', 'igunaitoraburu'],
      ['アビサル・トラジェディー', 'abisaru-torajedhi'],
      ['インシュラーコア', 'insyurakoa'],
      ['ゲイルロック', 'geirurokku'],
      ['靂輪', 'rekirin'],
      ['トーデストリープ', 'todesutoripu']
    ],
    group: 'rokuryuu_treasure',
    haveElement: true
  },
  {
    //天司のアニマ
    names: [
      ['ミカエルのアニマ', 'mikaeru-no-anima'],
      ['ガブリエルのアニマ', 'gaburieru-no-anima'],
      ['ウリエルのアニマ', 'urieru-no-anima'],
      ['ラファエルのアニマ', 'rafaeru-no-anima']
    ],
    group: 'tenji_anima',
    haveElement: true
  },
  {
    //天司の光輪
    names: [
      ['火の光輪', 'hi-no-kourin'],
      ['水の光輪', 'mizu-no-kourin'],
      ['土の光輪', 'tuti-no-kourin'],
      ['風の光輪', 'kaze-no-kourin']
    ],
    group: 'tenji_kourin',
    haveElement: true
  },
  {
    //銀片
    names: [
      ['槍の銀片', 'yari-no-ginpen'],
      ['弓の銀片', 'yumi-no-ginpen'],
      ['斧の銀片', 'ono-no-ginpen'],
      ['刃の銀片', 'yaiba-no-ginpen'],
      ['杖の銀片', 'tue-no-ginpen'],
      ['手甲の銀片', 'tekkou-no-ginpen'],
      ['剣の銀片', 'ken-no-ginpen'],
      ['太刀の銀片', 'tati-no-ginpen'],
      ['竪琴の銀片', 'tategoto-no-ginpen'],
      ['銃の銀片', 'juu-no-ginpen']
    ],
    group: 'ginpen'
  },
  {
    //プロトバハムートHL
    names: [['バハムートの紫電角', 'bahamuto-no-sidenkaku']],
    group: 'bahamuto_hl'
  },
  {
    //アルティメットバハムートHL
    names: [['オメガユニット', 'omega-yunitto']],
    group: 'aruthimetto_bahamuto'
  },
  {
    //スパバハ
    names: [['アルテマメモリ', 'arutema-memori']],
    group: 'supa_aruthimetto_bahamuto'
  },
  {
    //グランデHL
    names: [['蒼翠の結晶', 'sousui-no-kessyou']],
    group: 'gurande_hl'
  },
  {
    //アーカーシャ
    names: [['虚ろなる鍵', 'uturonaru-kagi']],
    group: 'akasya'
  },
  {
    //リンドヴルムHL
    names: [['真龍の金鱗', 'sinryuu-no-kinrin']],
    group: 'rindvurumu'
  },
  {
    //ルシファーN
    names: [['ダークネス・マテリアル', 'dakunesu-materiaru']],
    group: 'rusifa_n'
  },
  {
    //ルシファーHL
    names: [['終末の暗晶', 'syuumatu-no-ansyou']],
    group: 'rusifa_hl'
  },
  {
    //ルシファー・ゼロ
    names: [['終末を齎す黒羽', 'syuumatu-wo-motarasu-kurobane']],
    group: 'rusifa_zero'
  },
  {
    //天元
    names: [['極理の結晶', 'kyokuri-no-kessyou']],
    group: 'tengen'
  },
  {
    //ベルゼバブHL
    names: [['漆黒の棘翅', 'sikkoku-no-togehane']],
    group: 'beruzebabu'
  },
  {
    //ベリアルHL
    names: [['狡知の魔角', 'kouti-no-makaku']],
    group: 'beriaru'
  },
  {
    //レヴァンス
    names: [
      ['滅尽の残気', 'metujin-no-zanki'],
      ['機神の基盤', 'kisin-no-kiban'],
      ['滅竜の赫刃', 'meturyuu-no-kakujin'],
      ['星海の刃屑', 'seikai-no-jinsetu'],
      ['調停の烈布', 'tyoutei-no-reppu'],
      ['壊祖の紋装甲', 'kaiso-no-monsoukou']
    ],
    haveElement: true,
    group: 'revansu_treasure'
  },
  /*エレメント *****************************************************/
  {
    //属性のエレメント
    names: [
      ['火晶のエレメント', 'kasyou-no-eremento'],
      ['水晶のエレメント', 'suisyou-no-eremento'],
      ['土晶のエレメント', 'dosyou-no-eremento'],
      ['風晶のエレメント', 'huusyou-no-eremento'],
      ['光晶のエレメント', 'kousyou-no-eremento'],
      ['闇晶のエレメント', 'ansyou-no-eremento']
    ],
    group: 'element_zokusei',
    haveElement: true
  },
  {
    //武器のエレメント
    names: [
      ['槍のエレメント', 'yari-no-eremento'],
      ['弓のエレメント', 'yumi-no-eremento'],
      ['斧のエレメント', 'ono-no-eremento'],
      ['短剣のエレメント', 'tanken-no-eremento'],
      ['杖のエレメント', 'tue-no-eremento'],
      ['格闘のエレメント', 'kakutou-no-eremento'],
      ['剣のエレメント', 'ken-no-eremento'],
      ['刀のエレメント', 'katana-no-eremento'],
      ['楽器のエレメント', 'gakki-no-eremento'],
      ['銃のエレメント', 'juu-no-eremento']
    ],
    group: 'element_weapon'
  },
  /*共闘 *****************************************************/
  {
    //ジョブの証
    names: [
      //旧Class4
      ['剣闘士の証', 'kentousi-no-akasi'],
      ['守護騎士の証', 'syugokisi-no-akasi'],
      ['聖職者の証', 'seisyokusya-no-akasi'],
      ['魔導士の証', 'madousi-no-akasi'],
      ['盗賊の証', 'touzoku-no-akasi'],
      ['魔剣士の証', 'makensi-no-akasi'],
      ['格闘士の証', 'kakutousi-no-akasi'],
      ['射手の証', 'syasyu-no-akasi'],
      ['吟遊詩人の証', 'ginyuusijin-no-akasi'],
      ['槍騎兵の証', 'soukihei-no-akasi'],
      ['双剣士の証', 'soukensi-no-akasi'],
      //EX
      ['錬金術師の証', 'renkinjutusi-no-akasi'],
      ['侍の証', 'samurai-no-akasi'],
      ['忍の証', 'sinobi-no-akasi'],
      ['剣聖の証', 'kensei-no-akasi'],
      ['撃手の証', 'gekisyu-no-akasi'],
      ['賢者の証', 'kenja-no-akasi'],
      ['暗殺者の証', 'ansatusya-no-akasi'],
      ['楽師の証', 'gakusi-no-akasi'],
      ['踊師の証', 'odorisi-no-akasi'],
      //新Class4
      ['森人の証', 'moribito-no-akasi'],
      ['重竜騎兵の証', 'juuryuukihei-no-akasi'],
      ['僧兵の証', 'souhei-no-akasi'],
      ['義弓の証', 'gikyuu-no-akasi'],
      ['契約者の証', 'keiyakusya-no-akasi'],
      ['尊命の証', 'sonmei-no-akasi'],
      ['盾騎士の証', 'tatekisi-no-akasi'],
      //class5
      ['豪傑の証', 'gouketu-no-akasi'],
      ['聖騎士の証', 'seikisi-no-akasi'],
      ['大立者の証', 'tairitusya-no-akasi']
    ],
    group: 'akasi_job'
  },
  {
    names: [
      ['戦士の信念', 'sensi-no-sinnen'],
      ['魔導士の信念', 'madousi-no-sinnen']
    ],
    group: 'sinnen'
  },
  {
    names: [
      ['騎士の誇り', 'kisi-no-hokori'],
      ['賢者の誇り', 'kenja-no-hokori']
    ],
    group: 'hokori'
  },
  {
    //共闘の書
    names: [
      ['灼熱の書', 'syakunetu-no-syo'],
      ['水分の書', 'suibun-no-syo'],
      ['巨人の書', 'kyojin-no-syo'],
      ['風凪の書', 'kazenagi-no-syo']
    ],
    group: 'coop_syo',
    haveElement: true
  },
  {
    names: [
      ['灼滅の焔角', 'syakumetu-no-enkaku'],
      ['氷獄の結晶', 'hyougoku-no-kessyou'],
      ['裁考の水晶', 'saikou-no-suisyou'],
      ['人馬の円盤', 'jinba-no-enban'],
      ['妃光の水晶', 'kikou-no-suisyou'],
      ['幻魔の破片', 'genma-no-hahen']
    ],
    group: 'coop_toumetu_treasure',
    haveElement: true
  },
  {
    names: [['幽世の黒紫刃', 'kakuriyo-no-kokusijin']],
    group: 'kakuriyo'
  },
  {
    names: [['アスタロトのアニマ', 'asutaroto-no-anima']],
    group: 'asutaroto'
  },
  /*交換 *****************************************************/
  {
    //白黒の魂
    names: [
      ['白き魂', 'siroki-tamasii'],
      ['黒き魂', 'kuroki-tamasii']
    ],
    group: 'sirokuro_tamasii'
  },
  {
    //ペンデュラム
    names: [
      ['アルファ・ペンデュラム', 'arufa-pendhuramu'],
      ['ベータ・ペンデュラム', 'beta-pendhuramu'],
      ['ガンマ・ペンデュラム', 'ganma-pendhuramu'],
      ['デルタ・ペンデュラム', 'deruta-pendhuramu']
    ],
    group: 'penduramu1'
  },
  /*アーカルム *****************************************************/
  {
    names: [['セフィラストーン', 'sefira-suton']],
    group: 'sefira'
  },
  {
    names: [
      ['ヴェルム文書・火', 'verumubunsyo-hi'],
      ['ヴェルム文書・水', 'verumubunsyo-mizu'],
      ['ヴェルム文書・土', 'verumubunsyo-tuti'],
      ['ヴェルム文書・風', 'verumubunsyo-kaze']
    ],
    group: 'verumu',
    haveElement: true
  },
  {
    names: [
      ['アクイラ・フラグメント', 'akuira-furagumento'],
      ['ベラトール・フラグメント', 'beratoru-furagumento'],
      ['ケルサス・フラグメント', 'kerusasu-furagumento']
    ],
    group: 'akarumu_furagumento'
  },
  {
    names: [
      ['オーロラ・ヘイズ', 'orora-heizu'],
      ['カオティック・ヘイズ', 'kaothikku-heizu']
    ],
    group: 'heizu'
  },
  {
    names: [
      ['火精のアストラ', 'kasei-no-asutora'],
      ['水精のアストラ', 'suisei-no-asutora'],
      ['土精のアストラ', 'dosei-no-asutora'],
      ['風精のアストラ', 'huusei-no-asutora'],
      ['光精のアストラ', 'kousei-no-asutora'],
      ['闇精のアストラ', 'ansei-no-asutora']
    ],
    group: 'asutora',
    haveElement: true
  },
  {
    names: [
      ['正義のイデア', 'seigi-no-idea'],
      ['刑死者のイデア', 'keisisya-no-idea'],
      ['死神のイデア', 'sinigami-no-idea'],
      ['節制のイデア', 'sessei-no-idea'],
      ['悪魔のイデア', 'akuma-no-idea'],
      ['塔のイデア', 'tou-no-idea'],
      ['星のイデア', 'hosi-no-idea'],
      ['月のイデア', 'tuki-no-idea'],
      ['太陽のイデア', 'taiyou-no-idea'],
      ['審判のイデア', 'sinpan-no-idea']
    ],
    group: 'idea'
  },
  /*サンドボックス *****************************************************/
  {
    //ブライト
    names: [
      ['イグニス・ブライト', 'igunisu-buraito'],
      ['アクア・ブライト', 'akua-buraito'],
      ['テラ・ブライト', 'tera-buraito'],
      ['ウェントス・ブライト', 'whentosu-buraito']
    ],
    group: 'buraito',
    haveElement: true
  },
  {
    names: [
      ['正義のウェリタス', 'seigi-no-weritasu'],
      ['刑死者のウェリタス', 'keisisya-no-weritasu'],
      ['死神のウェリタス', 'sinigami-no-weritasu'],
      ['節制のウェリタス', 'sessei-no-weritasu'],
      ['悪魔のウェリタス', 'akuma-no-weritasu'],
      ['塔のウェリタス', 'tou-no-weritasu'],
      ['星のウェリタス', 'hosi-no-weritasu'],
      ['月のウェリタス', 'tuki-no-weritasu'],
      ['太陽のウェリタス', 'taiyou-no-weritasu'],
      ['審判のウェリタス', 'sinpan-no-weritasu']
    ],
    group: 'weritasu'
  },
  {
    names: [
      ['エゲイラ・ゴスペル', 'egeira-gosuperu'],
      ['アナリプシア・ゴスペル', 'anaripusia-gosuperu'],
      ['テュシア・ゴスペル', 'thusia-gosuperu'],
      ['ゲネア・ゴスペル', 'genea-gosuperu']
    ],
    group: 'gosuperu',
    haveElement: true
  },
  /*ワールド *****************************************************/
  {
    //ワールドトレジャー
    names: [
      ['柔らかい羽', 'yawarakai-hane'],
      ['風伯の羽', 'fuuhaku-no-hane'],
      ['風切四つ葉', 'kazekiri-yotuba'],

      ['清らかな水', 'kiyorakana-mizu'],
      ['癒しの水', 'iyasi-no-mizu'],
      ['群青珊瑚', 'gunjou-sango'],

      ['原初の砂', 'gensyo-no-suna'],
      ['赤熱鉱', 'sekinetukou'],
      ['綺麗な砂', 'kirei-na-suna'],

      ['固い土', 'kataituti'],
      ['渦琥珀', 'uzukohaku'],
      ['真理の土', 'sinri-no-tuti'],

      ['紅黄石', 'beniouseki'],
      ['鷹の羽', 'taka-no-hane'],
      ['厳峰の清水', 'genhou-no-seisui'],

      ['虚ろなる魄', 'uturonaru-tamasii'],
      ['ラクリモサ', 'rakurimosa'],
      ['粘っこい茸', 'nebakkoi-kinoko'],

      ['オルディネシュタイン', 'orudhine-syutain'],
      ['予見の双葉', 'yoken-no-futaba'],
      ['青い果実', 'aoikajitu'],

      ['古代布', 'kodainuno'],
      ['古代樹の葉', 'kodaiju-no-ha'],
      ['砂レンガ', 'sunarenga']
    ],
    group: 'world'
  },
  {
    names: [
      ['トキシックフラワー', 'tokisikku-furawa'],
      ['ベスティエフルーツ', 'besuthie-furutu'],
      ['巨獣骨', 'kyojuukotu'],
      ['クルーガーハーブ', 'kuruga-habu'],
      ['レム・ペッパー', 'remu-peppa'],
      ['割れたティーカップ', 'wareta-thikapu'],
      ['錆び付いた掛瓦', 'sabituita-kakegawara'],
      ['透き通るような絹', 'sukitooruyouna-kinu'],
      ['修行者の覚書', 'syugyousya-no-oboegaki'],
      ['埃まみれの書物', 'hokorimamire-no-syomotu']
    ],
    group: 'naru_gurande'
  },
  {
    //ミスラ
    names: [['ミスラのアニマ', 'misura-no-anima']],
    group: 'misura'
  },
  /*その他 *****************************************************/
  {
    //ポイント
    names: [
      ['ルピ', 'rupi'],
      ['JP', 'jp'],
      ['武勲の輝き', 'bukun-no-kagayaki']
    ],
    group: 'point'
  },
  {
    //貴重
    names: [
      ['勲章', 'kunsyou'],
      ['ダマスカス骸晶', 'damasukasu-gaisyou'],
      ['セフィラ玉髄', 'sefira-gyokuzui'],
      ['ヒヒイロカネ', 'hihiirokane'],
      ['宝晶石', 'housyouseki'],
      ['金剛晶', 'kongousyou'],
      ['ニューワールド・クォーツ', 'nyu-warudo-kuxotu'],
      ['刻の流砂', 'toki-no-ryuusa'],
      ['テラアダマント', 'tera-adamanto']
    ],
    group: 'rare'
  },
  {
    names: [['玉鋼', 'gyokukou']],
    group: 'other'
  },
  /*ラベルとして使用 *****************************************************/
  {
    //ラベル
    names: [['設備拡充', 'syero-setubi']],
    group: 'label'
  },
  {
    names: [
      ['ジャスティス｜SR', 'jasuthisu-sr'],
      ['ザ・ハングドマン｜SR', 'za-hangudoman-sr'],
      ['デス｜SR', 'desu-sr'],
      ['テンペランス｜SR', 'tenperansu-sr'],
      ['ザ・デビル｜SR', 'za-debiru-sr'],
      ['ザ・タワー｜SR', 'za-tawa-sr'],
      ['ザ・スター｜SR', 'za-suta-sr'],
      ['ザ・ムーン｜SR', 'za-mun-sr'],
      ['ザ・サン｜SR', 'za-san-sr'],
      ['ジャッジメント｜SR', 'jajjimento-sr']
    ],
    group: 'akarumu_summon_sr'
  },
  {
    names: [
      ['ジャスティス｜SSR', 'jasuthisu-ssr'],
      ['ザ・ハングドマン｜SSR', 'za-hangudoman-ssr'],
      ['デス｜SSR', 'desu-ssr'],
      ['テンペランス｜SSR', 'tenperansu-ssr'],
      ['ザ・デビル｜SSR', 'za-debiru-ssr'],
      ['ザ・タワー｜SSR', 'za-tawa-ssr'],
      ['ザ・スター｜SSR', 'za-suta-ssr'],
      ['ザ・ムーン｜SSR', 'za-mun-ssr'],
      ['ザ・サン｜SSR', 'za-san-ssr'],
      ['ジャッジメント｜SSR', 'jajjimento-ssr']
    ],
    group: 'akarumu_summon_ssr'
  },
  {
    names: [
      ['マリア・テレサ｜加入', 'mariateresa-join'],
      ['カイム｜加入', 'kaimu-join'],
      ['ニーア｜加入', 'nia-join'],
      ['エスタリオラ｜加入', 'esutariora-join'],
      ['フラウ｜加入', 'furau-join'],
      ['ロベリア｜加入', 'roberia-join'],
      ['ガイゼンボーガ｜加入', 'gaizenboga-join'],
      ['ハーゼリーラ｜加入', 'hazerira-join'],
      ['アラナン｜加入', 'aranan-join'],
      ['カッツェリーラ｜加入', 'kattserira-join']
    ],
    group: 'jukken_join'
  },
  {
    names: [
      ['マリア・テレサ｜最終', 'mariateresa-last'],
      ['カイム｜最終', 'kaimu-last'],
      ['ニーア｜最終', 'nia-last'],
      ['エスタリオラ｜最終', 'esutariora-last'],
      ['フラウ｜最終', 'furau-last'],
      ['ロベリア｜最終', 'roberia-last'],
      ['ガイゼンボーガ｜最終', 'gaizenboga-last'],
      ['ハーゼリーラ｜最終', 'hazerira-last'],
      ['アラナン｜最終', 'aranan-last'],
      ['カッツェリーラ｜最終', 'kattserira-last']
    ],
    group: 'jukken_last'
  },
  {
    //十天衆（最終）
    names: [
      ['ウーノ｜最終', 'uno-last'],
      ['ソーン｜最終', 'son-last'],
      ['サラーサ｜最終', 'sarasa-last'],
      ['カトル｜最終', 'katoru-last'],
      ['フュンフ｜最終', 'fyunfu-last'],
      ['シス｜最終', 'sisu-last'],
      ['シエテ｜最終', 'siete-last'],
      ['オクトー｜最終', 'okuto-last'],
      ['ニオ｜最終', 'nio-last'],
      ['エッセル｜最終', 'esseru-last']
    ],
    group: 'jutten_last'
  },
  {
    //十天衆（超越）
    names: [
      ['ウーノ｜超越', 'uno-limit'],
      ['ソーン｜超越', 'son-limit'],
      ['サラーサ｜超越', 'sarasa-limit'],
      ['カトル｜超越', 'katoru-limit'],
      ['フュンフ｜超越', 'fyunfu-limit'],
      ['シス｜超越', 'sisu-limit'],
      ['シエテ｜超越', 'siete-limit'],
      ['オクトー｜超越', 'okuto-limit'],
      ['ニオ｜超越', 'nio-limit'],
      ['エッセル｜超越', 'esseru-limit']
    ],
    group: 'jutten_limit'
  },
  {
    names: [
      ['永遠拒絶の大鎌', 'eien-kyozetu-no-oogama'],
      ['永遠拒絶の杖', 'eien-kyozetu-no-tue'],
      ['永遠拒絶の竪琴', 'eien-kyozetu-no-tategoto'],
      ['永遠拒絶の槍', 'eien-kyozetu-no-yari'],
      ['永遠拒絶の剣', 'eien-kyozetu-no-ken'],
      ['永遠拒絶の太刀', 'eien-kyozetu-no-tati']
    ],
    group: 'syuumatu_maguna'
  },
  {
    names: [
      ['永遠拒絶の大鎌｜超越', 'eien-kyozetu-no-oogama-limit01'],
      ['永遠拒絶の杖｜超越', 'eien-kyozetu-no-tue-limit01'],
      ['永遠拒絶の竪琴｜超越', 'eien-kyozetu-no-tategoto-limit01'],
      ['永遠拒絶の槍｜超越', 'eien-kyozetu-no-yari-limit01'],
      ['永遠拒絶の剣｜超越', 'eien-kyozetu-no-ken-limit01'],
      ['永遠拒絶の太刀｜超越', 'eien-kyozetu-no-tati-limit01']
    ],
    group: 'syuumatu_maguna_limit01'
  },
  {
    names: [
      ['永遠拒絶の大鎌｜超越', 'eien-kyozetu-no-oogama-limit'],
      ['永遠拒絶の杖｜超越', 'eien-kyozetu-no-tue-limit'],
      ['永遠拒絶の竪琴｜超越', 'eien-kyozetu-no-tategoto-limit'],
      ['永遠拒絶の槍｜超越', 'eien-kyozetu-no-yari-limit'],
      ['永遠拒絶の剣｜超越', 'eien-kyozetu-no-ken-limit'],
      ['永遠拒絶の太刀｜超越', 'eien-kyozetu-no-tati-limit']
    ],
    group: 'syuumatu_maguna_limit'
  },
  {
    names: [
      ['絶対否定の大鎌', 'zettai-hitei-no-oogama'],
      ['絶対否定のの杖', 'zettai-hitei-no-tue'],
      ['絶対否定の竪琴', 'zettai-hitei-no-tategoto'],
      ['絶対否定のの槍', 'zettai-hitei-no-yari'],
      ['絶対否定のの剣', 'zettai-hitei-no-ken'],
      ['絶対否定の太刀', 'zettai-hitei-no-tati']
    ],
    group: 'syuumatu_kami'
  },
  {
    names: [
      ['絶対否定の大鎌｜超越', 'zettai-hitei-no-oogama-limit01'],
      ['絶対否定のの杖｜超越', 'zettai-hitei-no-tue-limit01'],
      ['絶対否定の竪琴｜超越', 'zettai-hitei-no-tategoto-limit01'],
      ['絶対否定のの槍｜超越', 'zettai-hitei-no-yari-limit01'],
      ['絶対否定のの剣｜超越', 'zettai-hitei-no-ken-limit01'],
      ['絶対否定の太刀｜超越', 'zettai-hitei-no-tati-limit01']
    ],
    group: 'syuumatu_kami_limit01'
  },
  {
    names: [
      ['絶対否定の大鎌｜超越', 'zettai-hitei-no-oogama-limit'],
      ['絶対否定のの杖｜超越', 'zettai-hitei-no-tue-limit'],
      ['絶対否定の竪琴｜超越', 'zettai-hitei-no-tategoto-limit'],
      ['絶対否定のの槍｜超越', 'zettai-hitei-no-yari-limit'],
      ['絶対否定のの剣｜超越', 'zettai-hitei-no-ken-limit'],
      ['絶対否定の太刀｜超越', 'zettai-hitei-no-tati-limit']
    ],
    group: 'syuumatu_kami_limit'
  },
  {
    names: [['ペンデュラム（第2スキル）', 'pendhuramu1']],
    group: 'penduramu1_label'
  },
  {
    names: [['ペンデュラム（第3スキル）', 'pendhuramu2']],
    group: 'penduramu2_label'
  },
  {
    names: [['チェイン', 'chein']],
    group: 'chein_label'
  },
  {
    names: [['ペンデュラム（限界超越）', 'pendhuramu-limit']],
    group: 'penduramu_limit_label'
  },
  /*英雄武器 *****************************************************/
  //レプリカ
  {
    names: [
      ['アベンジャー・レプリカ', 'avenja-repurika'],
      ['スコフニュング・レプリカ', 'sukofunyungu-repurika'],
      ['ニルヴァーナ・レプリカ', 'niruvana-repurika'],
      ['ケラウノス・レプリカ', 'keraunosu-repurika'],
      ['オリバー・レプリカ', 'oriba-repurika'],
      ['イペタム・レプリカ', 'ipetamu-repurika'],
      ['鬼神の籠手・レプリカ', 'kisin-no-kote-repurika'],
      ['ローゼンボーゲン・レプリカ', 'rozenbogen-repurika'],
      ['ランゲレイク・レプリカ', 'rangereiku-repurika'],
      ['ロムルス・レプリカ', 'romurusu-repurika'],
      ['プロキシモ・レプリカ', 'purokisimo-repurika']
    ],
    group: 'class3_repurika'
  },
  {
    names: [
      ['ファウスト・レプリカ', 'fausuto-repurika'],
      ['模造刀・レプリカ', 'mozoutou-repurika'],
      ['贋作刀・レプリカ', 'gansakutou-repurika'],
      ['アシュケロン・レプリカ', 'asyukeron-repurika'],
      ['ネブカドネザル・レプリカ', 'nebukadonezaru-repurika'],
      ['カピラヴァストゥ・レプリカ', 'kapiravasutwu-repurika'],
      ['ミセリコルデ・レプリカ', 'miserikorude-repurika'],
      ['見本太鼓・レプリカ', 'mihontaiko-repurika'],
      ['アラベスク・レプリカ', 'arabesuku-repurika']
    ],
    group: 'ex_repurika'
  },
  //class3
  {
    names: [
      ['アベンジャー', 'avenja'],
      ['スコフニュング', 'sukofunyungu'],
      ['ニルヴァーナ', 'niruvana'],
      ['ケラウノス', 'keraunosu'],
      ['オリバー', 'oriba'],
      ['イペタム', 'ipetamu'],
      ['鬼神の籠手', 'kisin-no-kote'],
      ['ローゼンボーゲン', 'rozenbogen'],
      ['ランゲレイク', 'rangereiku'],
      ['ロムルスの槍', 'romurusu-no-yari'],
      ['プロキシモ', 'purokisimo']
    ],
    group: 'class3_weapon'
  },
  {
    names: [
      ['アベンジャー・リビルド', 'avenja-ribirudo'],
      ['スコフニュング・リビルド', 'sukofunyungu-ribirudo'],
      ['ニルヴァーナ・リビルド', 'niruvana-ribirudo'],
      ['ケラウノス・リビルド', 'keraunosu-ribirudo'],
      ['オリバー・リビルド', 'oriba-ribirudo'],
      ['イペタム・リビルド', 'ipetamu-ribirudo'],
      ['鬼神の籠手・再誕', 'kisin-no-kote-saitan'],
      ['ローゼンボーゲン・リビルド', 'rozenbogen-ribirudo'],
      ['ランゲレイク・リビルド', 'rangereiku-ribirudo'],
      ['ロムルスの槍・リビルド', 'romurusu-no-yari-ribirudo'],
      ['プロキシモ・リビルド', 'purokisimo-ribirudo']
    ],
    group: 'class3_weapon_rebuild'
  },
  {
    names: [
      ['アベンジャー・ウヌ', 'avenja-unu'],
      ['スコフニュング・ウヌ', 'sukofunyungu-unu'],
      ['ニルヴァーナ・ウヌ', 'niruvana-unu'],
      ['ケラウノス・ウヌ', 'keraunosu-unu'],
      ['オリバー・ウヌ', 'oriba-unu'],
      ['イペタム・ウヌ', 'ipetamu-unu'],
      ['鬼神の籠手・猩々', 'kisin-no-kote-syoujou'],
      ['ローゼンボーゲン・ウヌ', 'rozenbogen-unu'],
      ['ランゲレイク・ウヌ', 'rangereiku-unu'],
      ['ロムルスの槍・ウヌ', 'romurusu-no-yari-unu'],
      ['プロキシモ・ウヌ', 'purokisimo-unu']
    ],
    staticElement: 'fire',
    group: 'class3_weapon_element'
  },
  {
    names: [
      ['アベンジャー・ドゥ', 'avenja-dwu'],
      ['スコフニュング・ドゥ', 'sukofunyungu-dwu'],
      ['ニルヴァーナ・ドゥ', 'niruvana-dwu'],
      ['ケラウノス・ドゥ', 'keraunosu-dwu'],
      ['オリバー・ドゥ', 'oriba-dwu'],
      ['イペタム・ドゥ', 'ipetamu-dwu'],
      ['鬼神の籠手・露草', 'kisin-no-kote-tuyukusa'],
      ['ローゼンボーゲン・ドゥ', 'rozenbogen-dwu'],
      ['ランゲレイク・ドゥ', 'rangereiku-dwu'],
      ['ロムルスの槍・ドゥ', 'romurusu-no-yari-dwu'],
      ['プロキシモ・ドゥ', 'purokisimo-dwu']
    ],
    staticElement: 'water',
    group: 'class3_weapon_element'
  },
  {
    names: [
      ['アベンジャー・トリ', 'avenja-tori'],
      ['スコフニュング・トリ', 'sukofunyungu-tori'],
      ['ニルヴァーナ・トリ', 'niruvana-tori'],
      ['ケラウノス・トリ', 'keraunosu-tori'],
      ['オリバー・トリ', 'oriba-tori'],
      ['イペタム・トリ', 'ipetamu-tori'],
      ['鬼神の籠手・落葉', 'kisin-no-kote-rakuyou'],
      ['ローゼンボーゲン・トリ', 'rozenbogen-tori'],
      ['ランゲレイク・トリ', 'rangereiku-tori'],
      ['ロムルスの槍・トリ', 'romurusu-no-yari-tori'],
      ['プロキシモ・トリ', 'purokisimo-tori']
    ],
    staticElement: 'earth',
    group: 'class3_weapon_element'
  },
  {
    names: [
      ['アベンジャー・クヴァール', 'avenja-kuvaru'],
      ['スコフニュング・クヴァール', 'sukofunyungu-kuvaru'],
      ['ニルヴァーナ・クヴァール', 'niruvana-kuvaru'],
      ['ケラウノス・クヴァール', 'keraunosu-kuvaru'],
      ['オリバー・クヴァール', 'oriba-kuvaru'],
      ['イペタム・クヴァール', 'ipetamu-kuvaru'],
      ['鬼神の籠手・琅玕', 'kisin-no-kote-roukan'],
      ['ローゼンボーゲン・クヴァール', 'rozenbogen-kuvaru'],
      ['ランゲレイク・クヴァール', 'rangereiku-kuvaru'],
      ['ロムルスの槍・クヴァール', 'romurusu-no-yari-kuvaru'],
      ['プロキシモ・クヴァール', 'purokisimo-kuvaru']
    ],
    staticElement: 'wind',
    group: 'class3_weapon_element'
  },
  {
    names: [
      ['アベンジャー・クヴィン', 'avenja-kuvin'],
      ['スコフニュング・クヴィン', 'sukofunyungu-kuvin'],
      ['ニルヴァーナ・クヴィン', 'niruvana-kuvin'],
      ['ケラウノス・クヴィン', 'keraunosu-kuvin'],
      ['オリバー・クヴィン', 'oriba-kuvin'],
      ['イペタム・クヴィン', 'ipetamu-kuvin'],
      ['鬼神の籠手・月白', 'kisin-no-kote-geppaku'],
      ['ローゼンボーゲン・クヴィン', 'rozenbogen-kuvin'],
      ['ランゲレイク・クヴィン', 'rangereiku-kuvin'],
      ['ロムルスの槍・クヴィン', 'romurusu-no-yari-kuvin'],
      ['プロキシモ・クヴィン', 'purokisimo-kuvin']
    ],
    staticElement: 'light',
    group: 'class3_weapon_element'
  },
  {
    names: [
      ['アベンジャー・セス', 'avenja-sesu'],
      ['スコフニュング・セス', 'sukofunyungu-sesu'],
      ['ニルヴァーナ・セス', 'niruvana-sesu'],
      ['ケラウノス・セス', 'keraunosu-sesu'],
      ['オリバー・セス', 'oriba-sesu'],
      ['イペタム・セス', 'ipetamu-sesu'],
      ['鬼神の籠手・漆黒', 'kisin-no-kote-sikkoku'],
      ['ローゼンボーゲン・セス', 'rozenbogen-sesu'],
      ['ランゲレイク・セス', 'rangereiku-sesu'],
      ['ロムルスの槍・セス', 'romurusu-no-yari-sesu'],
      ['プロキシモ・セス', 'purokisimo-sesu']
    ],
    staticElement: 'dark',
    group: 'class3_weapon_element'
  },
  //old_class4
  {
    names: [
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
    ],
    group: 'old_class4_weapon'
  },
  {
    names: [
      ['ベルセルク・オクス', 'beruseruku-okusu-fire'],
      ['スパルタン・サイフォス', 'suparutan-saifosu-fire'],
      ['聖者の行進', 'seija-no-kousin-fire'],
      ['デモンズシャフト', 'demonzu-syafuto-fire'],
      ['浄瑠璃', 'joururi-fire'],
      ['カオスクリエイター', 'kaosu-kurieita-fire'],
      ['チャンピオンベルト', 'tyanpion-beruto-fire'],
      ['メース', 'mesu-fire'],
      ['シャンゼリゼ', 'syanzerize-fire'],
      ['ヘルムヴィーゲ', 'herumuwige-fire'],
      ['ヴァッサーシュパイアー', 'vasasyupaia-fire']
    ],
    staticElement: 'fire',
    group: 'old_class4_weapon_element'
  },
  {
    names: [
      ['ベルセルク・オクス', 'beruseruku-okusu-water'],
      ['スパルタン・サイフォス', 'suparutan-saifosu-water'],
      ['聖者の行進', 'seija-no-kousin-water'],
      ['デモンズシャフト', 'demonzu-syafuto-water'],
      ['浄瑠璃', 'joururi-water'],
      ['カオスクリエイター', 'eaosu-kurieita-water'],
      ['チャンピオンベルト', 'tyanpion-beruto-water'],
      ['メース', 'mesu-water'],
      ['シャンゼリゼ', 'eyanzerize-water'],
      ['ヘルムヴィーゲ', 'herumuwige-water'],
      ['ヴァッサーシュパイアー', 'vasasyupaia-water']
    ],
    staticElement: 'water',
    group: 'old_class4_weapon_element'
  },
  {
    names: [
      ['ベルセルク・オクス', 'beruseruku-okusu-earth'],
      ['スパルタン・サイフォス', 'suparutan-saifosu-earth'],
      ['聖者の行進', 'seija-no-kousin-earth'],
      ['デモンズシャフト', 'demonzu-syafuto-earth'],
      ['浄瑠璃', 'joururi-earth'],
      ['カオスクリエイター', 'eaosu-kurieita-earth'],
      ['チャンピオンベルト', 'tyanpion-beruto-earth'],
      ['メース', 'mesu-earth'],
      ['シャンゼリゼ', 'eyanzerize-earth'],
      ['ヘルムヴィーゲ', 'herumuwige-earth'],
      ['ヴァッサーシュパイアー', 'vasasyupaia-earth']
    ],
    staticElement: 'earth',
    group: 'old_class4_weapon_element'
  },
  {
    names: [
      ['ベルセルク・オクス', 'beruseruku-okusu-wind'],
      ['スパルタン・サイフォス', 'suparutan-saifosu-wind'],
      ['聖者の行進', 'seija-no-kousin-wind'],
      ['デモンズシャフト', 'demonzu-syafuto-wind'],
      ['浄瑠璃', 'joururi-wind'],
      ['カオスクリエイター', 'kaosu-kurieita-wind'],
      ['チャンピオンベルト', 'tyanpion-beruto-wind'],
      ['メース', 'mesu-wind'],
      ['シャンゼリゼ', 'syanzerize-wind'],
      ['ヘルムヴィーゲ', 'herumuwige-wind'],
      ['ヴァッサーシュパイアー', 'vasasyupaia-wind']
    ],
    staticElement: 'wind',
    group: 'old_class4_weapon_element'
  },
  {
    names: [
      ['ベルセルク・オクス', 'beruseruku-okusu-light'],
      ['スパルタン・サイフォス', 'suparutan-saifosu-light'],
      ['聖者の行進', 'seija-no-kousin-light'],
      ['デモンズシャフト', 'demonzu-syafuto-light'],
      ['浄瑠璃', 'joururi-light'],
      ['カオスクリエイター', 'eaosu-kurieita-light'],
      ['チャンピオンベルト', 'tyanpion-beruto-light'],
      ['メース', 'mesu-light'],
      ['シャンゼリゼ', 'eyanzerize-light'],
      ['ヘルムヴィーゲ', 'herumuwige-light'],
      ['ヴァッサーシュパイアー', 'vasasyupaia-light']
    ],
    staticElement: 'light',
    group: 'old_class4_weapon_element'
  },
  {
    names: [
      ['ベルセルク・オクス', 'beruseruku-okusu-dark'],
      ['スパルタン・サイフォス', 'suparutan-saifosu-dark'],
      ['聖者の行進', 'seija-no-kousin-dark'],
      ['デモンズシャフト', 'demonzu-syafuto-dark'],
      ['浄瑠璃', 'joururi-dark'],
      ['カオスクリエイター', 'kaosu-kurieita-dark'],
      ['チャンピオンベルト', 'tyanpion-beruto-dark'],
      ['メース', 'mesu-dark'],
      ['シャンゼリゼ', 'syanzerize-dark'],
      ['ヘルムヴィーゲ', 'herumuwige-dark'],
      ['ヴァッサーシュパイアー', 'vasasyupaia-dark']
    ],
    staticElement: 'dark',
    group: 'old_class4_weapon_element'
  },
  //new_class4
  {
    names: [
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
    ],
    group: 'new_class4_weapon'
  },
  {
    names: [
      ['トール・テーラー', 'toru-tera-fire'],
      ['リップヴァンウィンクル', 'rippuvan-winkuru-fire'],
      ['ヴァンガード', 'vangado-fire'],
      ['メジエール', 'mejieru-fire'],
      ['修武の籠手', 'syuubu-no-kote-fire'],
      ['金砕棒', 'kanasaibou-fire'],
      ['シャーウッドの弓', 'syaudo-no-yumi-fire'],
      ['プロトタイプ・リブート', 'purototaipu-ributo-fire'],
      ['セレン', 'seren-fire'],
      ['草薙之大刀', 'kusanagi-no-daitou-fire'],
      ['コンバットサプレッション', 'konbato-sapuressyon-fire']
    ],
    staticElement: 'fire',
    group: 'new_class4_weapon_element'
  },
  {
    names: [
      ['トール・テーラー', 'toru-tera-water'],
      ['リップヴァンウィンクル', 'rippuvan-winkuru-water'],
      ['ヴァンガード', 'vangado-water'],
      ['メジエール', 'mejieru-water'],
      ['修武の籠手', 'syuubu-no-kote-water'],
      ['金砕棒', 'kanasaibou-water'],
      ['シャーウッドの弓', 'syaudo-no-yumi-water'],
      ['プロトタイプ・リブート', 'purototaipu-ributo-water'],
      ['セレン', 'seren-water'],
      ['草薙之大刀', 'kusanagi-no-daitou-water'],
      ['コンバットサプレッション', 'konbato-sapuressyon-water']
    ],
    staticElement: 'water',
    group: 'new_class4_weapon_element'
  },
  {
    names: [
      ['トール・テーラー', 'toru-tera-earth'],
      ['リップヴァンウィンクル', 'rippuvan-winkuru-earth'],
      ['ヴァンガード', 'vangado-earth'],
      ['メジエール', 'mejieru-earth'],
      ['修武の籠手', 'syuubu-no-kote-earth'],
      ['金砕棒', 'kanasaibou-earth'],
      ['シャーウッドの弓', 'syaudo-no-yumi-earth'],
      ['プロトタイプ・リブート', 'purototaipu-ributo-earth'],
      ['セレン', 'seren-earth'],
      ['草薙之大刀', 'kusanagi-no-daitou-earth'],
      ['コンバットサプレッション', 'konbato-sapuressyon-earth']
    ],
    staticElement: 'earth',
    group: 'new_class4_weapon_element'
  },
  {
    names: [
      ['トール・テーラー', 'toru-tera-wind'],
      ['リップヴァンウィンクル', 'rippuvan-winkuru-wind'],
      ['ヴァンガード', 'vangado-wind'],
      ['メジエール', 'mejieru-wind'],
      ['修武の籠手', 'syuubu-no-kote-wind'],
      ['金砕棒', 'kanasaibou-wind'],
      ['シャーウッドの弓', 'syaudo-no-yumi-wind'],
      ['プロトタイプ・リブート', 'purototaipu-ributo-wind'],
      ['セレン', 'seren-wind'],
      ['草薙之大刀', 'kusanagi-no-daitou-wind'],
      ['コンバットサプレッション', 'konbato-sapuressyon-wind']
    ],
    staticElement: 'wind',
    group: 'new_class4_weapon_element'
  },
  {
    names: [
      ['トール・テーラー', 'toru-tera-light'],
      ['リップヴァンウィンクル', 'rippuvan-winkuru-light'],
      ['ヴァンガード', 'vangado-light'],
      ['メジエール', 'mejieru-light'],
      ['修武の籠手', 'syuubu-no-kote-light'],
      ['金砕棒', 'kanasaibou-light'],
      ['シャーウッドの弓', 'syaudo-no-yumi-light'],
      ['プロトタイプ・リブート', 'purototaipu-ributo-light'],
      ['セレン', 'seren-light'],
      ['草薙之大刀', 'kusanagi-no-daitou-light'],
      ['コンバットサプレッション', 'konbato-sapuressyon-light']
    ],
    staticElement: 'light',
    group: 'new_class4_weapon_element'
  },
  {
    names: [
      ['トール・テーラー', 'toru-tera-dark'],
      ['リップヴァンウィンクル', 'rippuvan-winkuru-dark'],
      ['ヴァンガード', 'vangado-dark'],
      ['メジエール', 'mejieru-dark'],
      ['修武の籠手', 'syuubu-no-kote-dark'],
      ['金砕棒', 'kanasaibou-dark'],
      ['シャーウッドの弓', 'syaudo-no-yumi-dark'],
      ['プロトタイプ・リブート', 'purototaipu-ributo-dark'],
      ['セレン', 'seren-dark'],
      ['草薙之大刀', 'kusanagi-no-daitou-dark'],
      ['コンバットサプレッション', 'konbato-sapuressyon-dark']
    ],
    staticElement: 'dark',
    group: 'new_class4_weapon_element'
  },
  //ex
  {
    names: [
      ['ファウスト', 'fausuto'],
      ['天叢雲剣', 'ama-no-murakumo-no-ken'],
      ['千子村正', 'sengo-muramasa'],
      ['アシュケロン', 'asyukeron'],
      ['ネブカドネザル', 'nebukadonezaru'],
      ['カピラヴァストゥ', 'kapiravasutwu'],
      ['ミセリコルデ', 'miserikorude'],
      ['響魂の鼓', 'kyoukon-no-tudumi'],
      ['アラベスク', 'arabesuku']
    ],
    group: 'ex_weapon'
  },
  {
    names: [
      ['ファウスト・リビルド', 'fausuto-ribirudo'],
      ['天叢雲剣・再誕', 'ama-no-murakumo-no-ken-saitan'],
      ['千子村正・再誕', 'sengo-muramasa-saitan'],
      ['アシュケロン・リビルド', 'asyukeron-ribirudo'],
      ['ネブカドネザル・リビルド', 'nebukadonezaru-ribirudo'],
      ['カピラヴァストゥ・リビルド', 'kapiravasutwu-ribirudo'],
      ['ミセリコルデ・リビルド', 'miserikorude-ribirudo'],
      ['響魂の鼓・再誕', 'kyoukon-no-tudumi-saitan'],
      ['アラベスク・リビルド', 'arabesuku-ribirudo']
    ],
    group: 'ex_weapon_rebuild'
  },
  {
    names: [
      ['ファウスト・ウヌ', 'fausuto-unu'],
      ['天叢雲剣・猩々', 'ama-no-murakumo-no-ken-syoujou'],
      ['千子村正・猩々', 'sengo-muramasa-syoujou'],
      ['アシュケロン・ウヌ', 'asyukeron-unu'],
      ['ネブカドネザル・ウヌ', 'nebukadonezaru-unu'],
      ['カピラヴァストゥ・ウヌ', 'kapiravasutwu-unu'],
      ['ミセリコルデ・ウヌ', 'miserikorude-unu'],
      ['響魂の鼓・猩々', 'kyoukon-no-tudumi-syoujou'],
      ['アラベスク・ウヌ', 'arabesuku-unu']
    ],
    staticElement: 'fire',
    group: 'ex_weapon_element'
  },
  {
    names: [
      ['ファウスト・ドゥ', 'fausuto-dwu'],
      ['天叢雲剣・露草', 'ama-no-murakumo-no-ken-tuyukusa'],
      ['千子村正・露草', 'sengo-muramasa-tuyukusa'],
      ['アシュケロン・ドゥ', 'asyukeron-dwu'],
      ['ネブカドネザル・ドゥ', 'nebukadonezaru-dwu'],
      ['カピラヴァストゥ・ドゥ', 'kapiravasutwu-dwu'],
      ['ミセリコルデ・ドゥ', 'miserikorude-dwu'],
      ['響魂の鼓・露草', 'kyoukon-no-tudumi-tuyukusa'],
      ['アラベスク・ドゥ', 'arabesuku-dwu']
    ],
    staticElement: 'water',
    group: 'ex_weapon_element'
  },
  {
    names: [
      ['ファウスト・トリ', 'fausuto-tori'],
      ['天叢雲剣・落葉', 'ama-no-murakumo-no-ken-rakuyou'],
      ['千子村正・落葉', 'sengo-muramasa-rakuyou'],
      ['アシュケロン・トリ', 'asyukeron-tori'],
      ['ネブカドネザル・トリ', 'nebukadonezaru-tori'],
      ['カピラヴァストゥ・トリ', 'kapiravasutwu-tori'],
      ['ミセリコルデ・トリ', 'miserikorude-tori'],
      ['響魂の鼓・落葉', 'kyoukon-no-tudumi-rakuyou'],
      ['アラベスク・トリ', 'arabesuku-tori']
    ],
    staticElement: 'earth',
    group: 'ex_weapon_element'
  },
  {
    names: [
      ['ファウスト・クヴァール', 'fausuto-kuvaru'],
      ['天叢雲剣・琅玕', 'ama-no-murakumo-no-ken-roukan'],
      ['千子村正・琅玕', 'sengo-muramasa-roukan'],
      ['アシュケロン・クヴァール', 'asyukeron-kuvaru'],
      ['ネブカドネザル・クヴァール', 'nebukadonezaru-kuvaru'],
      ['カピラヴァストゥ・クヴァール', 'kapiravasutwu-kuvaru'],
      ['ミセリコルデ・クヴァール', 'miserikorude-kuvaru'],
      ['響魂の鼓・琅玕', 'kyoukon-no-tudumi-roukan'],
      ['アラベスク・クヴァール', 'arabesuku-kuvaru']
    ],
    staticElement: 'wind',
    group: 'ex_weapon_element'
  },
  {
    names: [
      ['ファウスト・クヴィン', 'fausuto-kuvin'],
      ['天叢雲剣・月白', 'ama-no-murakumo-no-ken-geppaku'],
      ['千子村正・月白', 'sengo-muramasa-geppaku'],
      ['アシュケロン・クヴィン', 'asyukeron-kuvin'],
      ['ネブカドネザル・クヴィン', 'nebukadonezaru-kuvin'],
      ['カピラヴァストゥ・クヴィン', 'kapiravasutwu-kuvin'],
      ['ミセリコルデ・クヴィン', 'miserikorude-kuvin'],
      ['響魂の鼓・月白', 'kyoukon-no-tudumi-geppaku'],
      ['アラベスク・クヴィン', 'arabesuku-kuvin']
    ],
    staticElement: 'light',
    group: 'ex_weapon_element'
  },
  {
    names: [
      ['ファウスト・セス', 'fausuto-dark'],
      ['天叢雲剣・漆黒', 'ama-no-murakumo-no-ken-sikkoku'],
      ['千子村正・漆黒', 'sengo-muramasa-sikkoku'],
      ['アシュケロン・セス', 'asyukeron-dark'],
      ['ネブカドネザル・セス', 'nebukadonezaru-dark'],
      ['カピラヴァストゥ・セス', 'kapiravasutwu-dark'],
      ['ミセリコルデ・セス', 'miserikorude-dark'],
      ['響魂の鼓・漆黒', 'kyoukon-no-tudumi-sikkoku'],
      ['アラベスク・セス', 'arabesuku-dark']
    ],
    staticElement: 'dark',
    group: 'ex_weapon_element'
  },
  //ex2
  {
    names: [
      ['マッドネスシリンジ', 'madonesu-sirinji'],
      ['無銘金重', 'mumeikanesige'],
      ['テトラストリーマ', 'tetorasutorima'],
      ['リディル', 'ridhiru'],
      ['ジョン・ドゥ', 'jon-dwu'],
      ['ルナティックブルーム', 'runathikku-burumu'],
      ['ガロット', 'garotto'],
      ['ヘルムホルツ', 'herumuhorutu'],
      ['ルドルフィーナ', 'rudorufina']
    ],
    group: 'ex2_weapon'
  },
  {
    names: [
      ['マッドネスシリンジ', 'madonesu-sirinji-fire'],
      ['無銘金重', 'mumeikanesige-fire'],
      ['テトラストリーマ', 'tetorasutorima-fire'],
      ['リディル', 'ridhiru-fire'],
      ['ジョン・ドゥ', 'jon-dwu-fire'],
      ['ルナティックブルーム', 'runathikku-burumu-fire'],
      ['ガロット', 'garotto-fire'],
      ['ヘルムホルツ', 'herumuhorutu-fire'],
      ['ルドルフィーナ', 'rudorufina-fire']
    ],
    staticElement: 'fire',
    group: 'ex2_weapon_element'
  },
  {
    names: [
      ['マッドネスシリンジ', 'madonesu-sirinji-water'],
      ['無銘金重', 'mumeikanesige-water'],
      ['テトラストリーマ', 'tetorasutorima-water'],
      ['リディル', 'ridhiru-water'],
      ['ジョン・ドゥ', 'jon-dwu-water'],
      ['ルナティックブルーム', 'runathikku-burumu-water'],
      ['ガロット', 'garotto-water'],
      ['ヘルムホルツ', 'herumuhorutu-water'],
      ['ルドルフィーナ', 'rudorufina-water']
    ],
    staticElement: 'water',
    group: 'ex2_weapon_element'
  },
  {
    names: [
      ['マッドネスシリンジ', 'madonesu-sirinji-earth'],
      ['無銘金重', 'mumeikanesige-earth'],
      ['テトラストリーマ', 'tetorasutorima-earth'],
      ['リディル', 'ridhiru-earth'],
      ['ジョン・ドゥ', 'jon-dwu-earth'],
      ['ルナティックブルーム', 'runathikku-burumu-earth'],
      ['ガロット', 'garotto-earth'],
      ['ヘルムホルツ', 'herumuhorutu-earth'],
      ['ルドルフィーナ', 'rudorufina-earth']
    ],
    staticElement: 'earth',
    group: 'ex2_weapon_element'
  },
  {
    names: [
      ['マッドネスシリンジ', 'madonesu-sirinji-wind'],
      ['無銘金重', 'mumeikanesige-wind'],
      ['テトラストリーマ', 'tetorasutorima-wind'],
      ['リディル', 'ridhiru-wind'],
      ['ジョン・ドゥ', 'jon-dwu-wind'],
      ['ルナティックブルーム', 'runathikku-burumu-wind'],
      ['ガロット', 'garotto-wind'],
      ['ヘルムホルツ', 'herumuhorutu-wind'],
      ['ルドルフィーナ', 'rudorufina-wind']
    ],
    staticElement: 'wind',
    group: 'ex2_weapon_element'
  },
  {
    names: [
      ['マッドネスシリンジ', 'madonesu-sirinji-light'],
      ['無銘金重', 'mumeikanesige-light'],
      ['テトラストリーマ', 'tetorasutorima-light'],
      ['リディル', 'ridhiru-light'],
      ['ジョン・ドゥ', 'jon-dwu-light'],
      ['ルナティックブルーム', 'runathikku-burumu-light'],
      ['ガロット', 'garotto-light'],
      ['ヘルムホルツ', 'herumuhorutu-light'],
      ['ルドルフィーナ', 'rudorufina-light']
    ],
    staticElement: 'light',
    group: 'ex2_weapon_element'
  },
  {
    names: [
      ['マッドネスシリンジ', 'madonesu-sirinji-dark'],
      ['無銘金重', 'mumeikanesige-dark'],
      ['テトラストリーマ', 'tetorasutorima-dark'],
      ['リディル', 'ridhiru-dark'],
      ['ジョン・ドゥ', 'jon-dwu-dark'],
      ['ルナティックブルーム', 'runathikku-burumu-dark'],
      ['ガロット', 'garotto-dark'],
      ['ヘルムホルツ', 'herumuhorutu-dark'],
      ['ルドルフィーナ', 'rudorufina-dark']
    ],
    staticElement: 'dark',
    group: 'ex2_weapon_element'
  },
  {
    names: [
      ['英勇のエンブレム', 'eiyuu-no-enburemu'],
      ['天聖のエンブレム', 'tensei-no-enburemu'],
      ['魔獄のエンブレム', 'magoku-no-enburemu']
    ],
    group: 'eiyuu_enburemu'
  },
  //class5
  {
    names: [
      ['ノルデン・ラブリュス', 'noruden-raburyusu'],
      ['ダイアデム・ムーリネ', 'daiademu-murine'],
      ['ロイヤル・ブリンガー', 'roiyaru-buringa']
    ],
    group: 'class5_weapon'
  },
  {
    names: [
      ['ノルデン・ラブリュス', 'noruden-raburyusu-fire'],
      ['ダイアデム・ムーリネ', 'daiademu-murine-fire'],
      ['ロイヤル・ブリンガー', 'roiyaru-buringa-fire']
    ],
    staticElement: 'fire',
    group: 'class5_weapon_element'
  },
  {
    names: [
      ['ノルデン・ラブリュス', 'noruden-raburyusu-water'],
      ['ダイアデム・ムーリネ', 'daiademu-murine-water'],
      ['ロイヤル・ブリンガー', 'roiyaru-buringa-water']
    ],
    staticElement: 'water',
    group: 'class5_weapon_element'
  },
  {
    names: [
      ['ノルデン・ラブリュス', 'noruden-raburyusu-earth'],
      ['ダイアデム・ムーリネ', 'daiademu-murine-earth'],
      ['ロイヤル・ブリンガー', 'roiyaru-buringa-earth']
    ],
    staticElement: 'earth',
    group: 'class5_weapon_element'
  },
  {
    names: [
      ['ノルデン・ラブリュス', 'noruden-raburyusu-wind'],
      ['ダイアデム・ムーリネ', 'daiademu-murine-wind'],
      ['ロイヤル・ブリンガー', 'roiyaru-buringa-wind']
    ],
    staticElement: 'wind',
    group: 'class5_weapon_element'
  },
  {
    names: [
      ['ノルデン・ラブリュス', 'noruden-raburyusu-light'],
      ['ダイアデム・ムーリネ', 'daiademu-murine-light'],
      ['ロイヤル・ブリンガー', 'roiyaru-buringa-light']
    ],
    staticElement: 'light',
    group: 'class5_weapon_element'
  },
  {
    names: [
      ['ノルデン・ラブリュス', 'noruden-raburyusu-dark'],
      ['ダイアデム・ムーリネ', 'daiademu-murine-dark'],
      ['ロイヤル・ブリンガー', 'roiyaru-buringa-dark']
    ],
    staticElement: 'dark',
    group: 'class5_weapon_element'
  },
  {
    names: [
      ['武極の指南書', 'bukyoku-no-sinansyo'],
      ['武極の秘術書', 'bukyoku-no-hijutusyo']
    ],
    group: 'class5_syo'
  },
  /*専用トレジャー *****************************************************/
  {
    names: [
      ['福音の火舞う恩寵', 'hukune-no-himau-ontyou'],
      ['福音の水湧く恩寵', 'hukune-no-mizuwaku-ontyou'],
      ['福音の土護る恩寵', 'hukune-no-tutimamoru-ontyou'],
      ['福音の風囁く恩寵', 'hukune-no-kazesasayaku-ontyou'],
      ['福音の光降る恩寵', 'hukune-no-hikarihuru-ontyou'],
      ['福音の闇覆う恩寵', 'hukune-no-yamioou-ontyou']
    ],
    haveElement: true,
    group: 'ontyou'
  },
  {
    names: [
      ['天穹を廻りし火舞う恩寵', 'tenkyuu-wo-mawarisi-himau-ontyou'],
      ['天穹を廻りし水湧く恩寵', 'tenkyuu-wo-mawarisi-mizuwaku-ontyou'],
      ['天穹を廻りし土護る恩寵', 'tenkyuu-wo-mawarisi-tutimamoru-ontyou'],
      ['天穹を廻りし風囁く恩寵', 'tenkyuu-wo-mawarisi-kazesasayaku-ontyou'],
      ['天穹を廻りし光降る恩寵', 'tenkyuu-wo-mawarisi-hikarihuru-ontyou'],
      ['天穹を廻りし闇覆う恩寵', 'tenkyuu-wo-mawarisi-yamioou-ontyou']
    ],
    haveElement: true,
    group: 'ontyou_limit'
  },
  {
    names: [
      ['ジャスティスが描かれたカード', 'jasuthisu-ga-kakareta-kado'],
      ['ハングドマンが描かれたカード', 'hangudoman-ga-kakareta-kado'],
      ['デスが描かれたカード', 'desu-ga-kakareta-kado'],
      ['テンペランスが描かれたカード', 'tenperansu-ga-kakareta-kado'],
      ['デビルが描かれたカード', 'debiru-ga-kakareta-kado'],
      ['タワーが描かれたカード', 'tawa-ga-kakareta-kado'],
      ['スターが描かれたカード', 'suta-ga-kakareta-kado'],
      ['ムーンが描かれたカード', 'mun-ga-kakareta-kado'],
      ['サンが描かれたカード', 'san-ga-kakareta-kado'],
      ['ジャッジメントが描かれたカード', 'jajjimento-ga-kakareta-kado']
    ],
    group: 'jukken_card'
  },
  {
    names: [['ザ・ワールドが描かれたカード', 'za-warudo-ga-kakareta-kado']],
    group: 'za_wold_card'
  },
  {
    names: [
      ['ライズ・オブ・ジャスティス', 'raizu-obu-jasuthis'],
      ['タイ・オブ・ザ・ハングドマン', 'tai-obu-za-hangudoman'],
      ['ペイン・オブ・デス', 'pein-obu-desu'],
      ['プレイ・オブ・テンペランス', 'purei-obu-tenperansu'],
      ['キス・オブ・ザ・デビル', 'kisu-obu-za-debiru'],
      ['クラッシュ・オブ・ザ・タワー', 'kurassyu-obu-za-tawa'],
      ['ショット・オブ・ザ・スター', 'syotto-obu-za-suta'],
      ['リフレクト・オブ・ザ・ムーン', 'rifurekuto-obu-za-mun'],
      ['ヒート・オブ・ザ・サン', 'hito-obu-za-san'],
      ['メロディ・オブ・ジャッジメント', 'merodhi-obu-jajjimento']
    ],
    group: 'isizue_weapon'
  },
  {
    names: [['蒼天の魂', 'souten-no-tamasii']],
    group: 'souten_tamasii'
  },
  {
    names: [['雄偉者たちの矜持', 'yuuisyatati-no-kyouji']],
    group: 'yuuisyatati-no-kyouji'
  },
  {
    names: [['碧麗の証', 'hekirei-no-akasi']],
    group: 'hekirei_akasi'
  },
  {
    //〇番天星の欠片
    names: [
      ['一番天星の欠片', 'itibantensei-no-kakera'],
      ['二番天星の欠片', 'nibantensei-no-kakera'],
      ['三番天星の欠片', 'sanbantensei-no-kakera'],
      ['四番天星の欠片', 'yonbantensei-no-kakera'],
      ['五番天星の欠片', 'gobantensei-no-kakera'],
      ['六番天星の欠片', 'rokubantensei-no-kakera'],
      ['七番天星の欠片', 'nanabantensei-no-kakera'],
      ['八番天星の欠片', 'hatibantensei-no-kakera'],
      ['九番天星の欠片', 'kyuubantensei-no-kakera'],
      ['十番天星の欠片', 'juubantensei-no-kakera']
    ],
    group: 'tensei_no_kakera'
  },
  {
    //純然たる魄
    names: [
      ['純然たる槍の魂', 'junzentaru-yari-no-tamasii'],
      ['純然たる弓の魂', 'junzentaru-yumi-no-tamasii'],
      ['純然たる斧の魂', 'junzentaru-ono-no-tamasii'],
      ['純然たる刃の魂', 'junzentaru-yaiba-no-tamasii'],
      ['純然たる杖の魂', 'junzentaru-tue-no-tamasii'],
      ['純然たる手甲の魂', 'junzentaru-tekkou-no-tamasii'],
      ['純然たる剣の魂', 'junzentaru-ken-no-tamasii'],
      ['純然たる太刀の魂', 'junzentaru-tati-no-tamasii'],
      ['純然たる竪琴の魂', 'junzentaru-tategoto-no-tamasii'],
      ['純然たる銃の魂', 'junzentaru-juu-no-tamasii']
    ],
    group: 'junzen_tamasii'
  },
  {
    //十天衆限界超越トレジャー
    names: [
      ['無我・天伐槍', 'muga-tenbatusou'],
      ['真滅・覇王弓', 'sinmetu-haoukyuu'],
      ['絶壊・威寅斧', 'zekkai-itorafu'],
      ['双葬・落天刃', 'sousou-rakutenjin'],
      ['献誠・煌神杖', 'kensei-kousinjou'],
      ['盟道・廻崩拳', 'meidou-kairouken'],
      ['天枢・極星剣', 'tensuu-kyokuseiken'],
      ['真打・無命切刀', 'sinuti-mumeisai'],
      ['幻奏・沙界琴', 'gensou-syakaikin'],
      ['双創・凱狼雷', 'sousou-gairourai']
    ],
    group: 'jutten_limit_treasure'
  },
  {
    //朽ち果てた武器
    names: [
      ['朽ち果てた槍', 'kutihateta-yari'],
      ['朽ち果てた弓', 'kutihateta-yumi'],
      ['朽ち果てた斧', 'kutihateta-ono'],
      ['朽ち果てた刃', 'kutihateta-yaiba'],
      ['朽ち果てた杖', 'kutihateta-tue'],
      ['朽ち果てた手甲', 'kutihateta-tekkou'],
      ['朽ち果てた剣', 'kutihateta-ken'],
      ['朽ち果てた太刀', 'kutihateta-tati'],
      ['朽ち果てた竪琴', 'kutihateta-tategoto'],
      ['朽ち果てた銃', 'kutihateta-juu']
    ],
    group: 'kutihateta'
  },
  {
    //銀の依代
    names: [
      ['銀の依代の槍', 'gin-no-yorisiro-no-yari'],
      ['銀の依代の弓', 'gin-no-yorisiro-no-yumi'],
      ['銀の依代の斧', 'gin-no-yorisiro-no-ono'],
      ['銀の依代の刃', 'gin-no-yorisiro-no-yaiba'],
      ['銀の依代の杖', 'gin-no-yorisiro-no-tue'],
      ['銀の依代の手甲', 'gin-no-yorisiro-no-tekkou'],
      ['銀の依代の剣', 'gin-no-yorisiro-no-ken'],
      ['銀の依代の太刀', 'gin-no-yorisiro-no-tati'],
      ['銀の依代の竪琴', 'gin-no-yorisiro-no-tategoto'],
      ['銀の依代の銃', 'gin-no-yorisiro-no-juu']
    ],
    group: 'yorisiro_gin'
  },
  {
    //黄金の依代
    names: [
      ['黄金の依代の槍', 'ougon-no-yorisiro-no-yari'],
      ['黄金の依代の弓', 'ougon-no-yorisiro-no-yumi'],
      ['黄金の依代の斧', 'ougon-no-yorisiro-no-ono'],
      ['黄金の依代の刃', 'ougon-no-yorisiro-no-yaiba'],
      ['黄金の依代の杖', 'ougon-no-yorisiro-no-tue'],
      ['黄金の依代の手甲', 'ougon-no-yorisiro-no-tekkou'],
      ['黄金の依代の剣', 'ougon-no-yorisiro-no-ken'],
      ['黄金の依代の太刀', 'ougon-no-yorisiro-no-tati'],
      ['黄金の依代の竪琴', 'ougon-no-yorisiro-no-tategoto'],
      ['黄金の依代の銃', 'ougon-no-yorisiro-no-juu']
    ],
    group: 'yorisiro_ougon'
  },
  {
    //属性の依代
    names: [
      ['赤き依り代の槍', 'akaki-yorisiro-no-yari'],
      ['赤き依り代の弓', 'akaki-yorisiro-no-yumi'],
      ['赤き依り代の斧', 'akaki-yorisiro-no-ono'],
      ['赤き依り代の刃', 'akaki-yorisiro-no-yaiba'],
      ['赤き依り代の杖', 'akaki-yorisiro-no-tue'],
      ['赤き依り代の手甲', 'akaki-yorisiro-no-tekkou'],
      ['赤き依り代の剣', 'akaki-yorisiro-no-ken'],
      ['赤き依り代の太刀', 'akaki-yorisiro-no-tati'],
      ['赤き依り代の竪琴', 'akaki-yorisiro-no-tategoto'],
      ['赤き依り代の銃', 'akaki-yorisiro-no-juu']
    ],
    group: 'yorisiro_element',
    staticElement: 'fire'
  },
  {
    names: [
      ['青き依り代の槍', 'aoki-yorisiro-no-yari'],
      ['青き依り代の弓', 'aoki-yorisiro-no-yumi'],
      ['青き依り代の斧', 'aoki-yorisiro-no-ono'],
      ['青き依り代の刃', 'aoki-yorisiro-no-yaiba'],
      ['青き依り代の杖', 'aoki-yorisiro-no-tue'],
      ['青き依り代の手甲', 'aoki-yorisiro-no-tekkou'],
      ['青き依り代の剣', 'aoki-yorisiro-no-ken'],
      ['青き依り代の太刀', 'aoki-yorisiro-no-tati'],
      ['青き依り代の竪琴', 'aoki-yorisiro-no-tategoto'],
      ['青き依り代の銃', 'aoki-yorisiro-no-juu']
    ],
    group: 'yorisiro_element',
    staticElement: 'water'
  },
  {
    names: [
      ['黄の依り代の槍', 'ki-no-yorisiro-no-yari'],
      ['黄の依り代の弓', 'ki-no-yorisiro-no-yumi'],
      ['黄の依り代の斧', 'ki-no-yorisiro-no-ono'],
      ['黄の依り代の刃', 'ki-no-yorisiro-no-yaiba'],
      ['黄の依り代の杖', 'ki-no-yorisiro-no-tue'],
      ['黄の依り代の手甲', 'ki-no-yorisiro-no-tekkou'],
      ['黄の依り代の剣', 'ki-no-yorisiro-no-ken'],
      ['黄の依り代の太刀', 'ki-no-yorisiro-no-tati'],
      ['黄の依り代の竪琴', 'ki-no-yorisiro-no-tategoto'],
      ['黄の依り代の銃', 'ki-no-yorisiro-no-juu']
    ],
    group: 'yorisiro_element',
    staticElement: 'earth'
  },
  {
    names: [
      ['緑の依り代の槍', 'midori-no-yorisiro-no-yari'],
      ['緑の依り代の弓', 'midori-no-yorisiro-no-yumi'],
      ['緑の依り代の斧', 'midori-no-yorisiro-no-ono'],
      ['緑の依り代の刃', 'midori-no-yorisiro-no-yaiba'],
      ['緑の依り代の杖', 'midori-no-yorisiro-no-tue'],
      ['緑の依り代の手甲', 'midori-no-yorisiro-no-tekkou'],
      ['緑の依り代の剣', 'midori-no-yorisiro-no-ken'],
      ['緑の依り代の太刀', 'midori-no-yorisiro-no-tati'],
      ['緑の依り代の竪琴', 'midori-no-yorisiro-no-tategoto'],
      ['緑の依り代の銃', 'midori-no-yorisiro-no-juu']
    ],
    group: 'yorisiro_element',
    staticElement: 'wind'
  },
  {
    names: [
      ['白き依り代の槍', 'siroki-yorisiro-no-yari'],
      ['白き依り代の弓', 'siroki-yorisiro-no-yumi'],
      ['白き依り代の斧', 'siroki-yorisiro-no-ono'],
      ['白き依り代の刃', 'siroki-yorisiro-no-yaiba'],
      ['白き依り代の杖', 'siroki-yorisiro-no-tue'],
      ['白き依り代の手甲', 'siroki-yorisiro-no-tekkou'],
      ['白き依り代の剣', 'siroki-yorisiro-no-ken'],
      ['白き依り代の太刀', 'siroki-yorisiro-no-tati'],
      ['白き依り代の竪琴', 'siroki-yorisiro-no-tategoto'],
      ['白き依り代の銃', 'siroki-yorisiro-no-juu']
    ],
    group: 'yorisiro_element',
    staticElement: 'light'
  },
  {
    names: [
      ['黒き依り代の槍', 'kuroki-yorisiro-no-yari'],
      ['黒き依り代の弓', 'kuroki-yorisiro-no-yumi'],
      ['黒き依り代の斧', 'kuroki-yorisiro-no-ono'],
      ['黒き依り代の刃', 'kuroki-yorisiro-no-yaiba'],
      ['黒き依り代の杖', 'kuroki-yorisiro-no-tue'],
      ['黒き依り代の手甲', 'kuroki-yorisiro-no-tekkou'],
      ['黒き依り代の剣', 'kuroki-yorisiro-no-ken'],
      ['黒き依り代の太刀', 'kuroki-yorisiro-no-tati'],
      ['黒き依り代の竪琴', 'kuroki-yorisiro-no-tategoto'],
      ['黒き依り代の銃', 'kuroki-yorisiro-no-juu']
    ],
    group: 'yorisiro_element',
    staticElement: 'dark'
  },
  {
    //天星器
    names: [
      ['一伐槍', 'itibatusou'],
      ['二王弓', 'nioukyuu'],
      ['三寅斧', 'mitorafu'],
      ['四天刃', 'sitenjin'],
      ['五神杖', 'gosinjou'],
      ['六崩拳', 'rokuhouken'],
      ['七星剣', 'sitiseiken'],
      ['八命切', 'yatumeisai'],
      ['九界琴', 'kukaikin'],
      ['十狼雷', 'juurourai']
    ],
    group: 'tenseiki'
  },
  {
    //天星器・真
    names: [
      ['一伐槍・真', 'itibatusou-sin'],
      ['二王弓・真', 'nioukyuu-sin'],
      ['三寅斧・真', 'mitorafu-sin'],
      ['四天刃・真', 'sitenjin-sin'],
      ['五神杖・真', 'gosinjou-sin'],
      ['六崩拳・真', 'rokuhouken-sin'],
      ['七星剣・真', 'sitiseiken-sin'],
      ['八命切・真', 'yatumeisai-sin'],
      ['九界琴・真', 'kukaikin-sin'],
      ['十狼雷・真', 'juurourai-sin']
    ],
    group: 'tenseiki_sin'
  },
  {
    //天星器（属性変更）
    names: [
      ['一伐槍・焔', 'itibatusou-homura'],
      ['二王弓・焔', 'nioukyuu-homura'],
      ['三寅斧・焔', 'mitorafu-homura'],
      ['四天刃・焔', 'sitenjin-homura'],
      ['五神杖・焔', 'gosinjou-homura'],
      ['六崩拳・焔', 'rokuhouken-homura'],
      ['七星剣・焔', 'sitiseiken-homura'],
      ['八命切・焔', 'yatumeisai-homura'],
      ['九界琴・焔', 'kukaikin-homura'],
      ['十狼雷・焔', 'juurourai-homura']
    ],
    group: 'tenseiki_element',
    staticElement: 'fire'
  },
  {
    names: [
      ['一伐槍・雪', 'itibatusou-yuki'],
      ['二王弓・雪', 'nioukyuu-yuki'],
      ['三寅斧・雪', 'mitorafu-yuki'],
      ['四天刃・雪', 'sitenjin-yuki'],
      ['五神杖・雪', 'gosinjou-yuki'],
      ['六崩拳・雪', 'rokuhouken-yuki'],
      ['七星剣・雪', 'sitiseiken-yuki'],
      ['八命切・雪', 'yatumeisai-yuki'],
      ['九界琴・雪', 'kukaikin-yuki'],
      ['十狼雷・雪', 'juurourai-yuki']
    ],
    group: 'tenseiki_element',
    staticElement: 'water'
  },
  {
    names: [
      ['一伐槍・界', 'itibatusou-kai'],
      ['二王弓・界', 'nioukyuu-kai'],
      ['三寅斧・界', 'mitorafu-kai'],
      ['四天刃・界', 'sitenjin-kai'],
      ['五神杖・界', 'gosinjou-kai'],
      ['六崩拳・界', 'rokuhouken-kai'],
      ['七星剣・界', 'sitiseiken-kai'],
      ['八命切・界', 'yatumeisai-kai'],
      ['九界琴・界', 'kukaikin-kai'],
      ['十狼雷・界', 'juurourai-kai']
    ],
    group: 'tenseiki_element',
    staticElement: 'earth'
  },
  {
    names: [
      ['一伐槍・凪', 'itibatusou-nagi'],
      ['二王弓・凪', 'nioukyuu-nagi'],
      ['三寅斧・凪', 'mitorafu-nagi'],
      ['四天刃・凪', 'sitenjin-nagi'],
      ['五神杖・凪', 'gosinjou-nagi'],
      ['六崩拳・凪', 'rokuhouken-nagi'],
      ['七星剣・凪', 'sitiseiken-nagi'],
      ['八命切・凪', 'yatumeisai-nagi'],
      ['九界琴・凪', 'kukaikin-nagi'],
      ['十狼雷・凪', 'juurourai-nagi']
    ],
    group: 'tenseiki_element',
    staticElement: 'wind'
  },
  {
    names: [
      ['一伐槍・煌', 'itibatusou-kou'],
      ['二王弓・煌', 'nioukyuu-kou'],
      ['三寅斧・煌', 'mitorafu-kou'],
      ['四天刃・煌', 'sitenjin-kou'],
      ['五神杖・煌', 'gosinjou-kou'],
      ['六崩拳・煌', 'rokuhouken-kou'],
      ['七星剣・煌', 'sitiseiken-kou'],
      ['八命切・煌', 'yatumeisai-kou'],
      ['九界琴・煌', 'kukaikin-kou'],
      ['十狼雷・煌', 'juurourai-kou']
    ],
    group: 'tenseiki_element',
    staticElement: 'light'
  },
  {
    names: [
      ['一伐槍・煉', 'itibatusou-ren'],
      ['二王弓・煉', 'nioukyuu-ren'],
      ['三寅斧・煉', 'mitorafu-ren'],
      ['四天刃・煉', 'sitenjin-ren'],
      ['五神杖・煉', 'gosinjou-ren'],
      ['六崩拳・煉', 'rokuhouken-ren'],
      ['七星剣・煉', 'sitiseiken-ren'],
      ['八命切・煉', 'yatumeisai-ren'],
      ['九界琴・煉', 'kukaikin-ren'],
      ['十狼雷・煉', 'juurourai-ren']
    ],
    group: 'tenseiki_element',
    staticElement: 'dark'
  },
  {
    //天星器（覚醒）
    names: [
      ['一伐槍・紅天', 'itibatusou-kouten'],
      ['二王弓・紅天', 'nioukyuu-kouten'],
      ['三寅斧・紅天', 'mitorafu-kouten'],
      ['四天刃・紅天', 'sitenjin-kouten'],
      ['五神杖・紅天', 'gosinjou-kouten'],
      ['六崩拳・紅天', 'rokuhouken-kouten'],
      ['七星剣・紅天', 'sitiseiken-kouten'],
      ['八命切・紅天', 'yatumeisai-kouten'],
      ['九界琴・紅天', 'kukaikin-kouten'],
      ['十狼雷・紅天', 'juurourai-kouten']
    ],
    group: 'tenseiki_kakusei',
    staticElement: 'fire'
  },
  {
    names: [
      ['一伐槍・蒼天', 'itibatusou-souten'],
      ['二王弓・蒼天', 'nioukyuu-souten'],
      ['三寅斧・蒼天', 'mitorafu-souten'],
      ['四天刃・蒼天', 'sitenjin-souten'],
      ['五神杖・蒼天', 'gosinjou-souten'],
      ['六崩拳・蒼天', 'rokuhouken-souten'],
      ['七星剣・蒼天', 'sitiseiken-souten'],
      ['八命切・蒼天', 'yatumeisai-souten'],
      ['九界琴・蒼天', 'kukaikin-souten'],
      ['十狼雷・蒼天', 'juurourai-souten']
    ],
    group: 'tenseiki_kakusei',
    staticElement: 'water'
  },
  {
    names: [
      ['一伐槍・轟天', 'itibatusou-gouten'],
      ['二王弓・轟天', 'nioukyuu-gouten'],
      ['三寅斧・轟天', 'mitorafu-gouten'],
      ['四天刃・轟天', 'sitenjin-gouten'],
      ['五神杖・轟天', 'gosinjou-gouten'],
      ['六崩拳・轟天', 'rokuhouken-gouten'],
      ['七星剣・轟天', 'sitiseiken-gouten'],
      ['八命切・轟天', 'yatumeisai-gouten'],
      ['九界琴・轟天', 'kukaikin-gouten'],
      ['十狼雷・轟天', 'juurourai-gouten']
    ],
    group: 'tenseiki_kakusei',
    staticElement: 'earth'
  },
  {
    names: [
      ['一伐槍・疾天', 'itibatusou-sitten'],
      ['二王弓・疾天', 'nioukyuu-sitten'],
      ['三寅斧・疾天', 'mitorafu-sitten'],
      ['四天刃・疾天', 'sitenjin-sitten'],
      ['五神杖・疾天', 'gosinjou-sitten'],
      ['六崩拳・疾天', 'rokuhouken-sitten'],
      ['七星剣・疾天', 'sitiseiken-sitten'],
      ['八命切・疾天', 'yatumeisai-sitten'],
      ['九界琴・疾天', 'kukaikin-sitten'],
      ['十狼雷・疾天', 'juurourai-sitten']
    ],
    group: 'tenseiki_kakusei',
    staticElement: 'wind'
  },
  {
    names: [
      ['一伐槍・白天', 'itibatusou-hakuten'],
      ['二王弓・白天', 'nioukyuu-hakuten'],
      ['三寅斧・白天', 'mitorafu-hakuten'],
      ['四天刃・白天', 'sitenjin-hakuten'],
      ['五神杖・白天', 'gosinjou-hakuten'],
      ['六崩拳・白天', 'rokuhouken-hakuten'],
      ['七星剣・白天', 'sitiseiken-hakuten'],
      ['八命切・白天', 'yatumeisai-hakuten'],
      ['九界琴・白天', 'kukaikin-hakuten'],
      ['十狼雷・白天', 'juurourai-hakuten']
    ],
    group: 'tenseiki_kakusei',
    staticElement: 'light'
  },
  {
    names: [
      ['一伐槍・黒天', 'itibatusou-kokuten'],
      ['二王弓・黒天', 'nioukyuu-kokuten'],
      ['三寅斧・黒天', 'mitorafu-kokuten'],
      ['四天刃・黒天', 'sitenjin-kokuten'],
      ['五神杖・黒天', 'gosinjou-kokuten'],
      ['六崩拳・黒天', 'rokuhouken-kokuten'],
      ['七星剣・黒天', 'sitiseiken-kokuten'],
      ['八命切・黒天', 'yatumeisai-kokuten'],
      ['九界琴・黒天', 'kukaikin-kokuten'],
      ['十狼雷・黒天', 'juurourai-kokuten']
    ],
    group: 'tenseiki_kakusei',
    staticElement: 'dark'
  },
  {
    //設備拡充
    names: [
      ['スパイククラブ', 'supaiku-kurabu'],
      ['マインゴーシュ', 'maingosyu'],
      ['インペリアルショテル', 'inperiaru-syoteru'],
      ['風精の鉤爪槍', 'fuusei-no-kousousou'],
      ['クリムゾンアックス', 'kurimuzon-akkusu'],
      ['火精の権杖', 'kasei-no-kenjou'],
      ['虹魚鱗飾', 'kougyorinsyoku'],
      ['水精の牧杖', 'suisei-no-bokujou'],
      ['クラッシュハンド', 'kurassyu-hando'],
      ['土精の蛇行剣', 'dosei-no-dakouken'],
      ['シャインバレル', 'syain-bareru'],
      ['シャインナックル', 'syain-nakkuru'],
      ['シャドウスピア', 'syadou-supia'],
      ['シャドウワンド', 'syadou-wando']
    ],
    group: 'setubi_kakujuu'
  }
]);
