const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// unspalsh API
const count = 10;
const apiKey = 'yg56n4yJVLlrpIjdVslU4r0zieG4OfJj9cyS35Q2knc';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// global photoArray

let photoArray = [];

// create Elements for links & photos and add to dom

function displayPhotos(){
  photoArray.forEach((photo) => {
    // create <a> to link to unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // create <img> per photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
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

//on load

getPhotos()