import { sendMessageAndWaitResponse } from "../util";

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
