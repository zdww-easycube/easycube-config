module.exports = {
  // 用于打包时剥离全局依赖的打包配置
  globalDependencies: {
    vue: '$Vue',
    'vue-router': 'VueRouter',
    pinia: 'Pinia',
    'ant-design-vue': 'antd',
    dayjs: 'dayjs',
    'lodash-es': '_',
    lodash: '_',
    'dayjs/locale/zh-cn': 'dayjs_locale_zh_cn',
    'ant-design-vue/es/locale/zh_CN': 'antd.locales.zh_CN',
    '@vueuse/core': 'VueUse',
    echarts: 'echarts',
    vuedraggable: 'vuedraggable',
    axios: 'axios',
    '@easycube/request': 'EasyCubeRequest',
    'vue-demi': 'VueDemi',
    'tippy.js': 'tippy',
    '@easycube/playground': 'EasyCubePlayground',
  },

  // 用于打包时剥离全局依赖的打包配置
  externals: [
    'vue',
    'vue-router',
    'pinia',
    'vue-demi',
    'ant-design-vue',
    'dayjs',
    'lodash',
    'lodash-es',
    'dayjs/locale/zh-cn',
    'ant-design-vue/es/locale/zh_CN',
    '@vueuse/core',
    'vuedraggable',
    'echarts',
    'axios',
    '@easycube/request',
    '@easycube/playground',
  ],

  // 打包自定义组件时需要排除的项
  widgetExternals: ['tippy.js/dist/tippy.css', 'ant-design-vue/dist/antd.css'],
}
