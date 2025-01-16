export default function () {
  const ua = navigator.userAgent;

  const iphone = ua.indexOf('iPhone') > 0;
  const ipad = ua.indexOf('Macintosh') > 0 || ua.indexOf('iPad') > 0;
  const androidSp = ua.indexOf('Mobile') > 0 && ua.indexOf('Android') > 0;
  const androidTab = ua.indexOf('Mobile') === -1 && ua.indexOf('Android') > 0;

  return iphone || ipad || androidSp || androidTab;
}
