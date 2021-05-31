export enum ImpactStyle {
  Heavy = 'HEAVY',
  Medium = 'MEDIUM',
  Light = 'LIGHT',
}

export enum NotificationType {
  Success = 'SUCCESS',
  Warning = 'WARNING',
  Error = 'ERROR',
}

export type ImpactOptions = ImpactStyle

export type NotificationOptions = NotificationType

export default interface HapticsPlugin {
  impact(options?: ImpactOptions | undefined): Promise<void>

  notification(options?: NotificationOptions | undefined): Promise<void>
}
