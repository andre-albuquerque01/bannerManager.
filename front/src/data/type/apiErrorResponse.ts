export interface ApiErrorResponse {
  message: string
  data: {
    message: string
  }
  errors: {
    [key: string]: string[]
  }
}
