webstrom设置环境变量 https://gist.github.com/moreta/d3989686b6a1f2416b5802cac8df16b4

https://scto.subscribelink.xyz/link/V42uDImjVFNIx2Ys?list=shadowrocket
# duanzihuang
# 192.168.123.217 家里无线 ipv4 地址

# vscode 断点 vue项目 node_modules 普通项目

### vue-cli 已经配置了 scss less stylus 只需安装对应 loader 即可使用

### vue inspect > output.js vue inspect plugins 只查看 plugins

### chainWebpack 是链式修改，而 configureWebpack 更倾向于整体替换和修改 都能修改

### // vue-loader 是 webpack 的加载器，允许你以单文件组件的格式编写 Vue 组件
### https://sourcegraph.com/github.com/zyzweb/my-note

<input v-model="sth" />
<input :value="sth" @input="sth = $event.target.value" /> //两行代码等价

var fm = new FormData(document.querySelector('form'));
  //formdata 要想看到值不能直接看到,只能调用get方法传入name才能看到值
  // console.log(fm.get('feature'));
  
const orderInfo = () => import(/_ webpackChunkName: "orderInfo" _/ '../components/vip/orderInfo.vue') 会有 chunkName
在 vue-cli.3.3 版本后 baseUrl 被废除了，要写成 publicPath
环境变量修改之后要重启
vue-cli-service serve 命令默认设置的环境是 development，你需要修改 package.json 中的 serve 脚本的命令为：
"serve": "vue-cli-service serve --mode stage" 才能更换环境变量
配置的权重 .env.[mode].local > .env.[mode] > .env.local > .env  
相同配置项权重大的覆盖小的，不同配置项它们会进行合并操作，类似于 Object.assign 的用法。
webpack 通过 DefinePlugin 内置插件将 process.env 注入到客户端代码中。 所以前端代码也可以访问 process.env
vue.config.js 可以使用所有.env 变量,但是 cli 只是将 VUE_APP 开头的注入到前端代码
uglifyjs 不支持 es6 语法，所以用 terser-webpack-plugin 替代 uglifyjs-webpack-plugin
实现原理不一样，作用基本相同，require.ensure 是 webpack 特有的，遵循 common.js 规范，而 import 是 ES6 的模块化引入方法，需要结合 Vue 的异步组件才能实现按需加载
html-minifier 是一款用于缩小 html 文件大小的工具，其有很多配置项功能，包括上述所列举的常用的删除注释、空白、引号等

npm i webpack-bundle-analyzer -D 然后 npm run build --report 查看 build 图
添加如下配置:

```js
chainWebpack: (config) => {
  /* 添加分析工具*/
  if (process.env.NODE_ENV === "production") {
    if (process.env.npm_config_report) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
        .end();
      config.plugins.delete("prefetch");
    }
  }
};
```

```js
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// webpack 内置插件，用于创建在编译时可以配置的全局常量
const { DefinePlugin } = require("webpack");

// 用于强制所有模块的完整路径必需与磁盘上实际路径的确切大小写相匹配
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

// 识别某些类型的 webpack 错误并整理，以提供开发人员更好的体验。
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

// 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 用于在 webpack 构建期间优化、最小化 CSS文件
const OptimizeCssnanoPlugin = require("optimize-css-assets-webpack-plugin");

// webpack 内置插件，用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
const { HashedModuleIdsPlugin } = require("webpack");

// 用于根据模板或使用加载器生成 HTML 文件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 用于在使用 html-webpack-plugin 生成的 html 中添加 <link rel ='preload'> 或 <link rel ='prefetch'>，有助于异步加载
const PreloadPlugin = require("preload-webpack-plugin");

// 用于将单个文件或整个目录复制到构建目录
const CopyWebpackPlugin = require("copy-webpack-plugin");
```

```js vue.config.js
css: {
    // 是否使用css分离插件 ExtractTextPlugin   设置之后build不会生成单独的css文件夹
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
}
```

```js
//在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(this.$store.state));
});
```

```js
objectSpanMethod: {
      type: Function,
      default: function({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
```

new Vue({
render: h => h(App),
i18n,
router,
store
}).\$mount('#app')

new Vue({
el: '#app',
router,
components: { App },
template: '<App/>'
});

###  runtime: 仅包含运行时,不包含编译器.就是没有compile的内容,所以runtime类型的文件会比较轻小.但是无法使用字符串模板
###  common: cjs规范,为什么会有commonjs规范呢,因为我们可以用于webpack1,或者进行SSR
###  umd: (universal module definition)兼容cjs和amd规范,用于浏览器

DOMContentLoaded —— 浏览器已经完全加载了 HTML，DOM 树已经构建完毕，但是像是 <img> 和样式表等外部资源可能并没有下载完毕。
load —— 浏览器已经加载了所有的资源（图像，样式表等）。
beforeunload/unload —— 当用户离开页面的时候触发。

zhihu-particle

mock    Apifox   yapi

 speed-measure-webpack-plugin  分析构建速度
### 优化构建速度
 - 1.减少执行构建的模块数量为目的的方向
 - 2.以提升单个模块构建速度为目的的方向
 - 3.以及通过并行构建以提升整体构建效率的方向

### npm run all 可以多线程同时执行npm命令
