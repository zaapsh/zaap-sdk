import { sendMessageAndWaitResponse } from "../util";

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
