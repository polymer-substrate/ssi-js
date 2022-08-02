import { Health, Readiness } from './types'
import { Base } from '../base'

export class Status extends Base {
  getHealth() {
    return this.request<Health>('health')
  }

  getReadiness() {
    return this.request<Readiness>('readiness')
  }
}