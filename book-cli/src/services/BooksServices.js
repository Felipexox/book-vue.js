import Api from '@/services/Api'

export default {
  getAllBooks () {
    return Api().get('books')
  },
  registerBook (credentials) {
    return Api().post('books', credentials)
  }
}
