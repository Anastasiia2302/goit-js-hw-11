import api from "./api.js";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";




const formEl = document.getElementById("search-form");

formEl.addEventListener("submit", onSubmit);

async function onSubmit (e) {
    e.preventDefault();


    const form = e.currentTarget;
    const inputValue = form.elements.searchQuery.value;

    try {
      const hits = await api.getImage(inputValue);

      if (hits.length === 0 )  { Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.");
    };

    const markup = hits.reduce(
      (markup, hits) => createMarkup(hits) = markup, "" );
    

      updateImagesList(markup);

    } catch (err) {
      onError(err);
    } finally {
      form.reset();
    }
  
  }

function  createMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
 return `

<div class="photo-card">
<a class="thumb" href ="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy"  />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <span>${likes}</span>
    </p>
    <p class="info-item">
      <b>Views</b>
      <span>${views}</span>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <span>${comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <span>${downloads}</span>
    </p>
  </div>
</div> 

`;
}
// webformatURL - ссылка на маленькое изображение для списка карточек.
// largeImageURL - ссылка на большое изображение.
// tags - строка с описанием изображения. Подойдет для атрибута alt.
// likes - количество лайков.
// views - количество просмотров.
// comments - количество комментариев.
// downloads - количество загрузок.

function updateImagesList(markup) {

  document.getElementById("gallery").innerHTML = markup;
}

function onError(){
 
}