export interface UserCreateDto {
  username: string
  password: string
  confirmedPassword: string
  email: string
  age?: number
  rememberMe: boolean
}