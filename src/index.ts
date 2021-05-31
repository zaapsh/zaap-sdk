import {EventEmitter} from "events";
import {TypedEventEmitter} from "rollup";
import {keys} from "ts-transformer-keys";
import {postMessage, listenEvents, waitResponseFor, isAvailable} from "./bridge";
import App from "./plugins/App"
import Biometric from "./plugins/Biometric"
import Browser from "./plugins/Browser"
import Device from "./plugins/Device"
import Dialog from "./plugins/Dialog"
import Geolocation from "./plugins/Geolocation"
import Haptics from "./plugins/Haptics"
import OneSignal from "./plugins/OneSignal"
import Share from "./plugins/Share"
import Storage from "./plugins/Storage"
import Tracking from "./plugins/Tracking"
import Review from "./plugins/Review"

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
    App: registerPlugin<App>('App', keys<App>()),
    Biometric: registerPlugin<Biometric>('Biometric', keys<Biometric>()),
    Browser: registerPlugin<Browser>('Browser', keys<Browser>()),
    Device: registerPlugin<Device>('Device', keys<Device>()),
    Dialog: registerPlugin<Dialog>('Dialog', keys<Dialog>()),
    Geolocation: registerPlugin<Geolocation>('Geolocation', keys<Geolocation>()),
    Haptics: registerPlugin<Haptics>('Haptics', keys<Haptics>()),
    OneSignal: registerPlugin<OneSignal>('OneSignal', keys<OneSignal>()),
    Share: registerPlugin<Share>('Share', keys<Share>()),
    Storage: registerPlugin<Storage>('Storage', keys<Storage>()),
    Tracking: registerPlugin<Tracking>('Tracking', keys<Tracking>()),
    Review: registerPlugin<Review>('Review', keys<Review>()),
  }
  return {
    Plugins,
    isAvailable: isAvailable(),
  }
}

const zaap = createZaap();

export default zaap
