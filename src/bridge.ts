import {v4 as uuid} from "uuid";

const webview = (window as any).ReactNativeWebView

export function postMessage(pluginName: string, args: any[]): string {
  const requestId = uuid()
  webview.postMessage(JSON.stringify({
    requestId,
    pluginName,
    arguments: args,
  }))
  return requestId
}

export function waitResponseFor(pluginName: string, requestId: string): Promise<any> {
  return new Promise((resolve) => {
    function onMessage(event: any) {
      try {
        const data = JSON.parse(event.data)
        if (data.type === 'response' && data.pluginName === pluginName && data.requestId === requestId) {
          window.removeEventListener('message', onMessage)
          resolve(data.payload);
        }
      } catch (error) {}
    }
    window.addEventListener('message', onMessage)
  })
}
