import {postMessage, waitResponseFor} from "./bridge";
import InAppBrowser from "./plugins/InAppBrowser"
import Share from "./plugins/Share"
import OneSignal from "./plugins/OneSignal"
import {keys} from "ts-transformer-keys";

function registerPlugin<T>(pluginName: string, pluginMethods: string[]): T {
  return pluginMethods
    .map((key) => [key, function () {
      const requestId = postMessage(pluginName, arguments as any)
      return waitResponseFor(pluginName, requestId)
    }])
    .reduce((o, [k, f]) => ({...o, [k as string]: f}), {}) as T
}

function createZaap() {
  const Plugins = {
    InAppBrowser: registerPlugin<InAppBrowser>('InAppBrowser', keys<InAppBrowser>()),
    Share: registerPlugin<Share>('Share', keys<Share>()),
    OneSignal: registerPlugin<OneSignal>('OneSignal', keys<OneSignal>()),
  }
  return {Plugins}
}

const zaap = createZaap();

export default zaap
