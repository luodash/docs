module.exports = {
  title: '天罗地网',
  description: '天下',
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/assets/img/logo.png',
    // Git
    repo: 'https://gitee.com/snares/docs',
    repoLabel: 'Gitee',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'SpringCloud', link: '/SpringCloud/', items: [
          { text: '系统安装', link: '/SpringCloud/01' },
          { text: '常用命令', link: '/SpringCloud/command' },
          { text: '关于我们', link: '/SpringCloud/03' }
        ]
      },
      {
        text: 'Linux', link: '/linux/', items: [
          { text: '系统安装', link: '/linux/01' },
          { text: '常用命令', link: '/linux/command' },
          { text: '关于我们', link: '/linux/03' }
        ]
      },
      {
        text: '更多', link: '/more/', items: [
          { text: '测试1', link: '/more/01' },
          { text: '测试2', link: '/more/02' },
          { text: '关于我们', link: '/more/03' }
        ]
      },
    ],
    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['/page-b', 'Explicit link text']
    // ]
  }
}