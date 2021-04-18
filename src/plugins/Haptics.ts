export type NotificationType = "success" | "warning" | "error"

export type ImpactType = "light" | "medium" | "heavy"

export default interface HapticsPlugin {
  selection(): Promise<void>

  notification(type: NotificationType): Promise<void>

  impact(type: ImpactType): Promise<void>
}
