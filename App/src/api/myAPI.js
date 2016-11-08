import axios from 'axios'
import uuid from 'node-uuid'

// example API function that is used elsewhere in the app
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

// example API function that is used elsewhere in the app
export function tellTheWorld(text){
  console.log("Telling the world: " + text)
}

// not used in boilerplate but demonstrates a RESTful request using `axios`
export function communicateWithServer(){
  axios.get('http://localhost:3000/content')
    .then((data)=>{
      console.log(data)
    })
}
