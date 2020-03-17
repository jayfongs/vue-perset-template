# [vue-preset-template](https://github.com/jayfongs/vue-perset-template)

## 程序构建

```bash
# 安装依赖
yarn

# 运行开发环境
yarn serve

# 生成模拟正式环境
yarn build:stage

# 生成正式环境
yarn build:prod

# 提示和修复文件
yarn lint
yarn lint --fix

# 快速创建新的 view 或 component 模板
yarn plop
```

### 安装和引用 Element UI 主题

```bash
# 初始化 Element UI 变量文件和主题包
yarn theme:init

# 实时编译主题
yarn theme:watch

# 编译主题
yarn theme
```

> 初始化主题包后会在 `assets/scss` 目录下创建 `element-variables.scss` Element UI 变量文件和根目录下的 `theme` 主题包目录

在 `main.js` 中引用 `theme` 目录的主题样式

```javascript
// main.js

// css
import 'normalize.css'
import '@/assets/scss/index.scss'
// 引入主题样式
import '../theme/index.css'
```

## src 目录介绍

```
.
├── api           # 后台API相关
├── assets        # 静态资源文件
│   ├── fonts
│   ├── images
│   └── scss
├── business      # 全局逻辑组件
├── components    # 全局基础组件
├── directives    # 指令
├── filters       # 过滤器
├── layouts       # 公用的布局
├── mixins        # 混合
├── plugins       # 插件
├── router        # 路由
├── store         # vuex
├── utils         # 工具方法
└── views         # 页面
```
