import axios from 'axios'
import uuid from 'node-uuid'

export function convertToLowerCase(text){
  const p = new Promise((res, rej)=>{
    const x = {
      id: uuid.v4(),
      text: text.toLowerCase()
    }
    res(x)
  })
  return p
}

// not used in boilerplate but demonstrates a RESTful request
export function communicateWithServer(){
  axios.get('http://localhost:3000/content')
    .then((data)=>{
      console.log(data)
    })
}
