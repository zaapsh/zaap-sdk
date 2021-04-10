import {TypedEventEmitter} from "rollup";

export interface DeviceState {
  isSubscribed: boolean
  isPushDisabled: boolean
  userId: string
  pushToken: string
  emailUserId?: string
  emailAddress?: string
  isEmailSubscribed: boolean
  hasNotificationPermission?: boolean
  notificationPermissionStatus?: number
}

export interface OutcomeEvent {
  id: string
  session: string
  timestamp: number
  weight: number
  notification_ids: string[]
}

export type Events = {
  inAppMessageClick: (payload: object) => void
  notificationReceived: (payload: object) => void
  notificationOpened: (payload: object) => void
  permissionChanged: (action: object) => void
  subscriptionChanged: (action: object) => void
  emailSubscriptionChanged: (action: object) => void
}

export interface OneSignalBasePlugin {
  setRequiresUserPrivacyConsent(requiresUserPrivacyConsent: boolean): Promise<void>

  isUserProvidedPrivacyConsent(): Promise<boolean>

  provideUserConsent(granted: boolean): Promise<void>

  promptForPushNotificationsWithUserResponse(): Promise<boolean>

  getDeviceState(): Promise<DeviceState>

  disablePush(disable: boolean): Promise<void>

  setExternalUserId(id: string): Promise<object>

  removeExternalUserId(): Promise<object>

  getTags(): Promise<object>

  sendTag(key: string, value: string): Promise<void>

  sendTags(object: object): Promise<void>

  deleteTag(key: string): Promise<void>

  deleteTags(keys: string[]): Promise<void>

  setLocationShared(shared: boolean): Promise<void>

  promptLocation(): Promise<void>

  postNotification(payload: object): Promise<object>

  removeNotification(id: number): Promise<void>

  clearNotifications(): Promise<void>

  addTrigger(key: string, value: string): Promise<void>

  addTriggers(object: object): Promise<void>

  removeTriggerForKey(key: string): Promise<void>

  removeTriggerForKeys(keys: string[]): Promise<void>

  getTriggerValueForKey(key: string): Promise<string>

  pauseInAppMessages(pause: boolean): Promise<void>

  sendOutcome(name: string): Promise<OutcomeEvent>

  sendUniqueOutcome(name: string): Promise<OutcomeEvent>

  sendOutcomeWithValue(name: string, value: string | number): Promise<OutcomeEvent>

  setEmail(email: string): Promise<void>

  logoutEmail(): Promise<void>
}

export default interface OneSignalPlugin extends OneSignalBasePlugin, TypedEventEmitter<Events> {}
