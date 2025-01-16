import type { LabelAndName } from 'src/type';
import type { LastArrayElement, TupleToUnion } from 'type-fest';

type DataEntries<T extends LabelAndName[]> = {
  [K in LastArrayElement<TupleToUnion<T>>]: LabelAndName;
};

export default function <const T extends LabelAndName[]>(labelAndNames: T): DataEntries<T> {
  return labelAndNames.reduce((accu, labelAndName) => {
    const name = labelAndName[1];
    accu = { ...accu, [name]: labelAndName };
    return accu;
  }, {} as DataEntries<T>);
}
