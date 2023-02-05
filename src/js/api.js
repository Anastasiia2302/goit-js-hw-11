import axios from "axios";

const URL = "https://pixabay.com/api/";
const KEY = "33338656-15c8519595d06b8db6a463933";



async function getImage (query,page) {
  const response = await axios.get(`${URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`)

 return response.data.hits;
}
    

export default { getImage };