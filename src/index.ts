import {EventEmitter} from "events";
import {TypedEventEmitter} from "rollup";
import {keys} from "ts-transformer-keys";
import {postMessage, listenEvents, waitResponseFor} from "./bridge";
import Browser from "./plugins/Browser"
import Share from "./plugins/Share"
import OneSignal from "./plugins/OneSignal"

const eventEmitterMethods = keys<TypedEventEmitter<{}>>()

function registerPlugin<T>(pluginName: string, pluginMethods: string[]): T {
  const emitter = new EventEmitter()
  listenEvents(pluginName, (eventName, payload) => emitter.emit(eventName, payload))
  return {
    ...pluginMethods
      .filter((v) => !eventEmitterMethods.includes(v as any))
      .map((key) => [key, function () {
        const requestId = postMessage(pluginName, key, Object.values(arguments) as any);
        return waitResponseFor(pluginName, requestId);
      }])
      .reduce((o, [k, f]) => ({...o, [k as string]: f}), {}),
    on: emitter.on.bind(emitter),
    once: emitter.once.bind(emitter),
    addListener: emitter.addListener.bind(emitter),
    removeListener: emitter.removeListener.bind(emitter),
    removeAllListeners: emitter.removeAllListeners.bind(emitter),
  } as unknown as T
}

function createZaap() {
  const Plugins = {
    Browser: registerPlugin<Browser>('Browser', keys<Browser>()),
    Share: registerPlugin<Share>('Share', keys<Share>()),
    OneSignal: registerPlugin<OneSignal>('OneSignal', keys<OneSignal>()),
  }
  return {Plugins}
}

const zaap = createZaap();

export default zaap
