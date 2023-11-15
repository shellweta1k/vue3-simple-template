function useCookies() {
  const getItem = function (key: string): string | null {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'
          ),
          '$1'
        )
      ) || null
    );
  };

  const setItem = function (
    key: string,
    value: string,
    end: Date | string | number,
    path: string,
    domain: string,
    secure: string
  ) {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
      return false;
    }
    let expires = '';
    if (end) {
      switch (end.constructor) {
        case Number:
          expires = end === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + end;
          break;
        case String:
          expires = '; expires=' + end;
          break;
        case Date:
          expires = '; expires=' + (end as Date).toUTCString();
          break;
      }
    }
    document.cookie =
      encodeURIComponent(key) +
      '=' +
      encodeURIComponent(value) +
      expires +
      (domain ? '; domain=' + domain : '') +
      (path ? '; path=' + path : '') +
      (secure ? '; secure' : '');
    return true;
  };
  const removeItem = function (key: string, path: string, domain: string) {
    if (!key || !hasItem(key)) {
      return false;
    }
    document.cookie =
      encodeURIComponent(key) +
      '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
      (domain ? '; domain=' + domain : '') +
      (path ? '; path=' + path : '');
    return true;
  };
  const hasItem = function (key: string) {
    return new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(
      document.cookie
    );
  };
  const keys = /* optional method: you can safely remove it! */ function () {
    var aKeys = document.cookie
      .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
      .split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  };
  return {
    getItem,
    setItem,
    removeItem,
    hasItem,
    keys,
  };
}

export default useCookies;
