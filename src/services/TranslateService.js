
const translateFrench = (search) => {
  return fetch('https://api.mymemory.translated.net/get?q=' + search + '&langpair=en|fr')
    .then((response) => response.json())    
}

export default {
  translateFrench
}