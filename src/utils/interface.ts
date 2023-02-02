export interface IUser {
  id?: string
  firstName?: string
  lastName?: string
  phone?: string
  password?: string
  email?: string
  balance?: string
  createdAt?: string
  updatedAt?: string
  
}
export interface CustomRequest {
    details: IUser
    file: object
    params: object
    query: object
    path: object
  }