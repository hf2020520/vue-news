const LoadingComponent = require('./Loading.vue')
const loading = {
  install: function(Vue) { //自定义插件
    Vue.component('Loading', LoadingComponent)
  }
}
module.exports = loading

