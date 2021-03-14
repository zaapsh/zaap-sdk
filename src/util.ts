import { v4 as uuid } from "uuid"

const webview = (window as any).ReactNativeWebView

export interface SendMessageOptions {
  type:
    "SHARE"                               |
    "OPEN_IN_APP_BROWSER"                 |
    "GET_ONE_SIGNAL_DEVICE_STATE"         |
    "DISABLE_ONE_SIGNAL_PUSH"             |
    "ENABLE_ONE_SIGNAL_PUSH"              |
    "SET_ONE_SIGNAL_EXTERNAL_USER_ID"     |
    "REMOVE_ONE_SIGNAL_EXTERNAL_USER_ID"  |
    "SET_ONE_SIGNAL_EMAIL"                |
    "LOGOUT_ONE_SIGNAL_EMAIL"             |
    "CLEAR_ONE_SIGNAL_NOTIFICATIONS"      |
    "REMOVE_ONE_SIGNAL_NOTIFICATION"      |
    "POST_ONE_SIGNAL_NOTIFICATION"
  payload?: object
}

export function isNative(): boolean {
  return webview?.postMessage !== undefined
}

export function sendMessage(opts: SendMessageOptions): boolean {
  if (!isNative()) {
    return false
  }
  webview?.postMessage(JSON.stringify(opts))
  return true
}

export function sendMessageAndWaitResponse(opts: SendMessageOptions): Promise<any> {
  const requestId = uuid()
  webview?.postMessage(JSON.stringify({
    ...opts,
    requestId,
  }))
  return Promise.resolve(undefined)
}
