import { sendMessageAndWaitResponse } from "../util";

export type DisablePushResult = "DISABLED" | "DISMISSED"

export async function disablePush(): Promise<DisablePushResult> {
  return sendMessageAndWaitResponse({
    type: "DISABLE_ONE_SIGNAL_PUSH",
  })
}
