module.exports = {
  title: '天罗地网',
  description: '天下',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: '更多', link: '/test/', items: [
          { text: '测试1', link: '/test/01' },
          { text: '测试2', link: '/test/02' },
          { text: '关于我们', link: '/test/03' }
        ]
      },
      { text: 'Gitee', link: 'https://gitee.com/snares' },
    ],
    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['/page-b', 'Explicit link text']
    // ]
  }
}