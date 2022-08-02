export type Health = {
  status: string,
}

export type Readiness = {
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