import { sendMessageAndWaitResponse } from "../util";

export type LogoutEmailResult = "SUCCESS" | "ERROR"

export async function logoutEmail(): Promise<LogoutEmailResult> {
  return sendMessageAndWaitResponse({
    type: "LOGOUT_ONE_SIGNAL_EMAIL",
  })
}
