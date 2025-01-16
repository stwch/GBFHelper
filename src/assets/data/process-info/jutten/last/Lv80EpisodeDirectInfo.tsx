import PReact from 'src/components/PReact';
import type { ProcessInfoBodyProps } from 'src/helpers/createContentsData';

export default function ({ targets }: ProcessInfoBodyProps) {
  return <PReact>どの強化段階でもいいので【{targets?.[0].label}】の装備が必要</PReact>;
}
