const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //控制本地服务器行为
  devServer: {
    //设置端口
    port: 7000,
  },
  //设置链式webpack
  chainWebpack: confige => {
    //用confige获取html组件
    confige.plugin('html')
    //修改配置
      .tap(args => {
        //修改页面标题
        args[0].title = "通讯录管理系统";
        //注意函数要求返回值
        return args;
      })
  }
  
})
