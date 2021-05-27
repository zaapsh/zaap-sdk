import {v4 as uuid} from "uuid";

const webview = (window as any).ReactNativeWebView

export function isAvailable(): boolean {
  return !!webview?.postMessage
}

export function postMessage(pluginName: string, action: string, args: any[]): string {
  const requestId = uuid()
  if (webview !== undefined && webview.postMessage) {
    webview.postMessage(JSON.stringify({
      requestId,
      pluginName,
      action,
      arguments: args,
    }))
  }
  return requestId
}

export function waitResponseFor(pluginName: string, requestId: string): Promise<any> {
  return new Promise((resolve, reject) => {
    function onMessage(event: any) {
      try {
        const data = JSON.parse(event.data)
        if (data.type === 'response/success' && data.pluginName === pluginName && data.requestId === requestId) {
          window.removeEventListener('message', onMessage)
          resolve(data.payload);
        } else if (data.type === 'response/failure' && data.pluginName === pluginName && data.requestId === requestId) {
          window.removeEventListener('message', onMessage)
          reject(new Error(data.payload));
        }
      } catch (error) {}
    }
    window.addEventListener('message', onMessage)
  })
}

export function listenEvents(pluginName: string, handler: (eventName: string, payload: any) => void): () => void {
  function onMessage(event: any) {
    try {
      const data = JSON.parse(event.data)
      if (data.type === 'event' && data.pluginName === pluginName) {
        handler(data.name, data.payload)
      }
    } catch (error) {}
  }

  window.addEventListener('message', onMessage)
  return () => {
    window.removeEventListener('message', onMessage)
  }
}
