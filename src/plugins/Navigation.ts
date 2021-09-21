import { TypedEventEmitter } from "rollup";

export interface BottomBarItem {
  icon: string
  name: string
  displayName: string
  badge: number | undefined
}

export interface BottomBarStyle {
  container?: {
    height?: number
    paddingTop?: number
    borderColor?: string
    borderTopWidth?: number
    backgroundColor?: string
  },
  item?: {
    iconSize?: number
    iconColor?: string
    textSize?: number
    textColor?: string
  },
  activeItem?: {
    iconSize?: number
    iconColor?: string
    textSize?: number
    textColor?: string
  }
}

export type Events = {
  bottomBarItemSelected: (item: BottomBarItem) => void
}

export interface NavigationBasePlugin {
  /**
   * Returns if the bottom bar is enabled.
   */
  isBottomBarEnabled(): Promise<boolean>

  /**
   * Enable the bottom bar.
   */
  setBottomBarEnabled(enabled: boolean): Promise<void>

  /**
   * Returns bottom bar items.
   */
  getBottomBarItems(): Promise<BottomBarItem[] | undefined>

  /**
   * Set bottom bar items.
   */
  setBottomBarItems(items: BottomBarItem[] | undefined): Promise<void>

  /**
   * Returns the current active item of the bottom bar.
   */
  getBottomBarActiveItem(): Promise<string | undefined>

  /**
   * Set the current active item of the bottom bar.
   */
  setBottomBarActiveItem(name: string | undefined): Promise<void>

  /**
   * Returns the bottom bar style.
   */
  getBottomBarStyle(): Promise<BottomBarStyle | undefined>

  /**
   * Set the bottom bar style.
   */
  setBottomBarStyle(style: BottomBarStyle | undefined): Promise<void>
}

export default interface NavigationPlugin extends NavigationBasePlugin, TypedEventEmitter<Events> {}
