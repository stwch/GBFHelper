import { useEffect } from 'react';
import { initElementChange } from 'src/stores/elementChangeStore';

interface Props {
  contentName: string;
  stepName: string;
  initialElementName: string;
}
export default function ({ contentName, stepName, initialElementName }: Props) {
  useEffect(() => {
    initElementChange({
      contentName,
      stepName,
      elementName: initialElementName
    });
  }, []);
}
