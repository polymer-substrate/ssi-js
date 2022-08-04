export type ReadinessResponse = {
  status: {
    status: string,
    message: string
  },
  serviceStatuses: {
    credential: {
      status: string
    },
    did: {
      status: string
    },
    schema: {
      status: string
    }
  }
}