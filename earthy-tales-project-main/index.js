
document.addEventListener("DOMContentLoaded", function() {
  selectImage(2); // Select the second image initially
});



function selectImage(imageIndex) {
    // Reset all images and buttons
    var images = document.getElementsByClassName("profile-image");
    var buttons = document.getElementsByClassName("dot-button");
  
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove("selected");
      buttons[i].classList.remove("dot-selected");
    }
  
    // Select the clicked image and button
    var selectedImage = document.getElementById("profile" + imageIndex);
    var selectedButton = document.getElementsByClassName("dot-button")[imageIndex - 1];
  
    selectedImage.classList.add("selected");
    selectedButton.classList.add("dot-selected");
  }


  // const slider_items = $('.slider-items li'); 
  // const slider_dots = $('.slider-dots li');
  // const nav_next = $('.slider-nav.next');
  
  //courosel with buttons
  var slider = document.querySelector('.slider');
  var sliderImages = document.querySelectorAll('.slider-image');
  var currentImageIndex = 1;
  
  function updateSlider() {
    var translateXValue = -currentImageIndex * (sliderImages[0].offsetWidth + 20);
    slider.style.transform = 'translateX(' + translateXValue + 'px)';
  
    // Remove the "visible" class from all images
    sliderImages.forEach(function(image) {
      image.classList.remove('visible');
    });
  
    // Add the "visible" class to the selected image
    sliderImages[currentImageIndex].classList.add('visible');
  }
  
  function slideLeft() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
    }
    updateSlider();
  }
  
  function slideRight() {
    if (currentImageIndex < sliderImages.length - 1) {
      currentImageIndex++;
    }
    updateSlider();
  }
  
  updateSlider();
  




// 3D courosel for Desktop

var autoSwap = setInterval( swap,7000);

//pause slideshow and reinstantiate on mouseout
$('.carousel, .slider').hover(
  function () {
    clearInterval(autoSwap);
}, 
  function () {
   autoSwap = setInterval( swap,7000);
});

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel>li').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('.carousel>li').each(function(index) {
    items[index] = $(this).text();
});

//swap images function
function swap(action) {
  var direction = action;
  
  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.left-pos').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemCount;
    }
    
    $('.right-pos').removeClass('right-pos').addClass('back-pos');
    $('.main-pos').removeClass('main-pos').addClass('right-pos');
    $('.left-pos').removeClass('left-pos').addClass('main-pos');
    $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
    
    startItem--;
    if(startItem < 1) {
      startItem = itemCount;
    }
  }
  
  //moving carousel forward
  if(direction == 'clockwise' || direction == '' || direction == null ) {
    function pos(positionvalue) {
      if(positionvalue != 'leftposition') {
        //increment image list id
        position++;
        
        //if final result is greater than image count, reset position.
        if((startItem+position) > resetCount) {
          position = 1-startItem;
        }
      }
    
      //setting the left positioned item
      if(positionvalue == 'leftposition') {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;
      
        //reset last image in list to left position if first image is in main position
        if(position < 1) {
          position = itemCount;
        }
      }
   
      return position;
    }  
  
   $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
   $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
   $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
   $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

    startItem++;
    position=0;
    if(startItem > itemCount) {
      startItem = 1;
    }
  }
}

//next button click function
$('#next').click(function() {
  swap('clockwise');
});

//prev button click function
$('#prev').click(function() {
  swap('counter-clockwise');
});

//if any visible items are clicked
$('.items').click(function() {
  if($(this).attr('class') == 'items left-pos') {
     swap('counter-clockwise'); 
  }
  else {
    swap('clockwise'); 
  }
});

  
//paragraph slider with buttons
let currentParagraph = 1;

// Display the initial paragraph and select the corresponding dot
document.addEventListener("DOMContentLoaded", function() {
  displayParagraph(currentParagraph);
  selectDot(currentParagraph);
});

function displayParagraph(paragraphId) {
  const paragraphs = document.getElementsByClassName("paragraph");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.remove("active");
  }
  const current = document.getElementById(`paragraph${paragraphId}`);
  current.classList.add("active");
}

function selectDot(paragraphId) {
  const dots = document.getElementsByClassName("dot-desk");
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }
  const current = document.getElementsByClassName("dot-desk")[paragraphId - 1];
  current.classList.add("active-dot");
}

function previousParagraph() {
  if (currentParagraph > 1) {
    currentParagraph--;
    displayParagraph(currentParagraph);
    selectDot(currentParagraph);
  }
}

function nextParagraph() {
  if (currentParagraph < 3) {
    currentParagraph++;
    displayParagraph(currentParagraph);
    selectDot(currentParagraph);
  }
}

function selectParagraph(paragraphId) {
  currentParagraph = paragraphId;
  displayParagraph(currentParagraph);
  selectDot(currentParagraph);
}



//stoned-slider-container

document.addEventListener("DOMContentLoaded", function() { 
  button_dots[0].classList.add('ready');
});
const button_dots = document.querySelectorAll('.carousel-button');

button_dots.forEach(dot => {
  dot.addEventListener('click', () => {
    button_dots.forEach(d => d.classList.remove('ready'));
    dot.classList.add('ready');
  });
});
