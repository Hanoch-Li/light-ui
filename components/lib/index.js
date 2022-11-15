import Demo from './demo'
import Button from './button'
import Icon from './icon'

import { version } from '../../package.json'

const components = {
  Demo,
  Button,
  Icon,
}
debugger
const install = function (Vue) {
  debugger
  if (install.installed) return
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version,
  install,
  ...components,
}

export default API
