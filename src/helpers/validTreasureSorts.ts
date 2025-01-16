import type { TreasuresData, TreasureSorts } from 'src/helpers/createContentsData';

export default function (treasures: TreasuresData, treasureSorts: TreasureSorts[string]) {
  if (!treasureSorts) {
    console.error(
      'treasureSorts が無いので、RequiredTreasureModalAll のトレジャーがソート無しで表示されています\n改善するには、アクセスしているコンテンツの/src/data/*.ts にtreasureSorts を追加してください'
    );
    return;
  }

  const sortGroups = treasureSorts.flatMap(sort => sort.groups);
  const treasureGroupSet = new Set();
  treasures.forEach(treasure => {
    const { noAccu, group } = treasure;
    if (noAccu) return;
    treasureGroupSet.add(group);
  });

  //足りないgroup を探す
  treasureGroupSet.forEach(treasureGroup => {
    const exists = sortGroups.some(sortGroup => sortGroup === treasureGroup);
    console.assert(exists, `treasureSorts に【${treasureGroup}】が無いので、ページに表示されないトレジャーがあります`);
  });

  //重複しているgroup を探す
  const duplicatesGroupSet = new Set();
  sortGroups.forEach(sortGroup => {
    const filtered = sortGroups.filter(_sortGroup => _sortGroup === sortGroup);
    const isDuplicates = filtered.length > 1;
    if (isDuplicates) duplicatesGroupSet.add(sortGroup);
  });
  duplicatesGroupSet.forEach(group =>
    console.error(`treasureSorts の【${group}】が重複しているので、同じトレジャーが複数表示されています`)
  );

  //必要ないgroup を探す
  //多い分には問題ないし、tagAccu でも使いたいため削除予定
  // const isOverGroups = sortGroups.length > treasureGroupSet.size;
  // if (isOverGroups) {
  //   sortGroups.forEach(sortGroup => {
  //     const exists = treasureGroupSet.has(sortGroup);
  //     console.assert(exists, `treasureSorts の中に必要ないgroup【${sortGroup}】が含まれています`);
  //   });
  // }
}
