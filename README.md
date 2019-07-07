# 基于electron的桌面应用

# 目录结构
.
├── config
│   ├── main
│   │   └── webpack.config.js
│   └── renderer
│       ├── webpack.config.js
│       └── webpackDevServer.config.js
├── dist
│   ├── main
│   └── renderer
├── mock
├── node_modules
├── public
├── scripts
│   ├── start.js ·························· 开发环境启动服务
│   ├── start-renderer.js
│   └── build-renderer.js
├── src
│   ├── main ······························ 主进程代码
│   ├── renderer ·························· 渲染进程代码
│   ├── web-template ······················ 项目模板
│   └── setupProxy.js ····················· 代理配置
├── babel.config.js ······················· babel配置
├── package.json
└── README.md

#启动服务
npm run start