/**
 * @author: YouJie
 */

if (process.env.VUE_APP_VCONSOLE === 'true') {
  import('vconsole').then(module => {
    const VConsole = module.default
    new VConsole()
  })
}
