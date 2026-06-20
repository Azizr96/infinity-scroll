const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
// global photoArray
let photoArray = [];

// unspalsh API
const count = 30;
const apiKey = 'o9xQ6DHjgF7h8w-bUlauVhuI13Zd4jgseEiH84gK1kw';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



// check if al images are loaded as well as adding loader
function imageLoaded(){
  console.log('image loaded');
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}
// Helper function to set attribute on DOM elements

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute('key', attributes[key]);
  }
}
// create Elements for links & photos and add to dom

function displayPhotos(){
  imagesLoaded = 0
  totalImages = photoArray.length;
  photoArray.forEach((photo) => {
    // create <a> to link to unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // create <img> per photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });
    // Event  listener, check when each is finished loading
    img.addEventListener('load', imageLoaded)
    //put image <img> inside the <a>, then put both inside image container element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}


//  Get photos for Unsplash APi

async function getPhotos(){
  try {
    const response = await fetch(apiURL);
    photoArray = await response.json();
    displayPhotos();
    
  } catch (error){
    //catch error here
  }
}

// check to see if scrolling near bottom of page, loade more photos/infite scrol

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false
    getPhotos();
  }
})

//on load

getPhotos()