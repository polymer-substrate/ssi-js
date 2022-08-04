import { HealthCheckResponse } from './types'
import { Base } from '../base'

export class HealthCheck extends Base {
  healthCheck() {
    return this.request<HealthCheckResponse>('health')
  }
}