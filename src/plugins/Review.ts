export default interface ReviewPlugin {
  request(): Promise<Boolean>

  isAvailable(): Boolean
}
