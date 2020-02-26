import axios from 'axios'

let url = 'https://jsonplaceholder.typicode.com/posts/1/'

axios.get(url).then(response => {
  console.log(response.data)
})
