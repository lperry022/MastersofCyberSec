document.addEventListener("DOMContentLoaded", function() {
    const blackPage = document.getElementById("black-page");
    const parallaxText = blackPage.querySelector(".text");

    console.log("blackPage:", blackPage);
    console.log("parallaxText:", parallaxText);

    // Event listener to check scroll position
    window.addEventListener("scroll", function() {
        // Get the current scroll position
        const scrollPosition = window.scrollY || window.pageYOffset;

        console.log("scrollPosition:", scrollPosition);

        // Calculate the new font size based on scroll position
        const newSize = 1.2 + scrollPosition / 1000; // You can adjust the divisor to control the speed of growth

        console.log("newSize:", newSize);

        // Apply the new font size to the parallax text
        parallaxText.style.fontSize = newSize + "em";
    });

    // Mouse move event listener for logo movement
    document.addEventListener('mousemove', (event) => {
        const logo = document.getElementById('logo');
        const moveX = (event.clientX / window.innerWidth - 0.5) * 20; 
        const moveY = (event.clientY / window.innerHeight - 0.5) * 20; 

        logo.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Add this code to your script.js file
window.addEventListener('scroll', function() {
    var purpleContainer = document.getElementById('purple-container');
    var scrollPosition = window.scrollY;

    // Change the scroll position value based on your requirement
    if (scrollPosition >= 500) {
        purpleContainer.classList.add('expand');
    } else {
        purpleContainer.classList.remove('expand');
    }
});

const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) 

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  	
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    })
	})
}, false);



window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  const parallax = scrolled * 0.5; // Adjust the parallax speed here

  // Apply the parallax effect to the space image
  document.querySelector('.space-image').style.transform = `translateY(${parallax}px)`;
});
