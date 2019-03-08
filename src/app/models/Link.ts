export interface Link {
  name: string,
  url: string,
  hideIfLogged?: boolean,
  protection?: {
    admin: boolean,
    user: boolean
  },
  sublinks?: Link[]
}