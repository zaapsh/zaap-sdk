import { sendMessageAndWaitResponse } from "../util";

export type RemoveExternalUserIdResult = object

export async function removeExternalUserId(): Promise<RemoveExternalUserIdResult> {
  return sendMessageAndWaitResponse({
    type: "REMOVE_ONE_SIGNAL_EXTERNAL_USER_ID",
  })
}
