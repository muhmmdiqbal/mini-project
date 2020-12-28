import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'http://13.212.139.34:3000/',
//   headers: {'Content-Type': 'application/json'}
});

// Get Carousel Images
export const getCarousel = async () => {
  try {
    const todos = await axios.get('carousel?_limit=3')

    return todos.data
  } catch(err) {
    return console.error(err)
  }
}

// Get Characters
export const getCharacters = async () => {
    try {
      const todos = await axios.get('character?_limit=15')
  
      return todos.data
    } catch(err) {
      return console.error(err)
    }
}
  
// Get All Category
export const getAllCategory = async () => {
    try {
      const todos = await axios.get('allcategory?_limit=15')
  
      return todos.data
    } catch(err) {
      return console.error(err)
    }
}

// Get Category Action
export const getCategoryaction = async () => {
    try {
      const todos = await axios.get('action?_limit=15')
  
      return todos.data
    } catch(err) {
      return console.error(err)
    }
}

// Get Category Animation
export const getCategoryanimation = async () => {
    try {
      const todos = await axios.get('animation?_limit=15')
  
      return todos.data
    } catch(err) {
      return console.error(err)
    }
}

// Get Category Biography
export const getCategorybiography = async () => {
    try {
      const todos = await axios.get('biography?_limit=15')
  
      return todos.data
    } catch(err) {
      return console.error(err)
    }
}

// Get Category Comedy
export const getCategorycomedy = async () => {
    try {
      const todos = await axios.get('comedy?_limit=15')
  
      return todos.data
    } catch(err) {
      return console.error(err)
    }
  }
  
  
// Get Category Drama  
  export const getCategorydrama = async () => {
    try {
      const todos = await axios.get('drama?_limit=15')
  
      return todos.data
    } catch(err) {
      return console.error(err)
    }
  }

  