import axios from "axios";



const URL = "https://pixabay.com/api/?key=33338656-15c8519595d06b8db6a463933&q=flower&image_type=photo&orientation=horizontal&safesearch=true&per_page=40";


// page = 1;


export default function axiosImage () {
    
  return  axios.get(URL).then((res) => {
    console.log(res);
    
    return res;
});
    };
    
