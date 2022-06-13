(function () {
  function ua2Store(arg) {
    const ua = arg.ua || (window) ? navigator.userAgent : ''
    if (!ua) {
      console.error('ua2Store: user agent error')
      return
    }
    if (!arg.url) {
      console.error('ua2Store: argument url is required')
      return
    }
    if (ua.includes('XiaoMi') ||
      ua.includes('Mi ') ||
      ua.includes('Redmi ')) {
      location.href = arg.xiaomi || arg.url
      return
    }

    if (ua.includes('HUAWEI') ||
      ua.includes('Huawei')) {
        location.href = arg.huawei || arg.url
        return
    }

    if (ua.includes('vivo')) {
        location.href = arg.vivo || arg.url
        return
    }

    if (ua.includes('OPPO') ||
      ua.includes('oppo')) {
        location.href = arg.oppo || arg.url
        return
    }

    location.href = arg.url
  }

  window.ua2Store = ua2Store
})()