module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: '测试', link: '/test/' },
      { text: 'Gitee', link: 'https://gitee.com/snares' },
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}