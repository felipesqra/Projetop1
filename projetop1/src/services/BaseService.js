import { api } from './api'

export class BaseServiceService {
  static loadString = () => {
    return api.get('/')
  }
}
