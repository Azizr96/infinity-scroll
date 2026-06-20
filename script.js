const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// unspalsh API
const count = 10;
const apiKey = 'yg56n4yJVLlrpIjdVslU4r0zieG4OfJj9cyS35Q2knc';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// global photoArray

let photoArray = [];

// Helper function to set attribute on DOM elements

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute('key', attributes[key]);
  }
}
// create Elements for links & photos and add to dom

function displayPhotos(){
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
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    getPhotos();
  }
})

//on load

getPhotos()