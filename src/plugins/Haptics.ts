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

export interface ImpactOptions {
  style: ImpactStyle
}

export interface NotificationOptions {
  type: NotificationType
}

export default interface HapticsPlugin {
  impact(options?: ImpactOptions | undefined): Promise<void>

  notification(options?: NotificationOptions | undefined): Promise<void>
}
