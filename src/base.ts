import crossFetch from 'cross-fetch';

type Config = {
  basePath?: string,
}

export abstract class Base {
  private basePath: string
  private fetch = crossFetch;

  constructor(config?: Config) {
    this.basePath = config && config.basePath || 'http://localhost:8080/'
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = this.basePath + endpoint

    const config = {
      ...options,
    }

    return this.fetch(url, config).then(r => {
      if (r.ok) {
        return r.json()
      }
      throw new Error(r.statusText)
    })
  }
}