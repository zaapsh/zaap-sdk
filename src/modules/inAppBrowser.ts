import { sendMessageAndWaitResponse } from "../util";

export interface OpenInAppBrowserOptions {
  url?: string
}

export type OpenInAppBrowserResult = "OPENED" | "DISMISSED"

export async function openInAppBrowser(opts: OpenInAppBrowserOptions): Promise<OpenInAppBrowserResult> {
  return sendMessageAndWaitResponse({
    type: "OPEN_IN_APP_BROWSER",
    payload: opts,
  })
}
