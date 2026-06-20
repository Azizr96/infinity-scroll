const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// unspalsh API
const count = 10;
const apiKey = 'yg56n4yJVLlrpIjdVslU4r0zieG4OfJj9cyS35Q2knc';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// global photoArray

let photoArray = [];



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