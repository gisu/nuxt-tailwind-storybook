import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import PortalsVue from 'portal-vue'
import { action } from '@storybook/addon-actions'
import { configure, addDecorator } from '@storybook/vue'
import './app.css'
import i18n from './helper/i18n'

Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(PortalsVue)

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

addDecorator(() => ({
  template: '<story/>',
  i18n,
}))

const loaderFn = () => {
  const allExports = [
    require('./additional/basic/introduction.stories.js'),
  ]

  const req = require.context('../components/', true, /\.stories\.js$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
