import type { FunctionComponent, ReactElement } from 'react';
import { starData, stepEntries } from 'src/assets/data/common';
import { treasureEntries, type TreasureGroupName } from 'src/assets/data/treasure';
import type { TreasureEntry } from 'src/helpers/createTreasureEntries';
import jukkenTreasures from 'src/helpers/data-utilities/jukkenTreasures';
import juttenTreasure from 'src/helpers/data-utilities/juttenTreasure';
import switchEiyuuOldTreasures from 'src/helpers/data-utilities/switchEiyuuOldTreasures';
import type { Content } from 'src/pages/contents-chart/[content]-[step]/index.astro';
import type { LabelAndName } from 'src/type';
import type { LastArrayElement, Merge } from 'type-fest';

export const requiredTagEntries = _createTagEntries([
  //英雄武器
  {
    names: ['属性変更まで(1本目のみ、武器エレメントx200)', 'eiyuu_element_change_class4'],
    treasures: switchEiyuuOldTreasures('class4')('class3_weapon_element', 1, { isSetting: true })
  },
  {
    names: ['属性変更まで(1本目のみ、武器エレメントx200)', 'eiyuu_element_change_ex2'],
    treasures: switchEiyuuOldTreasures('ex2')('ex_weapon_element', 1, { isSetting: true })
  },
  {
    names: ['英勇のエンブレム', 'eiyuu_enburemu'],
    treasures: [[treasureEntries['eiyuu-no-enburemu'], 1]]
  },
  {
    names: ['天聖のエンブレム', 'tensei_enburemu'],
    treasures: [[treasureEntries['tensei-no-enburemu'], 1]]
  },
  {
    names: ['魔獄のエンブレム', 'magoku_enburemu'],
    treasures: [[treasureEntries['magoku-no-enburemu'], 1]]
  },
  //終末の神機
  {
    names: ['ペンデュラム（第2スキル）', 'pendhuramu1'],
    treasures: [[treasureEntries['pendhuramu1'], 1]]
  },
  {
    names: ['ペンデュラム（第3スキル）', 'pendhuramu2'],
    treasures: [[treasureEntries['pendhuramu2'], 1]]
  },
  {
    names: ['チェイン', 'chein'],
    treasures: [[treasureEntries['chein'], 1]]
  },
  {
    names: ['ペンデュラム（限界超越）', 'penduramu_limit'],
    treasures: [[treasureEntries['pendhuramu-limit'], 1]]
  },
  //十賢者
  {
    names: ['召喚石5凸まで', 'akarumu_summon_5totu'],
    treasures: jukkenTreasures('akarumu_summon_ssr', 1, { star: 'totu_4' })
  },
  {
    names: ['賢者の上限解放', 'jukken_totu_4'],
    treasures: jukkenTreasures('jukken_join', 1, { star: 'join', thumbnailPathRoot: 'jukken' })
  },
  {
    names: ['礎武器5凸まで', 'isizue_weapon_5totu'],
    treasures: jukkenTreasures('isizue_weapon', 1, { star: 'totu_4' })
  },
  {
    names: ['至賢の領域全解放', 'siken_ryouiki'],
    treasures: jukkenTreasures('jukken_join', 1, { star: 'join', thumbnailPathRoot: 'jukken' })
  },
  //十天衆
  {
    names: ['天星の欠片', 'tensei_no_kakera'],
    treasures: juttenTreasure('tensei_no_kakera', 5, { isSetting: true })
  }
]);

export type RequiredTagEntries<T extends RequiredTagBase> = {
  [K in LastArrayElement<T['names']>]: RequiredTagData;
};
interface RequiredTagBase {
  names: LabelAndName;
  treasures: RequiredTargetsBase;
}
export type RequiredTagData = {
  name: string;
  label: string;
  treasures: TreasuresData;
};
function _createTagEntries<const T extends RequiredTagBase[]>(tagBase: T): RequiredTagEntries<T[number]> {
  return tagBase.reduce(
    (accu, tagEntry) => {
      const { names, treasures } = tagEntry;
      const tagName = names[1];
      const nameData = _createNameData(names);
      const treasuresData = _createTreasures(treasures);

      accu = { ...accu, [tagName]: { ...nameData, treasures: treasuresData } };
      return accu;
    },
    {} as RequiredTagEntries<T[number]>
  );
}

type LabelAndNameWithElementEntry = LabelAndName[][];
type Star = keyof typeof starData;
type RequireNumber = number;
export interface RequiredTargetOption {
  whose?: string;
  isStatic?: boolean;
  thumbnailPathRoot?: string;
  isSetting?: boolean;
  star?: Star;
  labelAddToEnd?: string;
}
export interface RequiredTreasureOption {
  whose?: string;
  isSetting?: boolean;
  ignoreElement?: boolean;
  splitElement?: boolean;
  noAccu?: boolean;
  tagAccu?: boolean;
  swapNumber?: number;
  star?: Star;
  staticSplitNumber?: number;
}

export type RequiredTargetsBase = [TreasureEntry, RequireNumber, ...RequiredTargetOption[]][];
export type RequiredTreasuresBase = [TreasureEntry, RequireNumber, ...RequiredTreasureOption[]][];
export interface ProcessInfoBodyProps {
  className?: string;
  children?: ReactElement | string;
  processIndex?: number;
  content?: Content;
  targets?: TreasuresData;
}
type ProcessInfoBodyReactComponent = FunctionComponent<ProcessInfoBodyProps>;
interface ProcessInfoModal {
  btnLabel?: string;
  BodyComponent: ProcessInfoBodyReactComponent;
}
export interface RequiredProcess {
  label: string;
  infoModal?: ProcessInfoModal;
  DirectInfo?: ProcessInfoBodyReactComponent;
  textDirectInfo?: string;
  infoOnly?: boolean;
}
export type RequiredTag = keyof typeof requiredTagEntries;
export type RequiredTreasuresEntry = {
  [K in keyof typeof stepEntries]?: {
    process: RequiredProcess;
    tags?: RequiredTag[];
    targetsAsLabel?: RequiredTargetsBase;
    targets?: RequiredTargetsBase;
    treasures?: RequiredTreasuresBase;
  }[];
};
export interface StepBase {
  names: LabelAndName;
  setting?: LabelAndName;
  notAddToPath?: boolean;
  staticRootPath?: string;
  staticStepPath?: string;
}
interface CategoryBase {
  names: LabelAndName;
  asCategory?: LabelAndName;
}
interface ContentsEntries {
  // category: LabelAndName;
  category: CategoryBase;
  contents: LabelAndNameWithElementEntry;
  steps: StepBase[];
  treasureSorts: TreasureSorts;
  requiredTreasures: RequiredTreasuresEntry;
}
export default function (contetnsEntries: ContentsEntries) {
  const { category, contents, steps, treasureSorts, requiredTreasures } = contetnsEntries;
  return {
    // category: _createNameData(category),
    category: _createCategory(category),
    contents: _createContents(contents),
    steps: _createSteps(steps),
    treasureSorts,
    requiredTreasures: _createRequiredTreasures(requiredTreasures)
  };
}
//戻り値の個別タイプ
export type CategoryData = ReturnType<typeof _createCategory>;
// export type CategoryData = ReturnType<typeof _createNameData>;
export type ContentData = ReturnType<typeof _createContents>[number];
export type StepData = ReturnType<typeof _createSteps>[number];
export type RequiredTreasureData = {
  settingType?: ReturnType<typeof _createNameData>;
  process: RequiredProcess;
  tags?: RequiredTag[];
  targetsAsLabel?: TreasuresData;
  targets?: TreasuresData;
  treasures?: TreasuresData;
};
export type TreasureSorts = {
  [key: string]: {
    groups: TreasureGroupName[];
    largestSort?: boolean;
    elementSort?: boolean;
  }[];
};

function _createCategory(category: CategoryBase) {
  const { names, asCategory } = category;
  const categoryNameData = _createNameData(names);
  const asCategoryData = asCategory ? { asCategory: _createNameData(asCategory) } : {};
  return {
    ...categoryNameData,
    ...asCategoryData
  };
}

function _createContents(contents: LabelAndName[][]) {
  return contents.map(contentsEntry => {
    const [contents, element] = contentsEntry;
    const createdElementData = element ? { element: _createNameData(element) } : {};
    return {
      ..._createNameData(contents),
      // element: _createNameData(element)
      ...createdElementData
    };
  });
}

function _createSteps(steps: StepBase[]) {
  return steps.map(stepEntry => {
    const { names, setting, ...options } = stepEntry;
    const stepData = _createNameData(names);
    const settingTypeData = setting ? { settingType: _createNameData(setting) } : {};
    return { ...stepData, ...settingTypeData, ...options };
  });
}

export type TreasuresData = ReturnType<typeof _createTreasures>;
type RequiredTreasuresData<T> = {
  [K in keyof T]: RequiredTreasureData[];
};
function _createRequiredTreasures<T extends RequiredTreasuresEntry>(requiredTreasures: T): RequiredTreasuresData<T> {
  const entries = Object.entries(requiredTreasures);
  return entries.reduce((accu, entry) => {
    const [stepName, dataEntries] = entry;
    const treasureData = dataEntries.map(dataEntry => {
      const { process, targetsAsLabel, targets, treasures, tags } = dataEntry;

      const createdTargetsAsLabel = targetsAsLabel ? { targetsAsLabel: _createTreasures(targetsAsLabel) } : {};
      const createdTargets = targets ? { targets: _createTreasures(targets) } : {};
      const createdTreasures = treasures ? { treasures: _createTreasures(treasures) } : {};
      const extractedTag = tags ? { tags } : {};

      return {
        process,
        ...extractedTag,
        ...createdTargetsAsLabel,
        ...createdTargets,
        ...createdTreasures
      };
    });
    const newAccu = { [stepName]: treasureData };
    return { ...accu, ...newAccu };
  }, {} as RequiredTreasuresData<T>);
}

function _createTreasures(treasures: RequiredTreasuresBase & RequiredTargetsBase) {
  return treasures.flatMap(treasure => {
    const [treasureEntries, number, option = {}] = treasure;
    const { star, labelAddToEnd, splitElement, ...optionData } = option as Merge<
      RequiredTreasureOption,
      RequiredTargetOption
    >;
    const [nameEntry, groupName, elementEntry] = treasureEntries;
    const treasureData = _createNameData(nameEntry);
    const elementData = elementEntry ? { element: elementEntry[1] } : {};
    const extractedStarData = star ? { star: starData[star] } : {};
    const createdTreasureData = {
      ...treasureData,
      label: labelAddToEnd ? `${treasureData.label}${labelAddToEnd}` : treasureData.label
    };
    const result = {
      ...createdTreasureData,
      number,
      group: groupName,
      ...elementData,
      ...optionData,
      ...extractedStarData
    };
    if (splitElement) {
      const splitEnty = {
        fire: 'light',
        water: 'dark',
        earth: 'dark',
        wind: 'light'
      };
      if (!result.element) {
        throw new Error(
          `${result.name} にはsplitElement が設定されていますが、element が存在しないためエラーになりました`
        );
      }
      // if (!result.isSetting) {
      //   throw new Error(`${result.name} にsplitElement が設定されていますが、isSetting が設定されていません`);
      // }
      const lightOrDark = splitEnty[result.element as 'fire' | 'water' | 'earth' | 'wind'];
      const newNumber = result.number / 2;
      return [
        result,
        {
          ...result,
          element: lightOrDark,
          number: newNumber
        }
      ];
    }
    return result;
  });
}

function _createNameData(entry: LabelAndName) {
  return {
    name: entry[1],
    label: entry[0]
  };
}
