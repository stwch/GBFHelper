import { useEffect } from 'react';
import { initMultiply, intialMultiplyEntries, type NeedMultiplyCategory } from 'src/stores/multiplyStore';

interface Props {
  contentName: string;
  stepName: string;
  categoryName: NeedMultiplyCategory;
}
export default function ({ contentName, stepName, categoryName }: Props) {
  const initialMultiply = intialMultiplyEntries[categoryName];
  if (!initialMultiply) throw new Error(`カテゴリー「${categoryName}」はinitialMultiplyEntries に定義されていません`);
  useEffect(() => {
    initMultiply({ contentName, stepName, initialMultiply });
  }, []);
}
