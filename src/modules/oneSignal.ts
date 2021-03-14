import { sendMessage, sendMessageAndWaitResponse } from "../util";

export type ClearNotificationsResult = "SUCCESS"

export async function clearNotifications(): Promise<ClearNotificationsResult> {
  return sendMessageAndWaitResponse({
    type: "CLEAR_ONE_SIGNAL_NOTIFICATIONS",
  })
}

export type DisablePushResult = "DISABLED" | "DISMISSED"

export async function disablePush(): Promise<DisablePushResult> {
  return sendMessageAndWaitResponse({
    type: "DISABLE_ONE_SIGNAL_PUSH",
  })
}

export type EnablePushResult = "ENABLE" | "DISMISSED"

export async function enablePush(): Promise<EnablePushResult> {
  return sendMessageAndWaitResponse({
    type: "ENABLE_ONE_SIGNAL_PUSH",
  })
}

export type GetDeviceStateResult = {
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

export async function getDeviceState(): Promise<GetDeviceStateResult> {
  return sendMessageAndWaitResponse({
    type: "GET_ONE_SIGNAL_DEVICE_STATE",
  })
}

export async function logoutEmail(): Promise<boolean> {
  return sendMessage({
    type: "LOGOUT_ONE_SIGNAL_EMAIL",
  })
}

export interface SetExternalUserIdOptions {
  userId?: string
}

export type SetExternalUserIdResult = {
  results: object
}

export async function setExternalUserId(opts: SetExternalUserIdOptions): Promise<SetExternalUserIdResult> {
  return sendMessageAndWaitResponse({
    type: "SET_ONE_SIGNAL_EXTERNAL_USER_ID",
    payload: opts,
  })
}

export interface PostNotificationOptions {
  userIds?: Array<string>
  contents: object
}

export type PostNotificationResult = "SUCCESS" | "ERROR"

export async function postNotification(opts: PostNotificationOptions): Promise<PostNotificationResult> {
  return sendMessageAndWaitResponse({
    type: "POST_ONE_SIGNAL_NOTIFICATION",
    payload: opts,
  })
}

export type RemoveExternalUserIdResult = object

export async function removeExternalUserId(): Promise<RemoveExternalUserIdResult> {
  return sendMessageAndWaitResponse({
    type: "REMOVE_ONE_SIGNAL_EXTERNAL_USER_ID",
  })
}

export interface RemoveNotificationOptions {
  notificationId?: string
}

export type RemoveNotificationResult = "SUCCESS"

export async function removeNotification(opts: RemoveNotificationOptions): Promise<RemoveNotificationResult> {
  return sendMessageAndWaitResponse({
    type: "REMOVE_ONE_SIGNAL_NOTIFICATION",
    payload: opts,
  })
}

export interface SetEmailOptions {
  email: string
  sha_token?: string
}

export type SetEmailResult = "SUCCESS" | "ERROR"

export async function setEmail(opts: SetEmailOptions): Promise<SetEmailResult> {
  return sendMessageAndWaitResponse({
    type: "SET_ONE_SIGNAL_EMAIL",
    payload: opts,
  })
}

export type GetTagsResult = object

export async function getTags(): Promise<GetTagsResult> {
  return sendMessageAndWaitResponse({
    type: "GET_ONE_SIGNAL_TAGS",
  })
}

export interface SendTagOptions {
  key: string
  value: string
}

export type SendTagResult = object

export async function sendTag(opts: SendTagOptions): Promise<SendTagResult> {
  return sendMessageAndWaitResponse({
    type: "SEND_ONE_SIGNAL_TAG",
    payload: opts,
  })
}

export interface SendTagsOptions {
  tags: object
}

export type SendTagsResult = object

export async function sendTags(opts: SendTagsOptions): Promise<SendTagsResult> {
  return sendMessageAndWaitResponse({
    type: "SEND_ONE_SIGNAL_TAGS",
    payload: opts,
  })
}

export interface DeleteTagOptions {
  key: string
}

export type DeleteTagResult = object

export async function deleteTag(opts: DeleteTagOptions): Promise<DeleteTagResult> {
  return sendMessageAndWaitResponse({
    type: "DELETE_ONE_SIGNAL_TAG",
    payload: opts,
  })
}

export interface DeleteTagsOptions {
  keys: Array<string>
}

export type DeleteTagsResult = object

export async function deleteTags(opts: DeleteTagsOptions): Promise<DeleteTagsResult> {
  return sendMessageAndWaitResponse({
    type: "DELETE_ONE_SIGNAL_TAGS",
    payload: opts,
  })
}
