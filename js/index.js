import request from 'superagent'
import imageTemplate from '../views/image.hbs'

const showImage = (err, res) => {
  const placeholder = document.getElementById('placeholder')
  placeholder.innerHTML = imageTemplate(res.body)
}

const getImage = () => {
  showImage(null, {
    body: {
      title: 'DEMO',
      explanation: 'DEMO'
    }
  })
}

const url = {
return    "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

}



document.addEventListener('DOMContentLoaded', getImage)
