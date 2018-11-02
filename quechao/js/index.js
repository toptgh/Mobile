var index = (function () {
  return {
    init: function () {
      this.event()
      this.resizeFontsize()
    },
    event: function () {
      var _this = this
      window.addEventListener('orientationchange', _this.resizeFontsize)
      window.addEventListener('resize', _this.resizeFontsize)
      // 背景音乐

      $('.music').append('<audio id=m_bg loop="loop" preload="auto" autoplay="autoplay" src="music/music.mp3"/>')
      var mp3 = $('#m_bg')[0]
      var toggle = true
      $('.music').click(function (e) {
        e.preventDefault()
        if (toggle) {
          mp3.pause()
          $('.music img').attr('src', 'images/musicBtnOff.png')
          toggle = false
        }else {
          mp3.play()
          $('.music img').attr('src', 'images/musicBtn.png')
          toggle = true
        }
      })
    },
    // 页面大小
    resizeFontsize: function () {
      var width = document.documentElement.clientWidth
      document.documentElement.style.fontSize = width / 10 + 'px'
    }
  }
}())
