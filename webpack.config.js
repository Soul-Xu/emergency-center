const path = require('path');

module.exports = {
  // ...其他配置
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      // ...其他规则
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,  // 小于 8KB 的图片将被转换为 base64 格式
              name: 'images/[name].[ext]',  // 输出的文件路径和名称规则
            },
          },
        ],
      },
    ],
  },
};