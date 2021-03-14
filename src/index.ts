export { isNative, sendMessage } from './util'
export { share } from './modules/share'
export { inAppBrowser } from './modules/inAppBrowser'
export {
  getDeviceState,
  disablePush,
  enablePush,
  setExternalUserId,
  removeExternalUserId,
  setEmail,
  logoutEmail,
  clearNotifications,
  removeNotification,
  postNotification
} from './modules/oneSignal'
