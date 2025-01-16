type Names<T extends string[]> = { [K in T[number]]: T[number] };
export default function <const T extends string[]>(groupNames: T): Names<T> {
  return groupNames.reduce((accu, groupName) => {
    accu = { ...accu, [groupName]: groupName };
    return accu;
  }, {} as Names<T>);
}
