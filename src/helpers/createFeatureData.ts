import type { TupleToUnion } from 'type-fest';

export const featureNames = ['top', 'contents_chart'] as const;
export type FeatureName = TupleToUnion<typeof featureNames>;

const featureData = {
  top: _createData('騎空士を救う攻略サイト', 'kyasarin.png', 'キャサリン'),
  contents_chart: _createData('コンテンツチャート', 'saya.png', 'サーヤ')
  // required_treasure_accu: _createData('累積必要素材チェッカー', 'europe.png', 'エウロペ')
};

export default function (featureName: FeatureName) {
  return featureData[featureName];
}

function _createData(name: string, imageFileName: string, alt: string) {
  const baseImagePath = 'visual/feature';
  return {
    title: name,
    imagePath: `${baseImagePath}/${imageFileName}`,
    alt
  };
}
