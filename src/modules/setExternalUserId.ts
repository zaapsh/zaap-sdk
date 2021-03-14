import { sendMessageAndWaitResponse } from "../util";

export interface SetExternalUserIdOptions {
  userId: string
}

export type SetExternalUserIdResult = object

export async function setExternalUserId(opts: SetExternalUserIdOptions): Promise<SetExternalUserIdResult> {
  return sendMessageAndWaitResponse({
    type: "SET_ONE_SIGNAL_EXTERNAL_USER_ID",
    payload: opts,
  })
}
