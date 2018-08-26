export interface Link {
  name: string,
  url: string,
  protection: {
    admin: boolean,
    user: boolean
  }
}