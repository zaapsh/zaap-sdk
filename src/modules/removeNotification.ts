import { sendMessageAndWaitResponse } from "../util";

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
