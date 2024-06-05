export function fetchAllProducts() {
  return new Promise ( async (resolve) => {
    const response = await fetch("http://localhost:8008/products")
    const data = await response.json()
    resolve({data})
  })
}

export function fetchProductsByFilters(filter){
  // filter = {"category" : "smartphone"}
  let queryString = ''
  for (let key in filter){
    queryString += `${key}=${filter[key]}&`
  }
}