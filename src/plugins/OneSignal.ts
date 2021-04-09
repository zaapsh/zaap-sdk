export type ClearNotificationsResult = "SUCCESS"

export type DisablePushResult = "DISABLED" | "DISMISSED"

export type EnablePushResult = "ENABLE" | "DISMISSED"

export interface GetDeviceStateResult {
  isSubscribed: boolean,
  isPushDisabled: boolean,
  userId: string,
  pushToken: string,
  emailUserId?: string,
  emailAddress?: string,
  isEmailSubscribed: boolean,
  hasNotificationPermission?: boolean,
  notificationPermissionStatus?: number,
}

export interface SetExternalUserIdOptions {
  userId?: string
}

export type SetExternalUserIdResult = {
  results: object
}

export interface PostNotificationOptions {
  userIds?: Array<string>
  contents: object
}

export type PostNotificationResult = "SUCCESS" | "ERROR"

export type RemoveExternalUserIdResult = object

export interface RemoveNotificationOptions {
  notificationId?: string
}

export type RemoveNotificationResult = "SUCCESS"

export interface SetEmailOptions {
  email: string
  sha_token?: string
}

export type SetEmailResult = "SUCCESS" | "ERROR"

export type GetTagsResult = object

export interface SendTagOptions {
  key: string
  value: string
}

export type SendTagResult = object

export interface SendTagsOptions {
  tags: object
}

export type SendTagsResult = object

export interface DeleteTagOptions {
  key: string
}

export type DeleteTagResult = object

export interface DeleteTagsOptions {
  keys: Array<string>
}

export type DeleteTagsResult = object

export default interface OneSignalPlugin {
  clearNotifications(): Promise<ClearNotificationsResult>

  disablePush(): Promise<DisablePushResult>

  enablePush(): Promise<EnablePushResult>

  getDeviceState(): Promise<GetDeviceStateResult>

  logoutEmail(): Promise<boolean>

  setExternalUserId(opts: SetExternalUserIdOptions): Promise<SetExternalUserIdResult>

  postNotification(opts: PostNotificationOptions): Promise<PostNotificationResult>

  removeExternalUserId(): Promise<RemoveExternalUserIdResult>

  removeNotification(opts: RemoveNotificationOptions): Promise<RemoveNotificationResult>

  setEmail(opts: SetEmailOptions): Promise<SetEmailResult>

  getTags(): Promise<GetTagsResult>

  sendTag(opts: SendTagOptions): Promise<SendTagResult>

  sendTags(opts: SendTagsOptions): Promise<SendTagsResult>

  deleteTag(opts: DeleteTagOptions): Promise<DeleteTagResult>

  deleteTags(opts: DeleteTagsOptions): Promise<DeleteTagsResult>
}
