import { useCurrentMultiply } from 'src/stores/multiplyStore';

interface Props {
  processLabel: string;
  number: number;
}
export default function ({ processLabel, number }: Props) {
  const currentMultiply = useCurrentMultiply();
  if (!currentMultiply) return '-';
  const replaced = processLabel.replace('total', `${currentMultiply.total * number}`);
  return replaced;
}
