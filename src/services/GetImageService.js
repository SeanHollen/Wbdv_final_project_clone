const getImage = (search) => {
  let cx = '010392335913420737404:y05xze-mcki';
  let key = 'AIzaSyD4p5fQdFLbrk46k0VstKHhWmQ5MmktLG0'
  return fetch('https://www.googleapis.com/customsearch/v1?key=' + key + '&cx=' + cx + '&q=' + search + '&searchType=image')
    .then((response) => response.json())
}

export default {
  getImage
}