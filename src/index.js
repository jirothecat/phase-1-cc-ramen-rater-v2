// index.js


// Callbacks
const handleClick = (ramen) => {
/* the variable handleClick with a ramen parameter will respond and change
every element to its corresponding ramen picture. */
  // Add code
  const imageElement = document.querySelector('.detail-image');
  const nameElement = document.querySelector('.name');
  const restaurantElement = document.querySelector('.restaurant');
  const ratingElement = document.getElementById('rating-display');
  const commentElement = document.getElementById('comment-display');


  imageElement.src = ramen.image;
  nameElement.textContent = ramen.name;
  restaurantElement.textContent = ramen.restaurant;
  ratingElement.textContent = ramen.rating;
  commentElement.textContent = ramen.comment;
};


const addSubmitListener = (form) => {

  // Add code
  form.addEventListener("submit", (event) => {
    event.preventDefault();

  const newName = document.querySelector('#new-name');
  const newRestaurant = document.querySelector('#new-restaurant');
  const newImage = document.querySelector('#new-image');
  const newRating = document.querySelector('#new-rating');
  const newComment = document.querySelector('#new-comment');

  const newItem = {
      name: newName.value,
      restaurant: newRestaurant.value,
      image: newImage.value,
      rating: newRating.value,
      comment: newComment.value,
  }

    const imgElement = document.createElement('img')
    imgElement.src = newItem.image
    const ramenMenuElement = document.querySelector('#ramen-menu')
    imgElement.addEventListener('click', () => handleClick(newItem));
    ramenMenuElement.appendChild(imgElement)

  })
}

const displayRamens = () => {
  // Add code
fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens => {
  ramens.forEach(ramen => {
    const imgElement = document.createElement('img')
    imgElement.src = ramen.image
    const ramenMenuElement = document.querySelector('#ramen-menu')
    imgElement.addEventListener('click', () => handleClick(ramen));
    ramenMenuElement.appendChild(imgElement)
  })
  });
}



const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  document.addEventListener("DOMContentLoaded", () => { 
    displayRamens();

    const form = document.getElementById('new-ramen')
    addSubmitListener(form)
  });
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
