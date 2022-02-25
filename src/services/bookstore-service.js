export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Mircoservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/81D4AHNvMsL.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://antonz.ru/release-it/release-it.jpg'
    }
  ]

  getBooks() {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.data), 800)
      // reject(new Error('Something went wrong'))
    })
  }
}
