interface AdOption {
  isRemoveAd?: boolean;
}

export default function (opt?: AdOption) {
  const { isRemoveAd } = opt ?? {};

  const bannerUrl = 'https://adm.shinobi.jp/o/daf18ae5ecbb9592d00b07f489a345db';
  const removeUrl = 'https://adm.shinobi.jp/o/b7af2404cb763bb43462279c0a9cd789';
  const url = isRemoveAd ? removeUrl : bannerUrl;

  const scriptDOM = document.createElement('script');
  scriptDOM.src = url;
  return scriptDOM;
}
