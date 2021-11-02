const private = require('./private/private')
// 把最后更改时间更改为 中国地区的样式
const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
  title: "Nooblack",
  description: "一个被程序员耽误了的...",
  head: [
    ['meta', { name: "baidu_union_verify", content: "a0036ccf0b657813fb236f80f376c429" }],
    ["link", { rel: "icon", href: "/images/favicon.svg" }],
    ['meta', { name: 'Keywords', content: 'T先生,T先生的主页,nooblack,NooBlack,nooblack.cc,NooBlack.cc' }],
    // 作者
    ['meta', { name: 'author', content: 'T先生,T先生的主页,nooblack,NooBlack,nooblack.cc,NooBlack.cc' }],
    // 百度统计
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?668842dc21c1b8f215b000531ec8f69e";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`],
    ['script', { src: "/utils/js/jq3.5.1.js" }, ``],
    ['script', { src: "/utils/js/click.js" }, ``],
    ['script', { src: "/js/1.js" }, ``],
  ],
  theme: "reco",
  themeConfig: {
    // 博客配置
    type: "blog",
    fullscreen: true,
    logo: "/images/favicon.svg",
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    sidebarDepth: 2,
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    author: "Nooblack",
    authorAvatar: "/images/avatar.svg",
    mode: "light", //默认显示模式  modePicker: false 关闭该按钮
    codeTheme: "tomorrow", // default 'tomorrow' okaidia
    record: "苏ICP备20016681号",
    recordLink: "https://icp.chinaz.com/home/info?host=nooblack.com",
    smooth: "true", //平滑滚动
    // 评论设置 
    valineConfig: {
      appId: private.appId,
      appKey: private.appKey,
      recordIP: true,
      placeholder: '填写邮箱地址可以及时收到回复噢...',
      visitor: true,
    },
    lastUpdated: '最后更新于', friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: '唐子涵的博客',
        desc: '至于未来会怎么样 反正路还长 天总会亮',
        link: 'https://www.zihanzy.com/'
      },
      {
        title: '李Sir的博客',
        desc: '活在当下',
        link: 'https://heroli.netlify.app/'
      },
      

      // ...
    ],
    nav: [
      // 导航栏
      { text: "主页", link: "/", icon: "reco-home" },
      {
        text: "工具箱",
        icon: "iconfont icon-tools",
        items: [
          { text: "在线JSON解析", link: "https://www.sojson.com/" },
          { text: "在线JSON生成实体类", link: "https://www.bejson.com/json2javapojo/new/" },
          { text: "编程语言排行榜", link: "https://www.tiobe.com/tiobe-index/" },
        ]
      },
      {
        text: "我的作品",
        icon: 'iconfont icon-tools',
        items: [
          { text: 'CloudMusic\t|\t米奇妙妙屋', link: 'https://penggang-home.gitee.io/cloud-music/#/discovery', icon: "iconfont icon-wangyiyunyinle" },
          { text: '电商后台管理系统 V：1.3.0', link: 'http://120.53.120.229:1921/#/login', icon: "iconfont icon-vue" },
          { text: '电商后台管理系统 V：1.2.0', link: 'http://120.53.120.229:1920/#/login', icon: "iconfont icon-vue" },
          { text: "电商平台实时监控系统(Echarts)", link: "http://120.53.120.229:9989/#/home", icon: "iconfont icon-vue" },
          { text: "仿微信聊天", link: "http://120.53.120.229:8100", icon: "reco-wechat" }, 
        ]
      },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      {
        text: "留言板",
        icon: "reco-suggestion",
        link: "/messageRoom", // messageRoom 只是自行新建的文件名，可自行命名
      },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "关于我",
            link: "/views/About/author",
            icon: "reco-account"
          },
          {
            text: "简历",
            link: "/views/About/resume",
            icon: "reco-document"
          },
          
          {
            text: "语雀",
            link: "https://www.yuque.com/tangtangtangtangtang-clw9m",
            icon: "reco-csdn",
          },
          {
            text: "GitHub",
            link: "https://github.com/penggang-home",
            icon: "reco-github",
          }
        ]
      }
    ],
  },
  // 项目开始时间
  // startYear: '2017',
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页 ！',
  markdown: {
    lineNumbers: true, //代码显示行号
  }, // 搜索设置
  plugins: {
    //一键复制代码插件: "vuepress-plugin-code-copy": "^1.0.6",
    "vuepress-plugin-code-copy": true,
    // 阅读进度条: "vuepress-plugin-reading-progress": "^1.0.10",
    "reading-progress": true,

    // 分享插件: "vuepress-plugin-social-share": "^1.0.0"
     "social-share": {
       networks: ["qq", "weibo", "email"], //分享类型
       qq: "2845486124",
       email: "2845486124@gmail.com", //email地址
     },

    // 最后更改时间插件(内置)+moment 格式化为中国地区的样式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return moment(timestamp).format('LLLL')
      }
    },
    // BGM播放器 "@vuepress-reco/vuepress-plugin-bgm-player": "^1.1.3",
    // "@vuepress-reco/vuepress-plugin-bgm-player": {
    //   audios: [
    //     {
    //       name: "超市",
    //       artist: "许嵩-呼吸之野",
    //       url:
    //         "/music/许嵩 - 超市.flac",
    //       cover:
    //         "/music/超市.jpg",
    //     },
    //     {
    //       name: "冰柜",
    //       artist: "许嵩,黄龄-呼吸之野",
    //       url:
    //         "/music/许嵩,黄龄 - 冰柜.flac",
    //       cover:
    //         "/music/冰柜.jpg",
    //     }
    //   ],
    //   autoShrink: true,
    //   shrinkMode: "mini"
    // },
    // 看板娘插件 https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang
    "@vuepress-reco/vuepress-plugin-kan-ban-niang":
    {
      theme: [ 'wanko','z16', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku'],
      clean: false,
      messages: {
        welcome: '欢迎来到Nooblack的世界',
        home: 'Go Noobalck Home',
        theme: '看我七十二变',
        close: '谷得拜哦'
      },
      width: 150,
      height: 219,
    },
    // 点击爆炸的彩带效果
    "cursor-effects": {
      size: 3,                    // size of the particle, default: 2
      shape: ['circle'],  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    },
    "@vuepress-reco/vuepress-plugin-pagation": {
      total: {
        type: Number,
        default: 10
      }
    },
     // 音乐播放器
      "meting":
      {
        meting: {
          // 网易
          server: "netease",
          // 读取歌单列表
          type: "playlist",
          mid: "319777286",
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: "#f9bcdd",
          // 播放顺序为随机
          order: "random",
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0,
        },
        mobile: {
          // 手机端去掉cover图
          cover: false,
        },
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
    },
      {
        "zh": "年轻就是无限的可能。",
        "en": "Youth means limitless possibilities."
      },
      {
        "zh": "真正的梦就是现实的彼岸。",
        "en": "Real dream is the other shore of reality."
      },
      {
        "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        "en": "Don't worry about the vague future, just strive for the clear present."
      },
      {
        "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
        "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
      }, {
        "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
        "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
      },
      {
        "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
        "en": "Life without regret, we can only do our best to not to regret."
      }
    ],
    "covers": [
      'https://pan.zealsay.com/zealsay/cover/7.jpg',
      'https://pan.zealsay.com/zealsay/cover/1.jpg',
      'https://pan.zealsay.com/zealsay/cover/2.jpg',
      'https://pan.zealsay.com/zealsay/cover/3.jpg',
      'https://pan.zealsay.com/zealsay/cover/4.jpg',
      'https://pan.zealsay.com/zealsay/cover/5.jpg',
      'https://pan.zealsay.com/zealsay/cover/6.jpg'
    ],
  }
}
