export type ReviewResult = boolean

export type ReviewAvailable = boolean

export default interface ReviewPlugin {
  request(): Promise<ReviewResult>

  isAvailable(): ReviewAvailable
}
