export enum ImpactStyle {
  Heavy = "HEAVY",
  Medium = "MEDIUM",
  Light = "LIGHT",
}

export enum NotificationType {
  Success = "SUCCESS",
  Warning = "WARNING",
  Error = "ERROR",
}

export interface ImpactOptions {
  style: ImpactStyle
}

export interface NotificationOptions {
  type: NotificationType
}

export default interface HapticsPlugin {
  /**
   * Trigger a haptics "impact" feedback
   */
  impact(options?: ImpactOptions | undefined): Promise<void>

  /**
   * Trigger a haptics "notification" feedback
   */
  notification(options?: NotificationOptions | undefined): Promise<void>
}
