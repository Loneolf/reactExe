
// 从URL中获取Id，如果有ID，返回ID，如果没有ID，返回false
function getIdFromUrl() {
  let { pathname } = window.location;
  let Id = pathname.slice(pathname.lastIndexOf('/') + 1);
  if (Number.isInteger(parseInt(Id))) return Id;
  return false;
}

// 获取浏览器版本
function browserVersion() {
  let { userAgent } = navigator; // 取得浏览器的userAgent字符串
  let isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; // 判断是否IE<11浏览器
  let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  let isEdge = userAgent.indexOf('Edge') > -1 && !isIE; // Edge浏览器
  let isFirefox = userAgent.indexOf('Firefox') > -1; // Firefox浏览器
  let isOpera = userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1; // Opera浏览器
  let isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Edge') === -1 && userAgent.indexOf('OPR') === -1; // Chrome浏览器
  let isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1 && userAgent.indexOf('Edge') === -1 && userAgent.indexOf('OPR') === -1; // Safari浏览器
  if (isIE) {
    let reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp.$1);
    if (fIEVersion === 7) {
      return 'IE7';
    } else if (fIEVersion === 8) {
      return 'IE8';
    } else if (fIEVersion === 9) {
      return 'IE9';
    } else if (fIEVersion === 10) {
      return 'IE10';
    } else {
      return 'IE6';// IE版本<7
    }
  } else if (isIE11) {
    return 'IE11';
  } else if (isEdge) {
    return `Edge${userAgent.split('Edge/')[1].split('.')[0]}`;
  } else if (isFirefox) {
    return `Firefox${userAgent.split('Firefox/')[1].split('.')[0]}`;
  } else if (isOpera) {
    return `Opera${userAgent.split('OPR/')[1].split('.')[0]}`;
  } else if (isChrome) {
    return `Chrome${userAgent.split('Chrome/')[1].split('.')[0]}`;
  } else if (isSafari) {
    return `Safari${userAgent.split('Safari/')[1].split('.')[0]}`;
  } else {
    return -1;// 不是ie浏览器
  }
}

export { getIdFromUrl, browserVersion };
