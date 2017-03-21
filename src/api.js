let url = 'http://localhost:3010/api'

if (process.env.NODE_ENV === "production") {
  url = 'https://radiant-mountain-66074.herokuapp.com/api/'
}

export default { url }