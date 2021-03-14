import { sendMessageAndWaitResponse } from "../util";

export interface PostNotificationOptions {
  userIds?: Array<string>
  content: object
}

export type PostNotificationResult = "SUCCESS" | "ERROR"

export async function postNotification(opts: PostNotificationOptions): Promise<PostNotificationResult> {
  return sendMessageAndWaitResponse({
    type: "POST_ONE_SIGNAL_NOTIFICATION",
    payload: opts,
  })
}
