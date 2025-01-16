import type { LabelAndName } from 'src/type';
import type { LastArrayElement, TupleToUnion } from 'type-fest';

type StarData<T extends LabelAndNameWithStars> = {
  [K in LastArrayElement<TupleToUnion<T>[0]>]: {
    name: string;
    label: string;
    star: StarName;
  };
};
type NumberString = '1' | '2' | '3' | '4' | '5';
type StarType = 'normal' | 'last' | 'limit';
type StarName = `${StarType}-on` | `${StarType}-off` | `limit-0${NumberString}` | 'red-on';
type LabelAndNameWithStars = [LabelAndName, StarName][];
export default function <const T extends LabelAndNameWithStars>(labelAndNameWithStars: T): StarData<T> {
  return labelAndNameWithStars.reduce((accu, data) => {
    const [labelAndName, star] = data;
    const nameData = {
      name: labelAndName[1],
      label: labelAndName[0]
    };
    const newAccu = { [nameData.name]: { ...nameData, star } };
    return { ...accu, ...newAccu };
  }, {} as StarData<T>);
}
