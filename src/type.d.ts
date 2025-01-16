export type LabelAndName = [string, string];

export type Merge<T> = {
  [K in keyof T]: T[K];
};

interface Step {
  name: 'join' | 'last' | 'limit' | 'excahnge' | 'ability4';
  label: '加入' | '最終' | '超越' | '交換' | '4アビ';
  settingType: {
    name: 'element_change' | 'multiply';
    label: '属性変更' | '本数';
  };
}

export type ReadOnlyElementNames = ReadonlyArray<ElementNames['name']>;
export interface ElementNames {
  name: 'fire' | 'water' | 'earth' | 'wind' | 'light' | 'dark';
  label: '火' | '水' | '風' | '土' | '光' | '闇';
}

export interface NameData {
  name: string;
  label: string;
}

interface Treasure {
  name: string;
  label: string;
  number: number;
  element?: Element['name'];
  whose?: string;
  isSettingTarget?: boolean;
}

// export interface ContentsData {
//   categoy: {
//     name: string;
//     label: string;
//   };
//   contents: {
//     name: string;
//     label: string;
//     element?: Element;
//   }[];
//   steps: Step[];
//   requiredTreasures: {
//     [key in Step['name']]: {
//       settingType: {
//         name: string;
//         label: string;
//       };
//       targets: Treasure[];
//       treasures: Merge<Treasure & { isAccu?: boolean }>[];
//     }[];
//   };
// }
