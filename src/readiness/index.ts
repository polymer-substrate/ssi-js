import { ReadinessResponse } from './types'
import { Base } from '../base'

export class Readiness extends Base {
  readiness() {
    return this.request<ReadinessResponse>('readiness')
  }
}