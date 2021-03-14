import { sendMessageAndWaitResponse } from "../util";

export type EnablePushResult = "ENABLE" | "DISMISSED"

export async function enablePush(): Promise<EnablePushResult> {
  return sendMessageAndWaitResponse({
    type: "ENABLE_ONE_SIGNAL_PUSH",
  })
}
