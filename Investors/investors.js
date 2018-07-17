var __investors = function () {
  var log = console.log.bind('console')

  var newElement = function (tag) {
    return document.createElement(tag)
  }

  var newFragment = function () {
    return document.createDocumentFragment()
  }

  var bind = function (element, eventName, callback) {
    element.addEventListener(eventName, callback)
  }

  var unbind = function (element, eventName, callback) {
    element.removeEventListener(eventName, callback)
  }

  var bindFadeinup = function (element) {
    var e = element
    var max = window.innerHeight
    var min = 0
    var cls = e.className
    e.className = 'fadeinupBefore animation ' + cls

    var func = function () {
      var position = e.getBoundingClientRect()
      var top = position.top
      var bottom = position.bottom
      if (top < max && bottom > min) {
        e.className = 'fadeinup animation ' + cls
        unbind(window, 'scroll', func)
      }
    }
    bind(window, 'scroll', func)
  }

  var newInvestor = function (params) {
    var link = newElement('a')
    var href = params.href
    if (href !== '' && href) {
      link.href = href
      link.target = '_blank'
    }
    link.className = 'investor'

    var img = newElement('img')
    img.src = params.src
    img.className = 'investorImg'

    link.appendChild(img)
    bindFadeinup(link)
    return link
  }

  var insertInvestors = function () {
    var frag = newFragment()
    var imgs = g_ImgListInvestors
    var size = imgs.length
    for (var i = 0; i < size; i++) {
      var info = imgs[i]
      var e = newInvestor(info)
      frag.appendChild(e)
    }
    var investors = document.getElementById('id-investors-imgs')
    investors.appendChild(frag)
  }

  var afterDomloaded = function () {
    insertInvestors()
    g_ImgListInvestors = undefined
    unbind(window, 'DOMContentLoaded', afterDomloaded)
  }

  var main = function () {
    bind(window, 'DOMContentLoaded', afterDomloaded)
  }

  main()
}

__investors()
__investors = undefined