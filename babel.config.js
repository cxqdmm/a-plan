module.exports = {
  plugins: [
    ['@babel/plugin-transform-runtime',{
      corejs: false,
      regenerator: true,
      useESModules: true,
    }],    
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
  ],
  overrides: [{
    test: ["src/renderer"],
    presets: [
      "react-app"
    ],
    plugins: [
      "react-hot-loader/babel",
      [
        "import",
        {
          "libraryName": "antd",
          "style": true
        }
      ]
    ]
  }, {
    test: ["src/main"],
    presets: [
      ['@babel/preset-env', {
        useBuiltIns: 'usage',
        corejs: '3.1.4',
      }],
    ],
  }]
};