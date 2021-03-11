import { v4 as uuid } from "uuid"

const webview = (window as any).ReactNativeWebView

export interface SendMessageOptions {
  type: "SHARE"
  payload: object
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
