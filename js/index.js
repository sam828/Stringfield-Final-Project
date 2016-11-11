// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }

//var images=["https://www.youtube.com/embed/QqMeGfCcJxU","https://www.youtube.com/embed/kSr6I24PIxE","https://www.youtube.com/embed/jGtjZurFygY"];
//var imgIndex = 0;

//function prevImage(){
//  imgIndex--;
//}

//function nextImage(){
 // if (imgIndex < images.length) {
   // imgIndex++;
 // } else {
 //   imgIndex = 0;
  //}

// $("#main-image").attr("src", images[imgIndex]);


// $(".next").on("click",imgIndex= 1);
// $(".prev").on("click",prevImage);

// $(".next").on("click",addClass (active));
// $(".prev").on("click",prevImage);

// $(".next").addClass("active");


// set up variables (imagesArray and imageIndex)// set up variables
var dots = $(".dot");
var videos=["https://www.youtube.com/embed/QqMeGfCcJxU","https://www.youtube.com/embed/kSr6I24PIxE","https://www.youtube.com/embed/jGtjZurFygY"];
var vidIndex = 0;

// create a function to find the prev image
// if the current vidIndex is greater than 0 then minus 1 else set to the last index in the array (using .length)
// update the image by changing the 'src' attribute on #main-image
function prevImage(){
  if (vidIndex === 0) {
    vidIndex = videos.length - 1;
  } else {
    vidIndex--;
  }

  // $(dots[vidIndex])
  $(".video-container iframe").attr("src", videos[vidIndex]);
}

// create a function to find the next image
// if the current vidIndex is less than the length/total items in the array then add 1 else set it to first index in the array
// update the image by changing the 'src' attribute on .video-container iframe
function nextImage(){
  if (vidIndex < videos.length) {
    vidIndex++;
  } else {
    vidIndex = 0;
  }

  $(".video-container iframe").attr("src", videos[vidIndex]);
}

// on click next or prev find the next or prev image (using the functions created)
$(".next").on("click",nextImage);
$(".prev").on("click",prevImage);


