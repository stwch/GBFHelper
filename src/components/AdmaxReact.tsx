import { useEffect } from "react";

declare global {
  interface Window {
    admaxads?: AdmaxAdType[];
    __admax_tag__?: string;
  }
}

// 広告タイプの型
type AdmaxAdType = {
  admax_id: string; // 広告ID
  type: string; // PC/SP切替広告なら"switch"
};
// PC/SP切替広告のReactコンポーネント
interface Props {
  id: string;
}
export default function (props: Props) {
  useEffect(() => {
    // windowオブジェクトの広告リストを初期化
    if (!window['admaxads']) window['admaxads'] = [];
    // 広告リストを取得
    const admaxads: AdmaxAdType[] = window['admaxads'];
    // 広告リストになかったら追加
    if (!admaxads.some(ad => ad.admax_id === props.id))
      admaxads.push({
        admax_id: props.id,
        type: 'switch'
      });
    // 外部JSを読み込んで広告リストを実際に表示
    const scriptDOM = document.createElement('script');
    scriptDOM.src = 'https://adm.shinobi.jp/st/t.js';
    scriptDOM.async = true;
    document.body.appendChild(scriptDOM);
    // アンマウント時にJSタグと広告情報を削除
    return () => {
      document.body.removeChild(scriptDOM);
      admaxads.splice(
        admaxads.findIndex(ad => ad.admax_id === props.id),
        1
      );
      window['__admax_tag__'] = undefined;
    };
  }, []);
  return (
    <div
      className="admax-switch"
      data-admax-id={props.id}
      style={{ display: 'inline-block' }}
    />
  );
  // return false;
}
