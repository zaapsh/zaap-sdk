export default interface ReviewPlugin {
  request(): Promise<boolean>

  isAvailable(): boolean
}
