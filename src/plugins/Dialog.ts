interface AlertOptions {
  title: string
  message: string
  buttonTitle: string
}

interface PromptOptions {
  title: string
  message: string
  okButtonTitle: string
  cancelButtonTitle: string
  inputPlaceholder: string
  inputText: string
}

interface PromptResult {
  value: string
  cancelled: boolean
}

interface ConfirmOptions {
  title: string
  message: string
  okButtonTitle: string
  cancelButtonTitle: string
}

interface ConfirmResult {
  value: boolean
}

export default interface AppBasePlugin {
  /**
   * Show an alert dialog
   */
  alert(options: AlertOptions): Promise<void>

  /**
   * Show a prompt dialog
   */
  prompt(options: PromptOptions): Promise<PromptResult>

  /**
   * Show a confirmation dialog
   */
  confirm(options: ConfirmOptions): Promise<ConfirmResult>
}
