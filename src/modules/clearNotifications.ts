import { sendMessageAndWaitResponse } from "../util";

export type ClearNotificationsResult = "SUCCESS"

export async function clearNotifications(): Promise<ClearNotificationsResult> {
  return sendMessageAndWaitResponse({
    type: "CLEAR_ONE_SIGNAL_NOTIFICATIONS",
  })
}
