import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-65fe8.firebaseio.com/'
})